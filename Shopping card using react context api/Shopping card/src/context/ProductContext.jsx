import { createContext, useEffect, useState } from "react";
import { products_data } from "../data/productsdata";
import Product from "../Pages/Product";




export const ProductContext = createContext([]);



export const ProductContextProvider = ({children}) => {
    const [products,setProduct] = useState(products_data);
    const [Cart,setCart] = useState([]);
    const [invoice,setInvoice]  = useState({count:0,subTotal:0});
    const[message,setMessage] = useState('')



    const addCart = (product)=>{
        setMessage(`${product.name} added to the cart`)
        setCart(oldcart=>{
            let previous = [...oldcart];
            if(previous.length < 1){
                previous.push({...product,quantity:1})
            } else{
                const isProduct = previous.find(prod=>prod.id == product.id)
                if(!isProduct){
                    previous.push({...product,quantity:1})

                } else{
                    previous = previous.map(prod=>{
                        return prod.id === isProduct.id ? {...isProduct,quantity:isProduct.quantity+1}: prod;
                    })
                   
                    }
                    
                }
                 return previous;
            })
    }

    const removeCart = (product) =>{
        setMessage(`${product.name} removed from the cart`)
        setCart(oldcart => {
            let previous = [...oldcart];
            const isproduct = previous.find(prod => prod.id == product.id)
            if(isproduct){
                const index = previous.indexOf(isproduct);
                previous.splice(index,1);
            }
            return previous;
        })
    }

   
   const setInvoiceData = ()=>{
    setInvoice(previous=>{
        let newInvoice = {...previous,count:0,subTotal:0};
        Cart.forEach(product=>{

            newInvoice.count += product.quantity
            newInvoice.subTotal += product.price * product.quantity
        })
        return newInvoice
    })

   }

   useEffect(()=>{
    const timeout = setTimeout(() => {setMessage('')}, 600);
    setInvoiceData()
    return ()=>{
        clearTimeout(timeout)
    }

 
   },[Cart])
   

    const filterProducts = (category)=>{
        if(category){
            const filteredProducts = products_data.filter(product=>{
                if(product.category === category){
                   return product;
               }
           })
            
           setProduct(filteredProducts)
            
        } else{
            setProduct(products_data)
        }
       
    }

  return (
    <ProductContext.Provider value={{products,filterProducts, addCart,Cart,invoice,removeCart,setCart,setInvoice}}>
        {message && <div className=" fixed rounded-md shadow-lg right-0 top-20 bg-green-600 text-white min-w-[300px] p-2 text-center">{message}</div>}
        {children}
    </ProductContext.Provider>
  )
}


