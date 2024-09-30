
import * as api from '../api/index.js'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const asyncFetchCategories = createAsyncThunk(
  'fetchCategories',
  async () => {

    const { data } = await api.fetchCategoryList()
    return data
  },
)

export const asyncFetchProduct = createAsyncThunk(
  'fetchProducts',
  async (obj) => {
    if (obj.selectedCategory.length > 0) {
      const { data } = await api.fetchCategory(obj.selectedCategory)
      return data
    }
    const { data } = await api.fetchAllProducts(obj.selectedLimit , obj.selectedOffset)

    return data
  },
)


const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    products: [],
    length: 0,
    category: "",
    offset : 0,
    limit : 10,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.products = []; // Reset products when a new category is selected
      state.offset = 0; 
    },
    incrementOffset: (state, action) => {
      console.log("INCREMENT OFFSET")
      state.offset += 10; 
    }

  },

  extraReducers: (builder) => {
    
    builder.addCase(asyncFetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    })

    builder.addCase(asyncFetchProduct.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.length = action.payload.total;
    })

  },
});

export const { setCategory, incrementOffset } = categorySlice.actions;
export default categorySlice.reducer;
