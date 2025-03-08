import { useState, useEffect } from 'react'
import myface from "./assets/uncolored.png"
import facebookIcon from "./assets/facebook.svg"
import leetIcon from "./assets/leetcode.svg"
import quaranteDeuxIcon from "./assets/42logo.svg"
import githubIcon from "./assets/github.svg"
import instagramIcon from "./assets/instagram.svg"
import twitterIcon from "./assets/twitter.svg"
import linkedinIcon from "./assets/linkedin.svg"
import bootstrapIcon from "./assets/bootstrap.svg";
import cppIcon from "./assets/cpp.svg";
import cIcon from "./assets/c.svg";
import cssIcon from "./assets/css.svg";
import flaskIcon from "./assets/flask.svg";
import gitIcon from "./assets/git.svg";
import htmlIcon from "./assets/html.svg";
import javascriptIcon from "./assets/javascript.svg";
import laravelIcon from "./assets/laravel.svg";
import mongodbIcon from "./assets/mongodb.svg";
import mysqlIcon from "./assets/mysql.svg";
import phpIcon from "./assets/php.svg";
import pythonIcon from "./assets/python.svg";
import reactIcon from "./assets/react.svg";
import tailwindIcon from "./assets/tailwind.svg";



const Container = ({children}) => {
  return (
    <div className={`m-auto w-full  md:w-3/4 sm:px-10 lg:px-0 px-4 mt-6`}>
      {children}
    </div>
  )
}

const Profile = () => {
  return (
    <div className="relative">
      {/* Blur effect element */}
      <div className="absolute w-64 h-64 rounded-full bg-cyan-400 top-10 -left-12 
                    filter blur-[80px] opacity-30 z-0 animate-blob"></div>
      
      <section id="profile" className='relative z-10 flex flex-col lg:flex-row px-10 md:px-0 
                                    text-center justify-center items-center sm:text-left'>
        <div className='flex gap-5 md:justify-center justify-center flex-col lg:items-start items-center'> 
          <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-6'>Hello, I'm Salah Eddine Gouzi</h2>
          <p className='text-lg md:w-2/3 font-mono tracking-tight'>
            I'm a junior software engineer and full-stack developer passionate about building user-friendly applications and solving problems. I'm eager to learn and grow in the tech industry.
          </p>
          <div id="socials" className='mb-5 md:mt-5 flex overflow-hidden  md:h-15 lg:max-w-100 md:w-3/6 w-4/5  '>
            <div className="flex items-start pt-3 justify-between w-full h-18 border-b-0  border-t-2 border-l-2 border-r-2 rounded-l-xl rounded-r-xl">
            <a href="#" className='w-full border-r-2'><img src={linkedinIcon} alt="" className='w-full h-10' /></a>
            <a href="#" className='w-full border-r-2'><img src={githubIcon} alt="" className='w-full h-10' /></a>
            <a href="#" className='w-full border-r-2'><img src={leetIcon} alt="" className='w-full h-8.5 mt-0.5 rounded-4xl' /></a>
            <a href="#" className='w-full'><img src={quaranteDeuxIcon} alt="" className='w-full h-10' /></a>
            </div>
          </div>
        </div>
        <img className='text-center md:w-3/5 lg:w-2/5 w-2/4 object-cover h-full' src={myface} alt="Salah Eddine Gouzi" />
      </section>
    </div>
  )
}

const TechStack = () =>
{
  const techIcons = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: javascriptIcon, alt: "JavaScript" },
    { src: reactIcon, alt: "React" },
    { src: tailwindIcon, alt: "Tailwind CSS" },
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: cppIcon, alt: "C++" },
    { src: cIcon, alt: "C" },
    { src: pythonIcon, alt: "Python" },
    { src: phpIcon, alt: "PHP" },
    { src: laravelIcon, alt: "Laravel" },
    { src: mysqlIcon, alt: "MySQL" },
    { src: mongodbIcon, alt: "MongoDB" },
    { src: flaskIcon, alt: "Flask" },
    { src: gitIcon, alt: "Git" },
  ];
  return (
    <div id="technologies" className='mt-20 h-20 flex flex-wrap overflow-hidden'>
      {techIcons.map(el => {
        return (
          <div className='h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-400 mr-7'> <img src={el.src} className='h-14 w-14' alt ={el.alt} /></div>
        );
      })}
    </div>
  )
}

const Main = () => 
{
  return (
      <Container>
        <main>
          <Profile />
          <TechStack />
        </main>
      </Container>
  )
}

const Nav = () => {
  return (
    <Container>
    <nav className='md:mt-4 font-[BrandMed] w-full flex justify-between sm:px-2 mb-20'>
      <span className='font-[scriptFont]  md:text-2xl lg:text-3xl '>Sgouzi</span>
      <ul className='hidden md:flex md:gap-5 md:text-1xl lg:text-2xl'>
        <li className='hover:text-gray-400 transition duration-150 ease-in-out'><a href='#'>Profile</a></li>
        <li className='hover:text-gray-400 transition duration-150 ease-in-out'><a href='#'>Goals</a></li>
        <li className='hover:text-gray-400 transition duration-150 ease-in-out'><a href='#'>Projects</a></li>
        <li className='hover:text-gray-400 transition duration-150 ease-in-out'><a href='#'>Contact</a></li>
      </ul>
      <div  className='md:hidden'>
        <button className='cursor-pointer'>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
        </svg>
        </button>
      </div>
    </nav>
    </Container>
  )
}

const App = () => {

  return (
    <>
      <Nav />
      <Main />
    </>
  )
}

export default App
