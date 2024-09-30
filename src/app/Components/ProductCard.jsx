"use client";

import Image from 'next/image'; 
import React from 'react';

const ProductCard = ({ product }) => {
  const {
    availabilityStatus,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    returnPolicy,
    shippingInformation,
    thumbnail,
    title,
    warrantyInformation,
    weight,
  } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 bg-white">
     
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2"><strong>Brand:</strong> {brand}</p>
        <p className="text-gray-700 text-base mb-2"><strong>Category:</strong> {category}</p>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold"><strong>Price:</strong> ${price}</p>
          <p className="text-sm text-green-500">{discountPercentage}% off</p>
          <p className="text-sm text-yellow-500"><strong>Rating:</strong> {rating}/5</p>
        </div>
      </div>

      <div className="px-6 pt-4 pb-2">
        <p className="text-sm text-gray-600 mb-2"><strong>Availability:</strong> {availabilityStatus} ({stock} in stock)</p>
        <p className="text-sm text-gray-600 mb-2"><strong>Shipping:</strong> {shippingInformation}</p>
        <p className="text-sm text-gray-600 mb-2"><strong>Return Policy:</strong> {returnPolicy}</p>
        <p className="text-sm text-gray-600 mb-2"><strong>Warranty:</strong> {warrantyInformation}</p>
        <p className="text-sm text-gray-600 mb-2"><strong>Weight:</strong> {weight} kg</p>
      </div>
    </div>
  );
};

export default ProductCard;