"use client"
import React from 'react'
import MusicCard from './MusicCard'

export default function page() {
  const songs = [
    {
      name:'Ae-gujarne-waali-hwa',
      singer:"Rahul Gandhi"
    },
    {
      name:"All-is-well",
      singer:"Rahul Gandhi"
    },
    {
      name:"Badan-pe-sitare-lapete-hue",
      singer:"Rahul Gandhi"
    },
    {
      name:"Bande-hai-hm-uske",
      singer:"Rahul Gandhi"
    },
    {
      name:"Behti-hwa-sa-tha-wo",
      singer:"Rahul Gandhi"
    },
    {
      name:"Bella-ciao",
      singer:"Rahul Gandhi"
    },
    {
      name:"Desh-mere",
      singer:"Rahul Gandhi"
    },
    {
      name:"Give-me-some",
      singer:"Rahul Gandhi"
    },
    {
      name:"Gori-tori-chunari",
      singer:"Rahul Gandhi"
    },
    {
      name:"Haal-kya-hai-dilon-ka",
      singer:"Rahul Gandhi"
    },
    {
      name:"Hai-zindgi-kitni-khubsurat",
      singer:"Rahul Gandhi"
    },
    {
      name:"Hey-ram",
      singer:"Rahul Gandhi"
    },
    {
      name:"Kamata-hum-bahut-kuchh-pr",
      singer:"Rahul Gandhi"
    },
    {
      name:"Kehdun-tumhe-ya-chup-rhun",
      singer:"Rahul Gandhi"
    },
    {
      name:"Log-kehte-hain-mai-sarabi-hun",
      singer:"Rahul Gandhi"
    },
    {
      name:"Dhire-dhire-meri-jindgi-me-aana",
      singer:"Rahul Gandhi"
    },
    {
      name:"Mere-umar-k-nav-jawaano",
      singer:"Rahul Gandhi"
    },
    {
      name:"Peele-peele-o-mere-raaja",
      singer:"Rahul Gandhi"
    },
    {
      name:"Tu-cheez-bdi-hai-mast",
      singer:"Rahul Gandhi"
    },
    {
      name:"Yaad-aa-rhi-hai",
      singer:"Rahul Gandhi"
    },
  ]
  return (
    <div className='flex flex-wrap gap-8 items-center justify-center p-4' style={{minHeight:'calc(100vh - 4rem)'}}>
      {
      songs?.map((song , index) => 
        <MusicCard data={song} key={index}/>
      )}
    </div>
  )
}
