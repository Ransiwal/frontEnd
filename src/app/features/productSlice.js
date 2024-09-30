import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    setProducts: (state, action) => {
        
      state.items = [...state.items, ...action.payload.products];
      state.total = action.payload.total;
    },
    clearProducts: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { setProducts, clearProducts } = productSlice.actions;
export default productSlice.reducer;
