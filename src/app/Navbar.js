"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBlog, faCartShopping, faHome, faMagnifyingGlass, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import ToggleMode from "./ToggleMode";

export default function NavBar() {
  const [search, setSearch] = useState('');
  const handleRight = () => {
    document.querySelector('.right-navbar').classList.toggle('hidden');
    document.querySelector('.cutX').classList.toggle('hidden');
    document.querySelector('.hamberger').classList.toggle('hidden');
  }

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 to-slate-800  text-white flex items-center justify-between h-16 leading-[4rem] px-4 xm:px-8 overflow-hidden">
      <div className="">
        <h2 className="font-bold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit leading-[4rem]"><span>@</span>bhishek singh</h2>
      </div>

      <div className="right-navbar fixed lg:static top-0 right-0 hidden lg:flex gap-1 bg-gradient-to-r lg:[background:none] from-slate-800 to-slate-950 min-h-[100vh] lg:min-h-fit z-10 items-center min-w-[170px]">
        <div className="text-4xl py-3 hover:text-red-800 text-center cursor-pointer" onClick={handleRight}>
          <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" />
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/" className="w-full text-lg flex items-center justify-center py-4 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/70 hover:lg:shadow-[0_0_3px_gray]" >
          All songs
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/projects" className="w-full text-lg flex items-center justify-center py-4 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/70 hover:lg:shadow-[0_0_3px_gray]" >
          Bhakti songs
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/#about" className="w-full text-lg flex items-center justify-center py-4 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/70 hover:lg:shadow-[0_0_3px_gray]" >
          Patriotic songs
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/contact" className="w-full text-lg flex items-center justify-center py-4 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/70 hover:lg:shadow-[0_0_3px_gray]" >
          Contact
        </Link></div>

        <ToggleMode />
      </div>
      
      <div className="lg:hidden text-3xl py-2">
        <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer" onClick={handleRight} />
      </div>
    </div>
  );
}
