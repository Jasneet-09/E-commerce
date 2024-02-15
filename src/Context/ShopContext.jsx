import React, { createContext, useEffect, useState } from 'react';
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index = 0; index<300+1; index++){
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [all_data,setAll_data] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_data(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((res)=>res.json())
            .then((data)=>setCartItems(data))
        }
    },[])
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));

        }
    }
    const getTotalCartAmount = () =>{
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item]>=0){
                let itemInfo = all_data.find((product)=>product.id===Number(item))
                console.log(itemInfo);
                if(itemInfo===undefined){
                    continue
                }
                else{
                     total += itemInfo.new_price * (cartItems[item]+1);
                }
               
            }
        }
        return total;
    }
    const getTotalCartItems =  () =>{
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item]>=0){
                let itemInfo = all_data.find((product)=>product.id===Number(item))
                if(itemInfo===undefined){
                    continue
                }
                else{
                     total += (cartItems[item]+1);
                }
               
            }
        }
        return total;
    }
    const contextValue = {all_data, cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;