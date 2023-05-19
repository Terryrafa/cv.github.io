import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-white p-4 text-black'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f4a33d]'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-self-center items-center'>
                <form action="https://getform.io/f/23d06a84-7ea4-4d85-8913-a04feb935296" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-[#ff785d] focus:outline-none'/>

                    <input type="text" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-[#ff785d] focus:outline-none'/>

                    <textarea placeholder='Enter your message' name="message" className='p-2 bg-transparent border-2 rounded-md text-[#ff785d] focus:outline-none h-52'></textarea>

                    <button className='text-black w-fit px-6 py-3 my-8 mx-auto flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:text-[#ff785d] hover:bg-[#fff3f1] hover:scale-110 duration-300 hover:ease-in-out drop-shadow-lg'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact