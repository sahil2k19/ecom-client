
import React, { useEffect, useState } from 'react';
import SearchFilter from './SearchFilter';
import ProductList from './ProductList'; 
import productsData from './productsData';
import axios from 'axios';


const ProductShowPage = () => {
  const [products, setProducts] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const getProducts =  () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}product`)
    .then((res)=>{
      setProducts(res.data.result);
    }).catch((err)=>{
      console.log(err);
    })
  };

  useEffect(()=>{
    getProducts()
  },[])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products?.filter((product) =>
    product?.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((product) => filter ? product?.category?.name === filter : true);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Ecommerce Site</h1>
      <SearchFilter handleSearch={handleSearch} handleFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductShowPage;