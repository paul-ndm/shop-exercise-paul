import React, { useState, useEffect, useContext, createContext } from 'react';
import {products, userMaxl } from '../data/products'

const UserContext = createContext<any | undefined>(undefined)

export function useUser() {
    return useContext(UserContext)
  }

export const UserState = ({children} : any) => {

    const [checkingout, setCheckingout] = useState(false)
    const [userData] = useState<object>(userMaxl)
    const [searchedProducts, setSearchedProducts] = useState(products)
    const [cart, setCart] = useState([])
    const [bill, setBill] = useState(0)
    const [windowRounded, setWindowRounded] = useState(Math.floor(window.innerWidth / 100))

    const removeItem = (product : any) => {
        setCart((prev : any) : any => {
            const newCart = cart.filter((p : any ) => {
                if (p.name !== product.name) {
                    console.log(p)
                    return p
                } else {
                    const newAmount = p.amount - 1
                    if (newAmount > 0) {
                        p.amount = newAmount
                        return p
                    } else {
                        return false
                    }
                }
            })
            return newCart
        })
    }

    const addItem = (product : any) => {
        setCart((prev : any) : any => {
            if (!cart.length) {
                product.amount = 1
                return [...prev, product]
            } else {
            
            const cartNames = prev.map((p : any) => p.name)
            const inCart = cartNames.includes(product.name)

            if (inCart) {
            const newCart = prev.filter((p : any) => {
                    if (p.name !== product.name) {
                        return p
                    } else {
                        const newAmount = p.amount + product.amount
                        p.ammount = newAmount
                        return p
                    }
                })
            return newCart
            } else
                product.amount = 1
                return [...prev, product]
            }
        })
    }

    useEffect(() => {
        if(cart.length) {
        const prductSums = cart.map((product : any) => {
            return product.price * product.amount
        })
        const totalSum = prductSums.reduce((a, c) => a + c)
        setBill(totalSum)} else {
            setBill(0)
        }
    }, [cart])

    useEffect(() => {
      function handleResize() {
        const widhtCalc = Math.floor(window.innerWidth / 100)
        setWindowRounded(widhtCalc)
      }
      window.addEventListener('resize', handleResize)
    })

    const exports = {
        windowRounded, 
        bill,  
        checkingout, 
        setCheckingout, 
        userData, 
        cart, 
        searchedProducts,  
        setSearchedProducts,
        addItem,  
        removeItem}


    return (
        <UserContext.Provider value={exports}>
            {children}
        </UserContext.Provider>
    );
};