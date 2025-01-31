import React from 'react'
import { data } from '../restApi.json'

function Dishes() {
  return (
    <>
    <div className='space-y-20 py-32 dark:bg-black'>
      <div className='text-center space-y-5'>
      <h1 className='text-6xl font-bolder font-thin text-black dark:text-white'>POPULAR DISHES</h1>
      <p className='text-base tracking-widest  text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
      </div>
      <div className="container grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10">
        {
          data[0].dishes.map(element => (
            <div className='space-y-5 relative' key={element.id}>
              <img className='md:h-80 md:w-80 transform transition-transform duration-500 ease-in-out hover:scale-110' src={element.image} alt={element.title}/>
              <h3 className='text-black dark:text-white text-2xl font-bold text-center'>{element.title}</h3>
              <button className='absolute top-0 left-3 text-white bg-black   px-7 rounded-full py-2 animate-bounce'>{element.category}</button>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Dishes