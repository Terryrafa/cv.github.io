import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
    function refreshPage() {
        window.location.reload();
    }
    const [state, handleSubmit] = useForm("xnqyywdj");
  if (state.succeeded) {
      return <html>
        <head>
            <title>Thank you page</title>
        </head>
        <body>
            <div className="w-full h-screen bg-[#ff775e] shadow-inner">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <p className="mt-1 mx-auto text-4xl font-bold inline">Thank You</p>

                    <button data-cy="return-but" onClick={refreshPage} className='text-black w-fit px-6 py-3 my-8 mx-auto flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:text-[#ff785d] hover:bg-[#fff3f1] hover:scale-110 duration-300 hover:ease-in-out drop-shadow-lg'>Press here to go back</button>
                </div>
                <div>
                    
                </div>
            </div>
        </body>
      </html>;
  }
  return (
    <div id='contact' className='w-full h-screen bg-white p-4 text-black'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f4a33d]'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-self-center items-center'>
                <form  onSubmit={handleSubmit} action="https://formspree.io/f/xnqyywdj" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                    data-cy="name-input"
                    type="text" 
                    name="name" 
                    placeholder='Enter your name' 
                    className=' p-2 bg-transparent border-2 rounded-md text-[#ff785d] focus:outline-none'/>
                    

                    <input
                    data-cy="email-input"
                    type="email" 
                    name="email" 
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-[#ff785d] focus:outline-none'/>
                    <ValidationError 
                        prefix="email" 
                        field="email"
                        data-cy="error-email"
                        errors={state.errors}/>

                    <textarea
                    data-cy="message-input"
                    placeholder='Enter your message' 
                    name="message" 
                    className='p-2 bg-transparent border-2 rounded-md text-[#ff785d] focus:outline-none h-52'></textarea>
                    <ValidationError 
                    prefix="message" 
                    field="message"
                    errors={state.errors}/>
                    

                    <button data-cy="submit" disabled={state.submitting} className='text-black w-fit px-6 py-3 my-8 mx-auto flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:text-[#ff785d] hover:bg-[#fff3f1] hover:scale-110 duration-300 hover:ease-in-out drop-shadow-lg'>{`Let's talk`}</button>
                </form>
            </div>
        </div>
    </div>
  );
}

function App() {
    return (
        <Contact />
    );
  }
  export default App;