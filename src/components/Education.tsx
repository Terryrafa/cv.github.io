import React from 'react'
import Image from "next/image"

const Education = () => {

    const education = [
        {
            id: 1,
            src: '../assets/education/sd.jpg',
            title: 'Primary',
            title2: 'SD Pelita Bangsa 2012 - 2018',
        },
        {
            id: 2,
            src: '../assets/education/smp.jpeg',
            title: 'Junior High',
            title2: 'SMP Negeri 4 Denpasar 2018 - 2021',
        },
        {
            id: 3,
            src: '../assets/education/smk.jpg',
            title: 'High School',
            title2: 'SMK Wira Harapan 2021 - Now',
        },
    ]

  return (
    <div id="education" className='bg-white w-full text-black md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f4a33d]'>Education</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:pt-6 px-12 sm:px-0'>
            
                {
                    education.map(({id, src, title, title2}) => (

                    <div key={id} className='drop-shadow-lg rounded-lg'>
                    <Image src={src} alt="" className='rounded-lg'/>
                    <div className='py-2 m-4'>
                        <p>{title}</p>
                        <p>{title2}</p>
                    </div>
                </div>
                    ))
                }
                
            </div>
            
        </div>
    </div>
  )
}

export default Education