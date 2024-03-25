import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
            I am a forward thinking and resourceful software development professional with strong knowledge of a wide range of in demand programming languages. 
           
            </p>
            <br />
            <p>
            I'm an enthusiastic and highly motivated individual who has a clear understanding of the role and responsibilities associated with being a software developer, familiar with testing, debugging and solving problems found in new or existing software systems.
            
              
              
            </p>
            <br />
            <p>
            I am a great team player that's focused on learning more and adding value to others while creating flawless masterpieces in the process
              
            
            </p>
            <div className="">
              <a
                href="../../assets/Abdul-Basit's Resume.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              <a
                href="tel:+2347033468697"
                title="Call +2347033468697 "
                className="outline-btn my-6"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
