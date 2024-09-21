import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Sucess() {
  return (
    <div className='flex items-center justify-center font-bold gap-5 '><IoCheckmarkDoneOutline className='text-green-700'/>
    <h1 className="text-2xl font-semibold ">Order Placed Successfully !</h1>
     <Link to="/" className=" text-gray-600">Go to Products</Link>
     <Link to="/cart" className="text-gray-600">View Cart</Link>
    </div>
   
  )
}
