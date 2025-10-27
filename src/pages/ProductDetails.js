import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">تفاصيل المنتج</h1>
      <p className="text-center text-lg">معرف المنتج: {id}</p>
      <p className="text-center text-lg">تفاصيل المنتج ستظهر هنا</p>
    </div>
  );
};

export default ProductDetails;
