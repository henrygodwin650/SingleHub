import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'
import BlogCard from './BlogCard'
import BlogContact from './BlogContact'
import BlogUpdate from './BlogUpdate.jsx'
import BlogPrice from './BlogPrice.jsx'



const MainBlogs = () => {
  return (
   <div className="">
    <Navbar />
    <BlogCard />
    <BlogContact />
    <BlogUpdate />
    <BlogPrice />
    <Footer />
   </div> 
  )
}

export default MainBlogs