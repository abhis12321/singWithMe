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
    <div className='cursor-pointer text-white hover:text-gray-300 flex items-center hover:scale-110 justify-center px-3 py-1' onClick={toggleMode}>
      <FontAwesomeIcon icon={faSun} className='bg-gray-600 rounded-full p-2 ' id='dark'/>
      <FontAwesomeIcon icon={faMoon} className='bg-gray-600 rounded-full py-2 px-[10px] hidden' id='light'/>
    </div>
  )
}
