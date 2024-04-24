"use client"
import React, { useState } from 'react'
import MusicCard from './MusicCard'

const songs = [
  {
    name: 'Ae-gujarne-waali-hwa',
    singer: "Rahul Gandhi"
  },
  {
    name: "All-is-well",
    singer: "Rahul Gandhi"
  },
  {
    name: "Badan-pe-sitare-lapete-hue",
    singer: "Rahul Gandhi"
  },
  {
    name: "Bande-hai-hm-uske",
    singer: "Rahul Gandhi"
  },
  {
    name: "Behti-hwa-sa-tha-wo",
    singer: "Rahul Gandhi"
  },
  {
    name: "Bella-ciao",
    singer: "Rahul Gandhi"
  },
  {
    name: "Bella-ciao-hindi",
    singer: "Rahul Gandhi"
  },
  {
    name: "Desh-mere",
    singer: "Rahul Gandhi"
  },
  {
    name: "Give-me-some",
    singer: "Rahul Gandhi"
  },
  {
    name: "Gori-tori-chunari",
    singer: "Rahul Gandhi"
  },
  {
    name: "Haal-kya-hai-dilon-ka",
    singer: "Rahul Gandhi"
  },
  {
    name: "Hai-zindgi-kitni-khubsurat",
    singer: "Rahul Gandhi"
  },
  {
    name: "Hey-ram",
    singer: "Rahul Gandhi"
  },
  {
    name: "Kamata-hum-bahut-kuchh-pr",
    singer: "Rahul Gandhi"
  },
  {
    name: "Kehdun-tumhe-ya-chup-rhun",
    singer: "Rahul Gandhi"
  },
  {
    name: "Log-kehte-hain-mai-sarabi-hun",
    singer: "Rahul Gandhi"
  },
  {
    name: "Dhire-dhire-meri-jindgi-me-aana",
    singer: "Rahul Gandhi"
  },
  {
    name: "Mere-umar-k-nav-jawaano",
    singer: "Rahul Gandhi"
  },
  {
    name: "Peele-peele-o-mere-raaja",
    singer: "Rahul Gandhi"
  },
  {
    name: "Tu-cheez-bdi-hai-mast",
    singer: "Rahul Gandhi"
  },
  {
    name: "Yaad-aa-rhi-hai",
    singer: "Rahul Gandhi"
  },
]

export default function Page() {
  const [player , setPlayer] = useState();

  const toggleButton = (cantainer) => {
    let group = cantainer.querySelector('.group');
    let svgs = group.querySelectorAll('svg');
    svgs[0]?.classList?.toggle('block');
    svgs[0]?.classList?.toggle('hidden');
    svgs[1]?.classList?.toggle('block');
    svgs[1]?.classList?.toggle('hidden');
  }

  const handleMusic = (cantainer) => {
    let audio = cantainer.querySelector('audio');
    let musicAvatar = cantainer.querySelector('p');
    if (audio.paused) {
      musicAvatar.classList.toggle('animate-spin');
      audio.play();
    } else {
      musicAvatar.classList.toggle('animate-spin');
      audio.pause();
    }
  }

  const pause = (cantainer) => {
    let musicAvatar = cantainer.querySelector('p');
    let audio = cantainer.querySelector('audio');
    if (!audio.paused) {
      musicAvatar.classList.remove('animate-spin');
      audio.pause();
      handleButton(cantainer);
    }
  }

  const nextPlay = (cantainer) => {
    let nextCant = cantainer.nextElementSibling;
    if (nextCant) {
      pause(cantainer);
      handleButton(nextCant);
      playMusic(nextCant);
    }
  }

  const previousPlay = () => {
    let cantainer = document.querySelector(`#${props.data.name}`);
    let previousCant = cantainer.previousElementSibling;
    if (previousCant) {
      pause(cantainer);
      handleButton(previousCant);
      playMusic(previousCant);
    }
  }

  return (
    <div className='flex flex-wrap gap-8 items-center justify-center p-4' style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {
        songs?.map((song, index) =>
          <MusicCard data={song} functions = {{toggleButton , handleMusic , pause , nextPlay , previousPlay}} key={index} />
        )}
    </div>
  )
}
