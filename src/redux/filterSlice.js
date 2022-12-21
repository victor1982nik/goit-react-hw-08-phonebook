import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers: {
    setFilter: {
      reducer(state, action) {        
        //state.filter = action.payload;
        return state = action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
