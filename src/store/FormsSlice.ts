import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type FieldType = {
  [key: string]: string;
};

export type UserFormType = {
  id: string;
  name: string;
  label?: string;
};

interface IState {
  addUserForm: UserFormType[];
  fields?: FieldType | null;
}

const initialState: IState = {
  addUserForm: [
    { id: uuidv4(), name: "Name" },
    { id: uuidv4(), name: "avatarUrl" }
  ],
  fields: null
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    addUserFormAction: (state, action) => {},
    addFieldsAction: (state, action: PayloadAction<FieldType>) => {
      state.fields = action.payload;
    }
  }
});

export const { addUserFormAction, addFieldsAction } = formsSlice.actions;

export default formsSlice.reducer;
