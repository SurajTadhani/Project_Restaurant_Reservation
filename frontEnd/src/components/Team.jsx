import React from "react";
import { data } from "../restApi.json";

function Team() {
  return (
    <>
      <div className="space-y-20 py-40">
        <div className="text-center space-y-10">
          <h1 className="text-6xl font-bolder font-thin text-black">
            OUR TEAM
          </h1>
          <p className="text-lg tracking-widest  text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="container grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10">
          {data[0].team.map((element) => (
            <div className="space-y-5 text-center" key={element.id}>
              <div className="flex justify-center">
                <img
                  className="xl:w-[175px] w-full"
                  src={element.image}
                  alt={element.name}
                />
              </div>
              <h3 className="text-3xl text-black">{element.name}</h3>
              <p className="text-2xl text-black font-thin">
                {element.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;