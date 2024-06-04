import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from "@mui/material";
import Button from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addFieldsAction } from "../../store/FormsSlice";
import { addUserAction } from "../../store/SplitBillSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store/store";

interface IFormProps {
  fields: Field[];
  Component?: ReactNode;
  type?: "default" | "select" | "number";
  selectFields?: SelectFieldsType[];
  hidden?: "yes" | undefined;
}

type SelectFieldsType = {
  value: string;
};

type Field = {
  name: string;
  label?: string;
  type?: string;
};

type FormData = {
  [key: string]: string;
};

export const Form: FC<IFormProps> = ({
  fields,
  type = "default",
  Component,
  selectFields,
  hidden
}) => {
  const [formData, setFormData] = useState<FormData>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  let [onOpen, setOnOpen] = useState(true);
  const field = useSelector((state: RootState) => state.formsSlice.fields);
  const dispatch = useDispatch();

  const onlyNumbersQuery = (value: string) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent,
    name: string
  ) => {
    setFormData({
      ...formData,
      [name]:
        type === "number"
          ? onlyNumbersQuery(e.target.value.trim())
          : e.target.value.trim()
    });
  };

  useEffect(() => {
    field !== null && dispatch(
      addUserAction({
        id: uuidv4(),
        name: field ? field["Name"] : ""
      })
    );
  }, [field]);

  useEffect(() => {
    if (hidden === "yes") {
      setOnOpen(false);
    }
    if (!!hidden) return;
    return () => {};
  }, []);

  const component = useMemo(() => {
    if (Component) return Component;
    if (type === "select") {
      if (!selectFields) {
        alert("Select fields required");
        return null;
      }
      return fields.map((f, i) => {
        return (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>{f.name} </span>
            <InputLabel>{f.label}</InputLabel>
            <Select
              className="select"
              value={formData[f.name]}
              onChange={(e) => handleChange(e, f.name)}
            >
              {selectFields &&
                selectFields.map((field, i) => {
                  return (
                    <MenuItem key={i} value={field.value}>
                      {field.value}
                    </MenuItem>
                  );
                })}
            </Select>
          </Box>
        );
      });
    }
    return fields.map((field, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>{field.name}: </span>
        <TextField
          label={field.label}
          value={formData[field.name]}
          onChange={(e) => handleChange(e, field.name)}
        />
      </Box>
    ));
  }, [Component, type, selectFields, fields, formData]);

  return (
    <Box>
      {onOpen && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {component}
        </form>
      )}
      <Box
        sx={{
          margin: "10px 15px 10px 0"
        }}
      >
        <Button
          backgroundColor={"#fda949"}
          onClick={() => {
            dispatch(addFieldsAction(formData));
            setFormData(formData);
            if (hidden !== "yes") return;
            setOnOpen(!onOpen);
          }}
        >
          button
        </Button>
      </Box>
    </Box>
  );
};
