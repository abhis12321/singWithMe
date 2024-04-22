"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const handleRight = () => {
    document.querySelector('.right-navbar').classList.toggle('hidden');
    document.querySelector('.cutX').classList.toggle('hidden');
    document.querySelector('.hamberger').classList.toggle('hidden');
  }


  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-800  text-white flex items-center justify-between h-16 leading-[4rem] px-3 xm:px-8">
      <div className="md:ml-4">
        <h2 className="font-bold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit leading-[4rem]"><span>#</span>singWithMe</h2>
      </div>

      <div className="fixed top-0 right-0 lg:static lg:flex gap-1 hidden right-navbar bg-gradient-to-b from-slate-950 to-slate-800  lg:bg-inherit min-h-[100vh] lg:min-h-fit z-10">
        <div className="text-3xl py-2 hover:bg-slate-950 hover:text-red-800 text-center cursor-pointer" onClick={handleRight}>
          <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" />
        </div>
        <div className="lg:bg-gradient-to-b lg:from-slate-950 lg:to-slate-800 hover:bg-slate-950 text-center"><Link href="/" className="py-3 px-12 lg:px-8 rounded-lg font-semibold hover:bg-gray-950" >
          Home
        </Link></div>
        <div className="lg:bg-gradient-to-b lg:from-slate-950 lg:to-slate-800 hover:bg-slate-950 text-center"><Link href="/projects" className="py-3 px-12 lg:px-8 rounded-lg font-semibold hover:bg-gray-950" >
          Projects
        </Link></div>
        <div className="lg:bg-gradient-to-b lg:from-slate-950 lg:to-slate-800 hover:bg-slate-950 text-center"><Link href="/about" className="py-3 px-12 lg:px-8 rounded-lg font-semibold hover:bg-gray-950" >
          About
        </Link></div>
        <div className="lg:bg-gradient-to-b lg:from-slate-950 lg:to-slate-800 hover:bg-slate-950 text-center"><Link href="/contact" className="py-3 px-12 lg:px-8 rounded-lg font-semibold hover:bg-gray-950" >
          Contact
        </Link></div>
        
      </div>
      <div className="lg:hidden text-3xl py-2 md:mr-4">
        <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer" onClick={handleRight} />
      </div>
    </div>

// parent-relative(position)
//  after:absolute after:bottom-3 after:left-[25%] hover:after:content-[''] hover:after:w-[50%] hover:after:h-1 hover:after:bg-green-800 after:rounded-md

  );
}
