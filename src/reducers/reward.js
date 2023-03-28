import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const decrement = createAction("reward/decrement");
export const reset = createAction("reward/reset");
export const incrementByAmount = createAction("reward/incrementByAmout");

const initialState = {
  points: 1,
};
const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
    .addCase(decrement, (state, action) => {
      state.points--;
    })
    .addCase(reset, (state, action) => {
      state.points = 0;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    });
});

export default rewardReducer;
