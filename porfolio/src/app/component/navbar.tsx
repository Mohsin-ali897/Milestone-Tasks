'use client'
import React, { useState } from 'react';
// import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {Link } from 'react-scroll';
import { headerItem } from '../constant/constant';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#09092d] text-white p-4 shadow-md mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mohsin Portfolio</h1>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to={headerItem.home.page} 
          smooth={true}
          duration={500}
          className="hover:text-gray-400">{headerItem.home.label}</Link></li>
          <li><Link to={headerItem.about.page}
          smooth={true}
          duration={500}
          className="hover:text-gray-400">{headerItem.about.label}</Link></li>
          <li><Link to={headerItem.projects.page}
          smooth={true}
          duration={500}
           className="hover:text-gray-400">{headerItem.projects.label}</Link></li>
          <li><Link to={headerItem.contact.page}
          smooth={true}
          duration={500}
          className="hover:text-gray-400">{headerItem.contact.label}</Link></li>
          <li><Link to={headerItem.skills.page}
          smooth={true}
          duration={500}
          className="hover:text-gray-400">{headerItem.skills.page}</Link></li>
        </ul>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
          <li><Link to={headerItem.home.page} 
          smooth={true}
          duration={500} className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to={headerItem.about.page}
          smooth={true}
          duration={500} className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to={headerItem.projects.page}
          smooth={true}
          duration={500} className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to={headerItem.contact.page}
          smooth={true}
          duration={500} className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to={headerItem.skills.page}
          smooth={true}
          duration={500} className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Experience</Link></li>
        </ul>
      )}
    </nav>
  );
}

// "use client"

// import { userInfo, headerItem } from '../constant/constant'
// import { TiThMenu } from "react-icons/ti"
// import React, { useState, useRef, useEffect } from 'react'
// import { Link as ScrollLink } from 'react-scroll'

// const Header: React.FC = () => {
//     const [NavItem, showNavItems] = useState<boolean>(false)
//     const navRef = useRef<HTMLDivElement>(null)

//     const handleNavItemClick = () => {
//         showNavItems(false) // Hide navbar when a link is clicked
//     }

//     const toggleNav = () => {
//         console.log("Toggle menu:", !NavItem);  // Debugging: check state toggle
//         showNavItems(prevState => !prevState)
//     }

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (navRef.current && !navRef.current.contains(event.target as Node)) {
//                 showNavItems(false) // Close navbar if clicked outside
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside)
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside)
//         }
//     }, [])

//     return (
//         <header className='bg-black text-white p-6 justify-between fixed top-0 z-10 w-full md:flex'>

//             {/* Left Part of Navbar */}
//             <div className='flex justify-between'>
//                 <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
//                 <TiThMenu 
//                     size={25}
//                     className='md:hidden cursor-pointer'
//                     onClick={toggleNav} // Toggle navbar on click
//                 />
//             </div>

//             {/* Right Part of Navbar with smooth transition */}
//             <div
//                 ref={navRef}
//                 className={`gap-2 flex flex-col absolute top-[2.5rem] left-[60%] bg-black w-[86.25px] md:w-[380px] md:static md:flex-row transition-all duration-300 ease-in-out  ${NavItem ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden md:flex md:opacity-100 md:max-h-full`}
//             >
//                 <ScrollLink
//                     to={headerItem.home.page}
//                     smooth={true}
//                     duration={500}
//                     className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
//                     onClick={handleNavItemClick}
                    
//                 >
//                     {headerItem.home.label}
//                 </ScrollLink>
//                 <ScrollLink
//                     to={headerItem.about.page}
//                     smooth={true}
//                     duration={500}
//                     className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
//                     onClick={handleNavItemClick}
//                 >
//                     {headerItem.about.label}
//                 </ScrollLink>
//                 <ScrollLink
//                     to={headerItem.skills.page}
//                     smooth={true}
//                     duration={500}
//                     className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
//                     onClick={handleNavItemClick}
//                 >
//                     {headerItem.skills.label}
//                 </ScrollLink>
//                 <ScrollLink
//                     to={headerItem.projects.page}
//                     smooth={true}
//                     duration={500}
//                     className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
//                     onClick={handleNavItemClick}
//                 >
//                     {headerItem.projects.label}
//                 </ScrollLink>
//                 <ScrollLink
//                     to={headerItem.contact.page}
//                     smooth={true}
//                     duration={500}
//                     className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
//                     onClick={handleNavItemClick}
//                 >
//                     {headerItem.contact.label}
//                 </ScrollLink>
//             </div>
//         </header>
//     )
// }

// export default Header
