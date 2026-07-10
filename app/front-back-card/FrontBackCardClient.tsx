"use client"
import React from 'react'
import Paper from './Paper.jsx'
import { useState } from 'react'
import ModernSidebar from './Sidebar.jsx';

const FrontBackCardClient = () => {

  const [side,setSide] = useState("front");
  const [frontImage,setFrontImage] = useState(null);
  const [backImage,setBackImage] = useState(null);
  const [count,setCount] = useState(1);

  return (

    <div className='bg-gray-200 print:bg-white w-full min-h-dvh md:flex box-border'>
      <ModernSidebar side={side} setSide={setSide} count={count} setCount={setCount} setFrontImage={setFrontImage} setBackImage={setBackImage} frontImage={frontImage} backImage={backImage}/>
      <div className='print:p-0 hidden print:block pl-[400px] w-full md:flex justify-center py-4'>

      <Paper side={side} frontImage={frontImage} backImage={backImage} count={count} />
      </div>

    </div>
  )
}

export default FrontBackCardClient
