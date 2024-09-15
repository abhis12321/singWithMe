"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBlog, faCartShopping, faHome, faMagnifyingGlass, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import ToggleMode from "./ToggleMode";

export default function NavBar() {
  const handleRight = () => {
    document.querySelector('.right-navbar').classList.toggle('hidden');
    document.querySelector('.cutX').classList.toggle('hidden');
    document.querySelector('.hamberger').classList.toggle('hidden');
  }

  return (
    <div className="sticky top-0 left-0 z-[1000] w-full bg-gradient-to-b from-gray-300/60 to-slate-500/60 dark:from-slate-950/60 dark:to-slate-800/60 lg:text-red-900 dark:text-gray-300 flex items-center justify-between h-16 px-4 xm:px-8 overflow-hidden backdrop-blur-lg">
      <div className="">
        <h2 className="font-bold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 w-fit leading-[4rem]"><span>#</span>singWithMe</h2>
      </div>

      <div className="right-navbar fixed lg:static top-0 right-0 hidden lg:flex gap-1 bg-gradient-to-r lg:[background:none] from-gray-700 to-gray-600  dark:from-slate-800 dark:to-slate-950 min-h-[100vh] lg:min-h-fit z-10 items-center min-w-[170px] dark:font-normal font-medium">
        <div className="text-4xl py-2 hover:text-red-800 text-center cursor-pointer" onClick={handleRight}>
          <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" />
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/" className="w-full text-md flex items-center justify-center py-4 lg lg:py-2 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray]" >
          All songs
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/bhakti" className="w-full text-md flex items-center justify-center py-4 lg lg:py-2 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray]" >
          Bhakti songs
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/patriotic" className="w-full text-md flex items-center justify-center py-4 lg lg:py-2 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray]" >
          Patriotic songs
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/contact" className="w-full text-md flex items-center justify-center py-4 lg lg:py-2 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray]" >
          Contact
        </Link></div>

        <ToggleMode />
      </div>
      
      <div className="lg:hidden text-3xl py-2">
        <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer text-gray-700 dark:text-gray-200" onClick={handleRight} />
      </div>
    </div>
  );
}
