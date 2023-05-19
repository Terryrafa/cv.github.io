import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div id="home" className="h-screen w-full bg-[#ffffff] shadow-inner z-10">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
            <div className="flex flex-col justify-center h-auto z-0">
                <h2 className="text-4xl sm:text-7xl font-bold text-[#f4a33d] py-4 pt-14 drop-shadow-lg selection:bg-[#ff785d] selection:text-white">I'm Terry Davis  Raffael</h2>
                <p className="py-4 max-w-md selection:bg-[#f4a33d] selection:text-white">
                    I'm a web designer with a passion for designing and developing websites.
                    I have 3 years of experience designing websites.
                    Curretlly, learning other langues other than html, css, php, and javascript.
                </p>

                <div>
                    <Link to='contact' smooth duration={500} className="group text-black w-fit px-6 py-3 my-2 flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:text-[#ff785d] hover:bg-[#fff3f1] hover:scale-105 duration-300 hover:ease-in-out drop-shadow-lg">
                        Contact
                        <span className="group-hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className="rounded-2xl mt-10 mx-auto w-2/3 md:w-full md:ml-20 drop-shadow-lg" />
            </div>
        </div>
    </div>
  )
}

export default Home