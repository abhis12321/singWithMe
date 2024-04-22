"use client"
import React from 'react'
import MusicCard from './MusicCard'

export default function page() {
  return (
    <div className='flex gap-5 items-center justify-center ' style={{minHeight:'calc(100vh - 4rem)'}}>
      <MusicCard data={{name:'ae-guajarane-wali' , singer:"Rahul Gandhi"}}/>
    </div>
  )
}
