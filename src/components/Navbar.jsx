import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    
    <header className='header' >
        <nav className="flex text-lg ml-220 font-medium bg-transparent p-3  space-x-30">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-black' : 'text-white'}>
        <p className=' hover:text-violet-700 h-9 w-15 rounded-xl p-1 bg-amber-600 border-rose-900 border-1  '>Home</p>
        </NavLink>
        
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>
            <p className=' hover:text-violet-700    '>About</p> 
            </NavLink>

            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500': 'text-white'}>
            <p className=' hover:text-violet-700 '>Project</p> 
            </NavLink>

           
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500': 'text-white'}>
            <p className=' hover:text-violet-700 '>Contact</p>
            </NavLink>

        </nav>

        
    </header>
    
  )
}

export default Navbar   

