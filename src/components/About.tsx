import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const About = () => {
    
    const child = "react-icons/";
    const link = [
      {
        id: 1,
        child: (
          <><FaInstagram size={30}/>Instagram
          </>
        ),
        href: 'https://www.instagram.com/justme.raffael/',
      },
      {
        id: 2,
        child: (
          <><FaGithub size={30}/>Github
          </>
        ),
        href: 'https://github.com/Terryrafa',
      },
      {
        id: 3,
        child: (
          <><FaWhatsapp size={30}/>WhatsApp
          </>
        ),
        href: 'https://wa.me/6281339358012',
      },
      {
        id: 4,
        child: (
          <><FaFacebook size={30}/>Facebook
          </>
        ),
        href: 'https://www.facebook.com/profile.php?id=100049933630643',
    
      },
    ]

  return (
    <div 
     id="about"
     className="w-full h-screen bg-[#ff775e] shadow-inner z-20">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#f4a33d] ">About</p>
            </div>
            <p className="text-xl mt-10 selection:bg-[#f4a33d] selection:text-white">Hi, I'm Terry Davis Raffael, but all my friends used to call me raffael or rafa, I'm a student from SMK Wira Harapan. I have 3 year's of experience at programing, I've been programing since 2020. The only langueges that I've been learning was Html, CSS, JavaScript, php, and C++. </p>
            
            <br />

            <p className="text-xl selection:bg-[#f4a33d] selection:text-white">My hobbies are Programing and Photography. I am still learning new langueges such as Next.Js, React, TypeScript, and tailwind. Yes, I did mention Photography, why did i mention this? it's because i love taking pictures most of my website is using my own shot of picture's. If you are interested on my picture's 
            <a className="border-b-4 border-[#f4a33d] cursor-pointer hover:text-[#ff785d] hover:bg-[#fff3f1] hover:scale-105 duration-300 hover:ease-in-out drop-shadow-lg hover:rounded-lg hover:border-transparent hover:p-1" href="https://www.instagram.com/justme.raffael/"> Click here</a></p>
<br />
            <div className='max-w-screen-lg p-4 flex flex-col  mx-auto pt-40 '>
          <ul className='grid sm:grid-cols-1 md:grid-cols-4 gap-8  sm:px-0'>

            {
              link.map(({id, child, href}) => (
                <li key={id} 
                className='flex justify-between w-40 h-14 bg-[#ff785d] drop-shadow-lg rounded-md hover:bg-white hover:scale-105 hover:text-[#ff785d] px-4 duration-300 ease-in-out '>

                <a href={href} target='_blank'
                  className='flex justify-between items-center w-full'>
                      {child}
                </a>
              </li>
              ))
            }

           
          </ul>
        </div>
        </div>
    </div>
  )
}

export default About