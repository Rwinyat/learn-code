"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from "../icon/icons8-close.svg";
import BurgerIcon from "../icon/icons8-menu.svg";


export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);

  function handleSmallScreen() {
    setMenuIcon(!menuIcon);
  }

  return (
    <header className="bg-slate-400 text-[#324ea8]  w-full ease-in duration-500 sticky  top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[80px] flex justify-around items-center p-4">
        <div>
          <Link href="/">
            <span className="font-extrabold text-3xl md:2xl xl:3xl uppercase">Learn Code</span>
          </Link>
        </div>
        <ul className="hidden md:flex uppercase font-semibold">
          <li className="mr-4 lg:mr-8 hover:text-[#272f49]">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#272f49]">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#272f49]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <div className="flex">
            <button type="button" className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
            <button
              type="button"
              className="bg-transparent m-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Sign up
            </button>
          </div>
        </div>
        <div onClick={handleSmallScreen} className="flex md:hidden">
          {menuIcon ? <Image src={CloseIcon} className=" w-6 h-6" /> : <Image src={BurgerIcon} className=" w-6 h-6" />}
          
        </div>
      </nav>
    </header>
  );
}