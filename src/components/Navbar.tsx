 import React, { useState } from 'react'
 import {FaBars, FaTimes} from 'react-icons/fa'
 import {Link} from 'react-scroll'
 
 const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'education'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

   return (
     <div className="flex justify-between items-center w-full h-20 px-4 text-[#141414] bg-white drop-shadow-lg 
     fixed z-10">
        <div>
            <h1 className="text-5xl font-signiture ml-2">Raff</h1>
        </div>

        <ul className="hidden md:flex">
        {links.map(({ id, link}) => (
             <li key={id} className="px-4 cursor-pointer capitalize font-medium  hover:scale-110 duration-300 hover:text-[#f4a33d] hover:bg-[#FFEFD7] rounded-md drop-shadow-md">
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-[#141414] md:hidden hover:text-[#f4a33d] hover:bg-[#FFEFD7] rounded-md drop-shadow-md hover:scale-110 duration-300 p-4">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav &&(

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#fff3f1] to-[#f8dbd6] ">
        {links.map(({ id, link}) => (
             <li key={id} className="px4 cursor-pointer capitalize py-6 text-4xl hover:text-[#f4a33d] hover:bg-[#FFEFD7] rounded-md drop-shadow-md hover:scale-110 duration-300 p-5">
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
        </ul>

        )}
     </div>
   )
 }
 
 export default Navbar