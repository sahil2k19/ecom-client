
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchFilter = ({ handleSearch, handleFilter }) => {
  const [category, setCategory] = useState([]);

  const getCategory = ()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}category`)
    .then((res)=>{
      setCategory(res.data.result);
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getCategory()
  },[])

  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded-md w-1/2"
      />
      <div className='flex border items-center justify-between border-gray-300 rounded-lg p-3'>
      <h3 className='mr-2 font-semibold text-xl'>Filter</h3>
      <select onChange={handleFilter} className="p-2 border border-gray-300 rounded-md">
        <option value="">All</option>
       {
        category?.map((i)=>{
          return <option key={i.id} value={i.name}>{i.name}</option>
        })
       }
      </select>
      </div>
    </div>
  );
};

export default SearchFilter;