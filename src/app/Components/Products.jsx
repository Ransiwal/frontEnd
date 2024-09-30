"use client"

import React from 'react'
import { useState , useEffect} from 'react';
import { useSelector} from 'react-redux';
import ProductCard from './ProductCard';

import { useDispatch } from 'react-redux';

import { incrementOffset } from '../features/categorySlice';
import { asyncFetchProduct } from '../features/categorySlice';

const Products = () => {

  const dispatch = useDispatch();

  const selectedProduct = useSelector((state) => state.categories.products);
  const selectedOffset = useSelector((state) => state.categories.offset);
  const selectedCategory = useSelector((state) => state.categories.category);
  const selectedLimit = useSelector((state) => state.categories.limit);


  useEffect(() => {
      dispatch(asyncFetchProduct({selectedCategory, selectedLimit, selectedOffset }));
      
    
  }, [selectedCategory, selectedOffset, dispatch]);

  const loadMoreProducts = () => {
    dispatch(asyncFetchProduct({ selectedCategory, selectedLimit, selectedOffset }));
    dispatch(incrementOffset(limit));
  };


  const [products, setProducts] = useState([]);
  const limit = 10; // Number of products to fetch per batch


  useEffect(() => {
  }, []);

  useEffect(() => {
    if (selectedProduct.length > 0) {
      setProducts((prevProducts) => [...prevProducts, ...selectedProduct]);

    }
  }, [selectedProduct]);
  
  useEffect(() => {
    setProducts([]);
  }, [selectedCategory]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !loading) {
  //       setOffset((prevOffset) => prevOffset + limit);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [loading]);

  // useEffect(() => {
  //   if (offset > 0) {
  //     fetchProducts(); // Fetch next batch if offset changes
  //   }
  // }, [offset]);



  // const products = useSelector((state) => state.categories.products); 
    // console.log(products)

  return (
    <div className='m-10 gap-4 flex flex-wrap my-auto justify-center'>
      {products.map(product => (
        
          <ProductCard
          product = {product}
           />
      ))
    }

     <div className='w-full flex justify-center p-16 '>
     <button onClick={loadMoreProducts} className=" w-1/2 load-more-btn bg-fuchsia-500 text-white p-2 rounded-2xl">
        Load More Products
      </button>
     </div>
    </div>
    // <></>
  )
}

export default Products