import React from 'react'
import Image from "next/image"


const Experience = () => {

    const experience = [
        {
            id: 1,
            src: '../assets/html.png',
            title: 'HTML',
            style: 'hover:shadow-orange-500',
        },
        {
            id: 2,
            src: '../assets/css.png',
            title: 'CSS',
            style: 'hover:shadow-blue-500',
        },
        {
            id: 3,
            src: '../assets/javascript.png',
            title: 'Javascript',
            style: 'hover:shadow-yellow-500',
        },
        {
            id: 4,
            src: '../assets/github.png',
            title: 'GitHub',
            style: 'hover:shadow-gray-500',
        },
        
    ]

  return (
    <div id='experience' className='bg-[#292929] w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white pt-36 sm:pt-48'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#f4a33d] p-2 inline'>Experience</p>
                <p className='py-6'>These are the langueges I've used with</p>
             </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-2
        sm:px-80 gap-8 text-center py-8 px-20 sm:pt-28 '>

            {
                experience.map(({id,src,title,style}) =>(
                    <div key={id} 
                    className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                    <Image src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>{title}</p>
            </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default Experience