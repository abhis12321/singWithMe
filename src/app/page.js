"use client"
import { useRef, useState } from 'react'
import MusicCard from './_components/MusicCard'
import { musics } from './_components/musicsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const musicRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(musics[0]);

  const play = () => {
    musicRef?.current?.play();
    setIsPlaying(true);
  }

  const pause = () => {
    musicRef?.current?.pause();
    setIsPlaying(false);
  }

  const nextPlay = () => {
    setPlayer(prev => musics[(prev.id + 1) % musics.length]);
    setIsPlaying(false);
  }

  const previousPlay = () => {
    setPlayer(prev => musics[(musics.length + prev.id - 1) % musics.length]);
    setIsPlaying(false);
  }

  const handleMusic = () => {
    if (musicRef?.current?.paused) {
      play();
    } else {
      pause();
    }
  }

  const selectMusic = (music) => {
    setPlayer(music);
    play();
  }

  return (
    <div className='flex flex-wrap gap-2 items-start justify-around p-1' style={{ inHeight: 'calc(100vh - 4rem)' }}>
      <MusicCard music={player} nextPlay={nextPlay} previousPlay={previousPlay} handleMusic={handleMusic} musicRef={musicRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <table className="w-full md:flex-1 shadow-[0_0_3px_black] rounded overflow-hidden">
        <thead className='h-11 bg-slate-900/10 dark:bg-white/10 shadow-[0_0_2px_gray_inset]'>
          <tr className="">
            <th className="py-[3px]">SN.</th>
            <th className="py-[3px]">Song</th>
            <th className="py-[3px]">Singer</th>
            <th className="py-[3px]">play</th>
          </tr>
        </thead>
        <tbody className=''>
          {
            musics?.map((music, index) =>
              <tr key={index} className={`font-normal font-mono ${music.id == player.id ? "bg-blue-600" : "even:bg-white/20 odd:bg-red-400/15 hover:bg-green-800/20"}`}>
                <td className="py-[3px] text-center">{index + 1}</td>
                <td className="py-[3px] text-center">{music?.name}</td>
                <td className="py-[3px] text-center">{music?.singer}</td>
                <td className="py-[3px] text-center flex items-center justify-center">
                  {music.id == player.id && isPlaying ?
                    <FontAwesomeIcon size='xs' icon={faPlay} className='h-4 bg-white/60 py-[10px] px-3 rounded-full shadow-[0_0_2px_gray] cursor-pointer' onClick={() => selectMusic(music)} />
                    :
                    <FontAwesomeIcon size='xs' icon={faPause} className='h-4 bg-white/60 py-[10px] px-3 rounded-full shadow-[0_0_2px_gray] cursor-pointer' onClick={() => selectMusic(music)} />
                  }
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
