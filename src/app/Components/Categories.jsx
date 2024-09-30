"use client"

import React from 'react'

import { useDispatch } from 'react-redux';
import { asyncFetchProduct } from '../features/categorySlice';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { setCategory } from '../features/categorySlice';



const Categories = () => {
  const dispatch = useDispatch();


  const selectedCategory = useSelector((state) => state.categories.category);


  function handleClick(e) {
    e.preventDefault()
    console.log(e.target.textContent)
    if (selectedCategory === e.target.textContent) {
      dispatch(setCategory(''))
      dispatch(asyncFetchProduct())
    }
    else {
      dispatch(setCategory(e.target.textContent))
      dispatch(asyncFetchProduct(e.target.textContent))
    }

  }

  const { categories } = useSelector((state) => state.categories)

  return (
    <div className='flex bg-fuchsia-100 flex-wrap gap-4 m-10'>
      {categories.map(category => (
        <button value={category} onClick={handleClick} className={`m-2 bg-fuchsia-200 p-4 rounded-3xl hover:bg-fuchsia-700 hover:cursor-pointer ${selectedCategory === category ? 'bg-fuchsia-700 text-white' : 'bg-fuchsia-200 hover:bg-fuchsia-700'}`}>
          <h1>{category}</h1>
        </button>
      ))}
      
    </div>
    
  )
}

export default Categories