import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectSlice = (state: any) => state?.toast || initialState;

export const selectToastInfo = createSelector(
  [selectSlice],
  state => state.toastInfo,
);
