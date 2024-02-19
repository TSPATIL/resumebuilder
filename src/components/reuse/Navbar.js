import React, { useContext, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import loginContext from '../../context/Login/loginContext';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [toggleProfile, setToggleProfile] = useState(false);
    const handleToggleProfile = ()=>{
        setToggleProfile(!toggleProfile)
    }
    const context = useContext(loginContext);
    const {setToggleLogin} = context;

    const handleOnNavLoginClick = ()=>{
        setToggleLogin(true);
    }
    return (
        <>
        <div className='bg-[#2699fb] p-4 sticky top-0 z-50 min-w-[350px]'>
            <div className='max-w-[1240px] py-2 mx-auto flex items-center justify-between'>
                <div className='text-3xl font-bold'>
                    ResumeBuilder
                </div>
                <div className='flex items-center gap-5'>
                    <div id='dropdown-button' class="block md:hidden h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('E:/Project/ResumeBuilder/resumebuilder/src/components/media/profile.jpeg')]" onClick={handleToggleProfile}>
                        <div id='dropdown-menu' class="drop-down  w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-[-50px]">
                            <ul className={`text-black ${toggleProfile ? '': 'hidden'} z-10`}>
                                <li class="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </span>
                                    <span> Setting </span>
                                </li>
                                <li onClick={handleOnNavLoginClick} class="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </span>
                                    <span> Login </span>
                                </li>
                                <li class="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </span>
                                    <span> Logout </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {
                        !toggle
                            ?
                            <AiOutlineMenu onClick={() => { setToggle(!toggle) }} className='flex md:hidden text-white text-2xl' />
                            :
                            <AiOutlineClose onClick={() => { setToggle(!toggle) }} className='flex md:hidden text-white text-2xl' />
                    }
                </div>
                <div className='hidden md:flex items-center text-white gap-[100px] text-xl'>
                    <ul className='hidden md:flex items-center text-white gap-10 text-xl'>
                        <Link to='/' className={`hover:scale-105 ${window.location.pathname === '/' ? 'text-black' : ''} cursor-pointer`}>
                            Home
                        </Link>
                        <Link to='/templates' className={`hover:scale-105 ${window.location.pathname === '/templates' ? 'text-black' : ''} cursor-pointer`}>
                            Templates
                        </Link>
                        <Link to='/about' className={`hover:scale-105 ${window.location.pathname === '/about' ? 'text-black' : ''} cursor-pointer`}>
                            About
                        </Link>
                        <Link to='/contact' className={`hover:scale-105 ${window.location.pathname === '/contact' ? 'text-black' : ''} cursor-pointer`}>
                            Contact
                        </Link>
                    </ul>
                    <div id='dropdown-button' class="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('E:/Project/ResumeBuilder/resumebuilder/src/components/media/profile.jpeg')]" onClick={handleToggleProfile}>
                        <div id='dropdown-menu' class="drop-down  w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-[-70px]">
                            <ul className={`text-black ${toggleProfile ? '': 'hidden'}`}>
                                <li class="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </span>
                                    <span> Setting </span>
                                </li>
                                <li onClick={handleOnNavLoginClick} class="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </span>
                                    <span> Login </span>
                                </li>
                                <li class="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </span>
                                    <span> Logout </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Responsive menu */}
                <ul className={`duration-500 md:hidden items-center text-white text-xl fixed bg-black ${toggle ? 'left-[0]' : 'left-[-100%]'} top-[84px] w-full h-screen z-[-1]`}>
                    <Link to='/' className={`py-[50px] text-center block hover:bg-gray-600 ${window.location.pathname === '/' ? 'bg-red-600' : ''} cursor-pointer`}>
                        Home
                    </Link>
                    <Link to='/templates' className={`py-[50px] text-center block hover:bg-gray-600 ${window.location.pathname === '/templates' ? 'bg-red-600' : ''} cursor-pointer`}>
                        Template
                    </Link>
                    <Link to='/about' className={`py-[50px] text-center block hover:bg-gray-600 ${window.location.pathname === '/about' ? 'bg-red-600' : ''} cursor-pointer`}>
                        About
                    </Link>
                    <Link to='/contact' className={`py-[50px] text-center block hover:bg-gray-600 ${window.location.pathname === '/contact' ? 'bg-red-600' : ''} cursor-pointer`}>
                        Contact
                    </Link>
                </ul>
            </div>
        </div>
        </>
    )
}