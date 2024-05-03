import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ToggleMode() {
    const toggleMode = e => {
        document.querySelector('#dark').classList.toggle('hidden');
        document.querySelector('#light').classList.toggle('hidden');
        document.body.classList.toggle('dark');
    }
  return (
    <div className='cursor-pointer *:bg-gray-500 flex items-center *:hover:scale-110 justify-center h-8 w-8' onClick={toggleMode}>
      <FontAwesomeIcon icon={faSun} className='rounded-full p-2 text-white' id='dark'/>
      <FontAwesomeIcon icon={faMoon} className='rounded-full text-black py-2 px-[10px] hidden' id='light'/>
    </div>
  )
}
