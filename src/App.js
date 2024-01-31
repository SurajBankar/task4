import React from 'react'
import { Header1 } from './Component/Header1'
import { Home } from './Component/Home'
import { Works } from './Component/Works'
import { Explore } from './Component/Explore'
import { Blog } from './Component/Blog'
import { Review } from './Component/Review'
import { Footer } from './Component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header1></Header1>}></Route>
                    <Route path='home' element={<Home></Home>}></Route>
                    <Route path='work' element={<Works></Works>}></Route>
                    <Route path='explore' element={<Explore></Explore>}></Route>
                    <Route path='review' element={<Review></Review>}></Route>
                    <Route path='blog' element={<Blog></Blog>}></Route>
                    <Route path='footer' element={<Footer></Footer>}></Route>
                </Routes>
            </BrowserRouter>


        </div>

    )
}
