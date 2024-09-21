import {Outlet, useFetcher, useParams} from 'react-router-dom'
import Navbar from './Components/Navbar'
import { useContext, useEffect } from 'react';
import { ProductContext } from './context/ProductContext';
 



function App() {
  const {filterProducts} = useContext(ProductContext)
  const {category} = useParams();

  useEffect(()=>{
    filterProducts(category)
  },[category])
  
  return (
    <div className=' min-h-screen  h-auto pb-40'>
      <Navbar />
      <div className='w-[80%] m-auto my-4 bg-white-100 items-center p-4'>
      <Outlet />
      </div>
      
    </div>
  )
}

export default App
