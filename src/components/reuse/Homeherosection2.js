import React from 'react'

export default function Homeherosection2() {
    return (
        <div className='bg-[#fb6926] w-full md:p-[100px] min-w-[350px]'>
            <div className='max-w-[1360px] md:h-[535px] h-[1070px] mx-auto md:grid grid-cols-2'>
                <div className='h-[535px] text-justify p-10 m-auto w-[90%]'>
                    <h1 className='font-bold text-3xl md:text-4xl text-violet-800 my-5'>Elevate Your Career Journey with Tailored Resumes.</h1>
                    <p className='text-white text-xl'>Elevate your career journey with resumes tailored to perfection. Our platform guides you through the process of customizing each section of your resume to highlight your unique skills and experiences. Whether you're pivoting industries or climbing the corporate ladder, our resume builder ensures that your professional story is communicated with impact. Take the next step in your career journey with a resume that speaks volumes about your capabilities.</p>
                    <button className='bg-violet-800 text-white p-4 rounded mt-5 font-bold text-lg hover:scale-95'>Get Started</button>
                </div>
                <div className='md:h-[535px] h-[475px] flex items-center justify-center md:mt-0 mt-[30px]'>
                    <img src="https://www.hloom.com/images/Resume-Builder-desktop-banner.png" alt="" className='md:w-[600px] md:h-[475px] w-[425px] h-[400px]' />
                </div>
            </div>
        </div>
    )
}
