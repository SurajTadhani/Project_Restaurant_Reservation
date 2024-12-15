import React from 'react'
import {data} from '../restApi.json'
import Dishes from './Dishes'

function Foods() {
  return (
    <>
    <div>
    <div className='container flex pt-48 justify-center flex-col md:flex-row md:px-30 gap-20'>
  {
    data[0].ourQualities.map(element => {
      return(
        <div className='text-center flex flex-col  items-center space-y-5' key={element.id}>
          <img className='md:w-26 md:h-auto ' src={element.image} alt={element.title} />
          <p className='text-3xl font-bold text-black'>{element.title}</p>
          <p className='text-base tracking-widest  text-black'>{element.description}</p>
        </div>
      )
    })
  }
</div>
     
    </div>
    <Dishes />
    </>
  )
}

export default Foods