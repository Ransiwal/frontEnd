"use client"

import { Provider } from "react-redux";
import Categories from "./Components/Categories";
import store from "./reduxApp/store";

import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { asyncFetchCategories } from "./features/categorySlice";

import { asyncFetchProduct } from "./features/categorySlice";
import Products from "./Components/Products";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchCategories())
    // dispatch(asyncFetchProduct())
}
, []);

  return (<>
   <Categories />
<Products />

 </>
  );
}
// 1. I have implementes the ability to reload only when ALL Products are fetched when particular category 
//  is fetched all prpoduts are fethed in one go

// 2. I couldn't implemented search operation
