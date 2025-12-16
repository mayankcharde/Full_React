//  SO BASICALLY HERE WE MADE A REDUX STORE 
//  YE EK STORE HAI JO HUME PROVIDE KRNA REHTA HAI


import { configureStore } from '@reduxjs/toolkit'
//  YE JO HUMNE METHODS KE FILES BANAYI THI USSE STORE ME DAL DIYAA YAHA
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        mayank: counterReducer,
    },
})

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux