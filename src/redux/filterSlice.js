import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

 const SliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.input = action.payload;
      },
    },
  },
});

export const { addFilter }  = SliceFilter.actions;
export const  filterReducer = SliceFilter.reducer;