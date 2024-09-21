import React, { useContext } from 'react'
import { FaBagShopping } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { products_categories } from '../data/productsdata';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const {invoice} = useContext(ProductContext)
  const isActive = (element)=>{
   return element?.isActive ? 'text-blue-600': ''

  }

  return (
    <div className='w-full h-20 border shadow-lg items-center flex justify-between px-6'>

        <NavLink className='flex flex-col items-center' to={'/'} >
         <FaBagShopping className='text-red-500 text-6xl mt-2 p-2'/>
        </NavLink>

        <ul className='flex items-center gap-10'>
          {
            products_categories.map((category)=>{
              return(
                <li key={category.value}>
                  <NavLink to={`/${category.value}`} className={isActive}>{category.label}</NavLink>
                </li>
              )
            }

          )}
          
        </ul>
        <Link to='/Cart' className='relative'>
            <FaShoppingCart  className='text-2xl'/>
            {
                invoice?.count > 0 && 
                <div className='absolute top-[0.120rem] right-[-0.875rem] w-4 h-4 text-xs bg-blue-700 text-white flex items-center justify-center rounded-full'>{invoice?.count}</div>
            }
           
        </Link>

    </div>
  )
}
