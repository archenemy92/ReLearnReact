import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type UserCredentialsType = {
  bill: string;
  ownExpense: string;
  debtorExpense: string;
  payer: string;
  id: string;
};

export type UserType = {
  id?: string;
  name?: string;
  urlImage?: string;
  oweDescription?: string;
  sex?: "male" | "female" | undefined;
};

interface IState {
  users: UserType[];
  selectedUser: UserType | null;
  userCredentials: UserCredentialsType | null;
}


const initialState: IState = {
  users: [
    {
      id: uuidv4(),
      name: "Woman",
      urlImage: "",
      oweDescription: "not split bill",
      sex: "female"
    },
    {
      id: uuidv4(),
      name: "MAN",
      urlImage: "",
      oweDescription: "not split bill",
      sex: "male"
    },
    {
      id: uuidv4(),
      name: "THEY",
      urlImage: "",
      oweDescription: "not split bill"
    }
  ],
  selectedUser: null,
  userCredentials: null
};

const splitBill = createSlice({
  name: "bill",
  initialState,
  reducers: {
    addUserAction: (state, action: PayloadAction<UserType>) => {
      state.users = [...state.users, action.payload];
    },
    deleteUserAction: (state, action) => {},
    selectUserAction: (state, action) => {
      state.selectedUser = action.payload;
    },
    clearSelectedUserAction: (state) => {
      state.selectedUser = null;
    },
    setUserCredentialsAction: (
      state,
      action: PayloadAction<UserCredentialsType>
    ) => {
      state.userCredentials = {
        ...action.payload
      };
    },
    clearCredentialsAction: (state) => {
      state.userCredentials = null;
    },
    changeUserCredentialsAction: (
      state,
      action: PayloadAction<{
        id: string;
        payer: string;
        billValue: number;
        ownExpense: number;
        userExpense: number;
      }>
    ) => {
      console.log(action.payload.payer);
      let bill = 0;
      bill = action.payload.billValue - action.payload.userExpense;
      if (action.payload.payer !== "you") bill = action.payload.userExpense;

      state.users = state.users.map((user) => {
        let srt = () => {
          if (!bill) {
            return `you and ${user.name} are even`;
          }
          if (action.payload.payer === "you") {
            return `${user.name} owes you ${bill}$`;
          }
          return `you owe ${user.name} ${bill}$`;
        };

        if (user.id === action.payload.id) {
          return {
            ...user,
            oweDescription: srt()
          };
        }
        return user;
      });
    }
  }
});

export const {
  addUserAction,
  deleteUserAction,
  selectUserAction,
  clearSelectedUserAction,
  setUserCredentialsAction,
  changeUserCredentialsAction
} = splitBill.actions;

export default splitBill.reducer;
