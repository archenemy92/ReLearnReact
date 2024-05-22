import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type sortType = "asc" | "desc" | "checked" | "number" | "default";

interface IState {
  list: { id: string; checked: boolean; value: string; count: number, createdAdd: string }[];
  sortBy: sortType;
}

const initialState: IState = {
  list: [],
  sortBy: "default"
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    checkedAction: (state, action) => {
      state.list = state.list.map((el) => {
        if (action.payload === el.id) {
          return {
            ...el,
            checked: !el.checked
          };
        }
        return el;
      });
    },
    deleteAction: (state, action) => {
      state.list = state.list.filter((el) => {
        if (action.payload !== el.id) {
          return el;
        }
      });
    },
    addItem: (
      state,
      action: PayloadAction<{ query: string; count: number }>
    ) => {
      state.list = [
        ...state.list,
        {
          id: uuidv4(),
          value: action.payload.query,
          count: action.payload.count,
          checked: false,
          createdAdd: new Date().getTime().toLocaleString().replace(/\s/g, '')
        }
      ];
    },
    clearList: (state) => {
      state.list = [];
    },
    changeSortInstanceAction: (state, action) => {
      state.sortBy = action.payload;
    },
    sortListItemsAction: (state) => {
      if (state.sortBy === "asc") {
        state.list = state.list.sort((a, b) => a.value.localeCompare(b.value));
      }
      if (state.sortBy === "desc") {
        state.list = state.list.sort((a, b) => b.value.localeCompare(a.value));
      }
      if (state.sortBy === "checked") {
        state.list = state.list.sort((a, b) => Number(b.checked) - Number(a.checked));
      }
      if (state.sortBy === "number") {
        state.list = state.list.sort((a, b) => a.count - b.count);
      }
      if (state.sortBy === "default") {
        state.list = state.list.sort((a, b) => Number(a.createdAdd) - Number(b.createdAdd));
      }
    }
  }
});

export const {
  checkedAction,
  clearList,
  deleteAction,
  addItem,
  changeSortInstanceAction,
  sortListItemsAction
} = listSlice.actions;

export default listSlice.reducer;
