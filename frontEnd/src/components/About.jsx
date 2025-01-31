import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function About() {
  return (
  <div className="dark:bg-black dark:text-white">
      <div className="bg-[#f9fbf2]  py-32 container dark:bg-black dark:text-white">
      <div className="flex justify-between items-center flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-10">
         <div className="space-y-4">
         <h1 className="font-thin dark:text-white text-black text-6xl">ABOUT US</h1>
         <h4 className="text-2xl dark:text-white text-black tracking-wider">The only thing we're serious about is food.</h4>
         </div>
          <p className="text-lg tracking-widest font-thin dark:text-white text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor<br />
             sit amet consectetur adipisicing elit. Quia, eius. 
             elit. Provident  <br />
            possimus optio adipisci dolores impedit illum iusto <br /> perferendis,
            laudantium quod accusamus <br />consequuntur consectetur, tempore nulla
            error iure<br /> reiciendis dolorem assumenda. Necessitatibus fugit<br />
            asperiores totam rem esse exercitationem iusto ipsum<br /> qui dolore ex,
            accusantium repellat mollitia repellendus.
          </p>
          <button>
          <Link 
  to="/menu" 
  className="btn rounded-3xl bg-white text-black dark:bg-black dark:text-white 
             group duration-500 flex items-center text-base px-5 
             hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
>
  Explore Menu <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
</Link>


          </button>
        </div>
        <div className="md:w-1/2 overflow-clip">
          <img className="animate-slow-spin" src="./about.png" alt="about" />
        </div>
      </div>
      <div className="space-y-10">
        <h1 className="text-5xl">About Us - Dreamcatcher Project</h1>
        <div>
          <p className="text-lg">Welcome to Dreamcatcher, where technology meets imagination. Our project is built on the foundation of the MERN stack—MongoDB, Express.js, React, and Node.js—empowering us to create dynamic, user-centric web applications that bring your dreams to life.</p>
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl">Who We Are</h2>
          <p className="text-lg">At Dreamcatcher, we are more than just developers. We are a team of passionate innovators, designers, and problem-solvers who are dedicated to turning ideas into reality. With years of experience in the tech industry, our team has the skills and expertise to tackle any challenge and deliver solutions that exceed expectations.</p>
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl">Our Mission</h2>
          <p className="text-lg">Our mission is to harness the power of technology to create applications that are not only functional but also inspiring. We believe in the power of dreams and the potential they hold. That’s why we are committed to helping you capture and realize your vision, no matter how ambitious it may be.</p>
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl">Why Choose Us?</h2>
          <p className="text-lg">At Dreamcatcher, we prioritize quality, creativity, and client satisfaction. Our approach is collaborative, ensuring that we understand your goals and work closely with you throughout the development process. We pride ourselves on our ability to adapt to the unique needs of each project, providing custom solutions that are tailored to your specific requirements.</p>
        </div>
        <hr />
        <div className="space-y-8">
          <h2 className="text-4xl">Our Values</h2>
          <div>
            <h3 className="text-3xl">Innovation:</h3>
            <p className="text-lg">We are constantly exploring new technologies and approaches to deliver cutting-edge solutions.</p>
          </div>
          <div>
            <h3 className="text-3xl">Quality:</h3>
            <p className="text-lg">We adhere to the highest standards in coding, design, and usability to ensure the best outcomes for our clients.</p>
          </div>
          <div>
            <h3 className="text-3xl">Collaboration:</h3>
            <p className="text-lg">We believe that the best results come from working closely with our clients, understanding their needs, and building a strong partnership.</p>
          </div>
          <div>
            <h3 className="text-3xl">Integrity: </h3>
            <p className="text-lg"> We are committed to transparency, honesty, and ethical practices in all aspects of our work.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default About;
