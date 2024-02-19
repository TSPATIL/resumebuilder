import React from 'react'
import { Link } from 'react-router-dom'
import { ReactTyped } from 'react-typed'

export default function Banner() {
    return (
        <div className='bg-[#2699fb] w-full p-[100px] overflow-hidden min-w-[350px]'>
            <div className='max-w-[1240px] h-[535px] mx-auto text-center'>
                <div className='md:text-4xl font-bold text-[24px] mb-5'>
                    ResumeBuilder
                </div>
                <div className='text-white md:text-6xl font-bold text-4xl my-4'>
                    Create your resume for free
                </div>
                <div className='md:text-4xl text-white font-bold text-xl mt-10 text-center'>
                    Make resume
                    <ReactTyped
                        className='md:ml-3 ml-1'
                        strings={[
                            "with best templates",
                            "within few minutes",
                            "for free",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
                <button className='mt-[50px] text-white bg-black rounded-full py-5 text-center text-xl font-bold hover:scale-105'><Link to='/templates' role='button' className='py-5 px-10'>Create Now</Link></button>
                {/* <button onClick={()=>{window.location.href = '/templates'}} className='mt-[50px] text-white bg-black rounded-full py-5 px-10 text-xl font-bold hover:scale-105'>Create Now</button> */}
                {/* <div className='text-white cursor-pointer bg-black rounded-full mx-auto w-fit py-5 px-10 text-xl font-bold hover:scale-105'>
                    <Link to='/templates'>Create Now</Link>
                </div> */}
                {/* <Link to="/templates" className='text-white cursor-pointer bg-black rounded-full mx-auto w-fit py-5 px-10 text-xl font-bold hover:scale-105 hover:text-[21px]'><button>Create Now</button></Link> */}
                <div className='p-4'>
                    <img className='bg-teal-600 hidden lg:block rounded-xl mt-2' src="https://static.resumegiants.com/wp-content/uploads/sites/25/2022/05/17155011/example-resumes-carousel-fullhd-1920x490.webp" alt="" />
                </div>
            </div>
        </div>
    )
}
