import React, { useState } from 'react'
import {motion} from "framer-motion"
import {FaHome,FaBars} from "react-icons/fa"
import {MdSpaceDashboard,MdOutlineRememberMe} from "react-icons/md"
import {BiSearch} from "react-icons/bi"
import "./UserStyle.css"


import { NavLink } from 'react-router-dom'

const data=[
    {
    path:"/",
    name:"DASHBOARD",
    icon: <MdSpaceDashboard />
},
{
    path:"/",
    name:"HOME",
    icon: <FaHome />
},
{
    path:"/register",
    name:"MEMBERS",
    icon: <MdOutlineRememberMe /> 
}
];

export default function Sidebar({children}) {
    const  [isOpen, setIsOpen] =useState(false)
    const toggle= ()=>setIsOpen(!isOpen)
    
  return (
    <div className='main-container'>
        <motion.div animate={{width:isOpen ? "200px" :"40px"}}  className='sidebar'>
            <div className='top_section'>
                {isOpen && <h1 className='logo'>Multi_Level_Marketing</h1>}
                <div className='bars'>
                <FaBars onClick={toggle} />
            </div>
            </div>
            <div className='search-bar'>
                <div className='search'>
                <BiSearch />
                {isOpen && <input placeholder='search....' />}
            </div>
            </div>
        <section className='routes'>
            { data.map((route) =>
               <NavLink to={route.path} key={route.name}  className="link">
                <div className='icon'>{route.icon}</div>
              {isOpen &&  <div className='text-Link'>{route.name}</div>}
               
               </NavLink>
            )}
        </section>
        </motion.div>
        <main>{children}</main>
        
    </div>
  )
}
