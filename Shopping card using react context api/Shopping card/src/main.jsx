
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Sucess from './Pages/Sucess.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [{
      path: '/:category?',
      element: <Product/>
    },
    {
      path:'/cart',
      element:<Cart />
    },
    {
      path: '/sucess',
      element: <Sucess/>
    }
  ]
  }

]
)

const root = createRoot(document.getElementById("root"))
root.render(
   <ProductContextProvider>
    <RouterProvider router={router}/>
   </ProductContextProvider>
    
)
