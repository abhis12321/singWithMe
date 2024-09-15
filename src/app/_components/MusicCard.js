import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


export default function MusicCard({ music, musicRef, nextPlay, previousPlay, handleMusic, isPlaying }) {
    const [range , setRange] = useState(0);

    useEffect(() => {
        setRange(musicRef?.current?.currentTime || 0);
    }, [musicRef, musicRef?.current?.currentTime]);


    const handleDuration = (e) => {
        setRange(e.target.value)
        if (musicRef.current) {
          musicRef.current.currentTime = e.target.value;
        }
    }

      
    return (
        <div id={music.name} className='sticky top-[68px] min-h-[440px] w-[300px] flex flex-col items-center justify-around pb-3 bg-gray-400/10 dark:bg-white/10 rounded-md shadow-[0_0_2px_gray] hover:shadow-[0_0_3px_gray] text-gray-700 dark:text-white backdrop-blur-md'>
            <h2 className="my-4 font-bold text-2xl drop-shadow-[0_1px_1px_white] p-2 text-center font-mono">{music.name}</h2>
            <audio src={music.song} className='' ref={musicRef} loop ></audio>
            <p className={`w-[200px] h-[200px] [background-image:conic-gradient(red , yellow , green , blue , red)] bg-conic-gradient rounded-full border-4 ${isPlaying && "animate-spin"}`}></p>
            <div className='text-yellow-500 font-bold font-serif drop-shadow-[0_1px_1px_black]'>{music.singer}</div>

            <div className="w-full flex items-center justify-around text-white">
                <FontAwesomeIcon icon={faBackward} className='h-5 cursor-pointer opacity-90 hover:opacity-100 drop-shadow-[0_0_1px_gray] hover:scale-[1.2]' size='xs' onClick={previousPlay} />
                <div className={`h-12 w-12 shadow-[0_0_2px_white] rounded-full flex items-center justify-center cursor-pointer bg-gray-700/30 drop-shadow-[0_0_2px_black] hover:scale-110`} onClick={handleMusic}>
                    {
                        !isPlaying ?
                            <FontAwesomeIcon icon={faPlay} className={`h-6`} size='xs' />
                            :
                            <FontAwesomeIcon icon={faPause} className={`h-6`} size='xs' />
                    }
                </div>
                <FontAwesomeIcon icon={faForward} className='h-5 cursor-pointer opacity-90 hover:opacity-100 drop-shadow-[0_0_1px_gray] hover:scale-[1.2]' size='xs' onClick={nextPlay} />
            </div>

            <input type='range' min={0} max={musicRef?.current?.duration || 200} value={range} onChange={handleDuration} className='w-[80%]'/>
        </div>
    )
}
