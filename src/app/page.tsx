"use client"

import {AboutPage} from '@/components/markup with JSX '
import React from 'react'
import DisplayingData from '@/components/displayingdata'
import ProfilePage from '@/components/profile'
import ConditionalRendering from '@/components/conditionalrendering'
export default function ReactLearning () {
  const MyButton=()=>{ 
    const handleclick=()=>{ 
      alert ("Hello i am button click")
    }
    return <div className='bg-blue-500 rounded-sm  p-2'onClick={handleclick}>i am a button</div>
  }
 
  
  function MyInput() {
    return <input className="bg-blue-500 rounded-sm p-2"></input>;
  }
  return (
    <div className='p-5  '><p className='font-bold  text-lg' >ReactLearning </p> 
   <p  > React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:</p>
<div className='flex  gap-1 py-5' >
        <div className="p-5 ">
          <MyButton />
         </div>
       <div><MyInput/></div>

       <div >
        Markup with jsx 
        <AboutPage/> 
        </div>

      </div>
    <div><DisplayingData/></div> 
    <div className='font-bold'>
      <ProfilePage/>
    </div>
    <div className="text-lg">
     <p className='font-bold'>Conditional Rendering</p> 
      <ConditionalRendering/>
    </div>
    
  </div>
  )
 
}


