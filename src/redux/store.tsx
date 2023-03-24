import { createReducer, createAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

export const addToFirst = createAction("addToFirst");
export const addToSecond = createAction("addToSecond");
export const doNothing = createAction("doNothing");

const valuesReducer = createReducer<{
  firstNumber: number;
  secondNumber: number;
  numbers: number[];
}>(
  {
    firstNumber: 0,
    secondNumber: 0,
    numbers: [],
  },
  (builder) => {
    builder.addCase(doNothing, (state) => ({ ...state }));
    builder.addCase(addToFirst, (state) => {
      state.firstNumber++;
      state.numbers = [state.firstNumber];
    });
    builder.addCase(addToSecond, (state) => {
      state.secondNumber++;
      state.numbers = [state.firstNumber];
    });
  }
);

export const store = configureStore({
  reducer: valuesReducer,
});

export type RootState = ReturnType<typeof store.getState>;
