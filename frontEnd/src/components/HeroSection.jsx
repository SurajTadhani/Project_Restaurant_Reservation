import React from 'react'

function HeroSection() {
  return (
    <>
    <div className='flex justify-between items-center container flex-col xl:flex-row gap-20 py-36 dark:text-white dark:bg-black'
    style={{ backgroundImage: "url('/background.svg')", backgroundSize: 'cover', backgroundPosition: 'right' }}
    >
      <div className='space-y-10 xl:w-1/2'>
      
        <div className='flex justify-around items-end'>
          <div className='space-y-5 font-thin dark:text-white text-black'>
          <h1 className="md:text-[140px] text-[50px] tracking-normal">Delicious</h1>
          <img className='xl:w-[330px] xl:h-[400px]' src="./hero1.png" alt="hero" />
          </div>
          <div className='space-y-5'>
          <h1 className="md:text-[140px] text-[50px] tracking-normal text-center font-thin dark:text-white text-black">Food</h1>
          <img className="md:w-42 h-auto" src="logo.svg" alt="logo" />
          </div>
        </div>
      </div>
      <div className='xl:w-1/2'>
      <div className='flex justify-evenly items-center'>
        <div>
        <img src="./threelines.svg" alt="threelines" />
        </div>
        <div>
        <img className='xl:w-[330px] xl:h-[400px]' src="hero2.png" alt="hero" />
        </div>
      </div>
      <div>
      <h1 className="text-center md:text-[140px] text-[50px] tracking-normal font-thin dark:text-white text-black">Dishes</h1>
      </div>
      </div>
    </div>
    <hr />

    <div className="container space-y-10 py-20">
    <div className="bg-white">
  <div className="hero-content flex-col lg:flex-row py-10">
    <img
      src="/burger.jpeg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-5xl font-bold">Burger Buzz!</h1>
<p className="py-6">
  Sink your teeth into the latest burger creations and sizzling news from the grill! Discover mouth-watering flavors, 
  juicy patties, and gourmet toppings that will elevate your burger experience to the next level. Whether you’re craving 
  a classic cheeseburger or something more adventurous, we’ve got all the juicy details you need.
</p>
<button className="btn btn-outline btn-primary duration-500">Order Now</button>
    </div>
  </div>
  <hr />
</div>
<div className="bg-white">
  <div className="hero-content flex-col lg:flex-row py-10">
  <div>
  <h1 className="text-5xl font-bold">Grill Thrills!</h1>
<p className="py-6">
  Get ready to indulge in the ultimate burger experience! From perfectly grilled patties to fresh, flavorful ingredients, 
  our burgers are crafted to satisfy every craving. Explore our exciting range of signature creations, each one designed 
  to bring out the best in every bite. Whether you’re a fan of the classics or eager to try something new, there’s a burger 
  here with your name on it.
</p>
<button className="btn btn-outline btn-primary duration-500">Order Now</button>
</div>
   
   
<img
      src="/burger1.jpeg"
      className="max-w-sm rounded-lg shadow-2xl" />
   
  </div>
  <hr />
</div>
<div className="bg-white">
  <div className="hero-content py-10 flex-col lg:flex-row ">
    <img
      src="/burger2.jpeg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-5xl font-bold">Flavor Frenzy!</h1>
<p className="py-6">
  Dive into a world of bold flavors and unbeatable burger bliss! Our latest creations are bursting with innovative ingredients 
  and tantalizing tastes that will leave you craving more. From sizzling grill marks to melty cheese and crisp toppings, every bite 
  is a celebration of burger perfection. Ready to satisfy your taste buds? Your next favorite burger is just a click away.
</p>
<button className="btn btn-outline btn-primary duration-500">Taste It Now</button>
    </div>
  </div>
  <hr />
</div>
<div className="bg-white">
<div className="hero-content flex-col lg:flex-row py-10">
  <div>
    <h1 className="text-5xl font-bold">Sizzle & Serve!</h1>
    <p className="py-6">
      Welcome to burger heaven, where every bite is an explosion of flavor! Our burgers are crafted with love, using only the freshest 
      ingredients and the juiciest patties, grilled to perfection. Whether you're in the mood for a timeless classic or something 
      totally unique, our menu has it all. Come discover the art of burger-making, where taste meets creativity in every delicious 
      creation.
    </p>
    <button className="btn btn-outline btn-primary duration-500">Taste It Now</button>
  </div>

  <img
    src="/burger3.jpeg"
    className="max-w-sm rounded-lg shadow-2xl" />
</div>
<hr />
</div>


    </div>
    </>
  )
}

export default HeroSection