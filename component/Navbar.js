"use client"
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar(){
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }
    return(
        <main className="bg-gray-100 shadow shadow-gray-300 w-full sticky top-0 z-10">
            <div className="flex flex justify-between h-[50px] pt-3 px-5">
                <h1 className="font-bold text-2xl text-blue-500">qwiikorder</h1>
                <ul className="hidden md:flex gap-10 md:font-semibold md:cursor-pointer">
                    <li>Home</li>
                   <li>orders</li>
                    <li>orderlist</li>
                </ul>
                <div className="hidden md:flex gap-3">
                   <Link href="/auth/login"> <button className="w-[60px] h-[30px] text-white bg-blue-500 rounded cursor-pointer">Login</button></Link>
                    <CgProfile  className="text-2xl cursor-pointer"/>
                </div>
                <div className="block md:hidden">
                    <RxHamburgerMenu  onClick={toggleMenu} className="text-2xl text-blue-500 mt-2"/>

                </div>
                

            </div>
            {menuOpen &&(
                <div className="px-5 pb-1 flex flex-col gap-2 md:hidden">
                    <ul>
                        <li>Home</li>
                        <li>orders</li>
                        <li>orderlist</li>
                    </ul>
                    <button className="w-[60px] h-[30px] text-white bg-blue-500 rounded cursor-pointer">Login</button>
                    <CgProfile className=" text-2xl cursor-pointer" />


                </div>
            )
         }

        </main>
    )

}