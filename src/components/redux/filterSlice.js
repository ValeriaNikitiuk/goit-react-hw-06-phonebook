import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

export const SliceFilter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter(state, action) {
         state.input = action.payload;
        }
    }
})

export const  addFilter  = SliceFilter.actions;
export const  filterReducer = SliceFilter.reducer;