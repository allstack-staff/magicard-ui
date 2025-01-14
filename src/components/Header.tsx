'use client'

import { Button } from 'flowbite-react';
import { Jaro } from 'next/font/google';
import { useState } from 'react';

const jaroStyle = Jaro({ subsets: ["latin"] });

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <header className='container mx-auto'>
            <nav className='flex flex-row justify-between items-center py-4'>
                <div>
                    <img src="../../Logo.png" alt="" />
                </div>

                <div className='flex flex-row space-x-8 justify-center align-center'>
                    <div className={`md:static absolute md:min-h-fit bg-white min-h-[50vh] left-0 
                        ${sidebarOpen ? "top-[12%]" : "top-[-100%]"} justify-center w-full flex items-center px-6`}>
                        <ul className='flex md:flex-row flex-col md:items-center gap-6'>
                            <li>
                                <a href="" className={`${jaroStyle.className} my-auto hover:text-gray-500`}>Como usar</a>
                            </li>
                            <li>
                                <a href="" className={`${jaroStyle.className} my-auto hover:text-gray-500`}>Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Button className={`${jaroStyle.className} text-black py-2 px-11 rounded-3xl bg-magicButton hover:bg-magicButton-HOVER`}>
                            <span className='text-black'>Cadastro
                            </span>
                        </Button>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="text-3xl focus:outline-none cursor-pointer md:hidden"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;