import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

export default function MusicCard(props) {
    const playMusic = () => {
        let cantainer = document.querySelector(`#${props.data.name}`);
        let audio = cantainer.querySelector('audio');
        let musicAvatar = cantainer.querySelector('p');
        if(audio.paused) {
            musicAvatar.classList.toggle('animate-spin')
            audio.play();
        } else {
            musicAvatar.classList.toggle('animate-spin')
            audio.pause();
        }
    }

    const handleMusic = e => {
        let svgs = e.target.parentElement.querySelectorAll('svg');
        svgs[0]?.classList?.toggle('block');
        svgs[0]?.classList?.toggle('hidden');
        svgs[1]?.classList?.toggle('block');
        svgs[1]?.classList?.toggle('hidden');
        playMusic();
    }
    return (
        <div id={props.data.name} className='flex flex-col items-center justify-evenly pb-3 bg-slate-900 h-[400px] w-[300px] mx-auto rounded-md shadow-[0_0_8px_white] hover:shadow-[0_0_12px_red]'>
            <h2 className="my-4 font-bold text-2xl drop-shadow-[0_0_7px_violet] p-2 text-center">{props.data.name}</h2>
            <p className="w-[200px] h-[200px] [background-image:conic-gradient(red , yellow , green , blue , red)] bg-conic-gradient rounded-full border-4"></p>
            <div className=' text-yellow-500 font-semibold'>{props.data.singer}</div>
            <audio src={'/music/' + props.data.name + '.mp3'} className=''></audio>

            <div className="flex items-center justify-around w-full">
                <FontAwesomeIcon icon={faBackward} className='text-xl cursor-pointer hover:text-gray-500 w-6' size='' />
                <div className="group w-fit relative">
                    <FontAwesomeIcon icon={faPlay} className='w-8 h-8 cursor-pointer group-hover:text-gray-500 bg-gray-950 rounded-full py-[10px] pl-[11px] pr-[8px] block group-active:hidden' size='' />
                    <FontAwesomeIcon icon={faPause} className='w-8 h-8 cursor-pointer group-hover:text-gray-500 bg-gray-950 rounded-full p-[10px] hidden group-active:block' size='' />
                    <div className="absolute w-14 h-14 z-10 top-0 left-0 cursor-pointer rounded-full" onClick={handleMusic}></div>
                </div>
                <FontAwesomeIcon icon={faForward} className='text-xl cursor-pointer hover:text-gray-500 w-6' size='' />
            </div>
        </div>
    )
}
