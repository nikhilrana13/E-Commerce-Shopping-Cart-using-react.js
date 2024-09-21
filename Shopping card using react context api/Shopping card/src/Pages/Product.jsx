import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'


export default function Product() {
  const {products, addCart} =useContext(ProductContext)
  return (
    <div className='flex flex-wrap gap-6'>
      {
          
          products.map((product)=>{
            return(
              <div key={product.id} className='w-[200px] p-4 hover:shadow-lg'>
                <img src={product.image} alt={product.namer} className='w-[200px] h-[150px] object-contain block m-auto'></img>
                 {/* product info */}
                 <div className='flex flex-col gap-2 my-4  h-[130px] p-2'>
                   <p className='text-center font-bold'>{product.name}</p>
                   <p className='text-center text-sm'>${product.price}</p>
                   <p className='text-xs text-gray-500 text-xs'>{product.smallDescription}</p>
                 </div>
                 <button className='w-full bg-blue-600 text-white text-center text-xs p-2' onClick={()=>addCart(product)}>+ Add to cart</button>

              </div>
            )
          })
        }
      
    
      </div>
  )
}


