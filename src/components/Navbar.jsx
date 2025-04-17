import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    
    <header className='header' >
        <nav className="flex text-lg ml-200 font-medium bg-transparent p-3  space-x-30">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-black' : 'text-white'}>
        <p className=' hover:text-violet-700 h-8 w-16 m-1 rounded-xl p-0.2 px-1 bg-red-700 border-red-800 border-1'>Home</p>
        </NavLink>
        
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-black' : 'text-white'}>
            <p className=' hover:text-violet-700 h-8 w-16 m-1 rounded-xl p-0.2 px-1 bg-fuchsia-900 border-fuchsia-900 border-1'>About</p> 
            </NavLink>

            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-black': 'text-white'}>
            <p className=' hover:text-violet-700 h-8 w-17 m-1 rounded-xl p-0.2 px-1 bg-indigo-600 border-indigo-600 border-1 '>Project</p> 
            </NavLink>

           
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-black': 'text-white'}>
            <p className='  hover:text-violet-700 h-8 w-19 m-1 rounded-xl p-0.2 px-1 bg-emerald-600 border-emerald-600 border-1 '>Contact</p>
            </NavLink>

        </nav>

        
    </header>
   
    
  )
}

export default Navbar   

