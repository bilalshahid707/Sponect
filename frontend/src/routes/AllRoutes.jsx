import React from "react"
import { Routes,Route } from "react-router-dom"

import { HomePage,LoginPage,SignupPage } from "../imports"

export const AllRoutes = ()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes