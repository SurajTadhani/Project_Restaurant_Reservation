import React from 'react'
import { data } from '../restApi.json'

function Who_We_Are() {
  return (
    <div className='dark:bg-black '>
    <div className='container flex flex-col lg:flex-row justify-between items-center py-40 gap-20'>
     <div className='space-y-48'>
        {
           data[0].who_we_are.slice(0,2).map(element => (
            <div className='' key={element.id}>
             <div className='space-y-5'>
             <h1 className='text-6xl text-black text-center animate-bounce dark:text-white'>{element.number}</h1>
             <p className='text-3xl text-black text-center dark:text-white'>{element.title}</p>
             </div>
            </div>
           ))
        }
     </div>

    <div className='relative flex justify-center'>
           <img className='md:h-[635px] md:w-[500px] absolute left-[-80px] top-0' src="center.svg" alt="gradientBg" />
            <img className='md:h-[635px] md:w-[500px] slow-spin-right' src="whoweare.png" alt="food" />
    </div>
    <div className='space-y-48'>
      {
        data[0].who_we_are.slice(2).map(element => (
          <div className='' key={element.id}>
          <div className='space-y-5'>
          <h1 className='text-6xl text-black text-center animate-bounce dark:text-white'>{element.number}</h1>
          <p className='text-3xl text-black text-center dark:text-white'>{element.title}</p>
          </div>
         </div>
        ))
      }
    </div>
    </div>
    </div>
  )
}

export default Who_We_Are