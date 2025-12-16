
//  YE BASICALLY EK FILE HAI JISME SARE FUNCTION/METHOD STORE RAGHEGE JO HUME PERFORM KRNE HAI COUNTER PAR 
//  AGAR COUNTER KE ALAVA KUCH AUR BANANA CHAHATE HAI TO USME BHI STORE RAHEGE METHODS RESPECTIVELY 

import { createSlice } from "@reduxjs/toolkit";

//  INITIAL VALUE IS ZERO
const initialState = {
  value: 0,
};

//  YAHA SLICE BANA RAHE HAI 
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    //  AGAR HAME VALUE LENI HAI YA DALNI HAI APNE HISAB SE TO PAYLOAD KA USE KREGE REDUX ME
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    multiply: (state) => {
      state.value *= 2;
    },
  },
});

export const { increment, decrement, incrementByAmount, multiply } =
  counterSlice.actions;

export default counterSlice.reducer;
