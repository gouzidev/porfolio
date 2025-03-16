import { useState, useEffect } from 'react'
import myface from "./assets/uncolored.png"
import facebookIcon from "./assets/facebook.svg"
import leetIcon from "./assets/leetcode.svg"
import barsSvg from "./assets/bars.svg"
import xSvg from "./assets/x-btn.svg"
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
import { ProjectTemplate, projectStatus } from './types'
import axios from "axios"
import leetAcheiv from "../src/assets/acheivs/leet.png"
import ibmAcheiv from "../src/assets/acheivs/ibm.png"
import oracleAcheiv from "../src/assets/acheivs/oracle.png"

const PROJECTS_DIR = "src/assets/projects/"

const Container = ({children}) => {
  return (
    <div className={`m-auto w-full  md:w-3/4 sm:px-10 lg:px-0 px-4 mt-6 sm:mb-40 mb-10`}>
      {children}
    </div>
  )
}

const Profile = () => {
  return (
    <Container>
    <div id="profile" className="relative sm:mb-20 mb-10">
      {/* Blur effect element */}
      <div className="absolute sm:w-64 sm:h-64 w-20 h-20 rounded-full bg-cyan-400 sm:top-10 sm:-left-12 top-4 -left-5 
                    filter blur-[80px] opacity-30 z-0 animate-blob"></div>
      <section className='relative z-10 flex flex-col lg:flex-row sm:px-10 md:px-0 
                                    text-center justify-center items-center sm:text-left'>
        <div className='flex gap-5 md:justify-center justify-center flex-col lg:items-start items-center'> 
          <h2 className='text-md sm:text-lg md:text-3xl lg:text-4xl xl:text-6'>Hello, I'm Salah Eddine Gouzi</h2>
          <p className='text-xs sm:text-sm lg:text-md md:w-2/3 font-mono tracking-tight'>
            I'm a junior software engineer and full-stack developer passionate about building user-friendly applications and solving problems. I'm eager to learn and grow in the tech industry.
          </p>
          <div id="socials" className='mb-5 md:mt-5 flex overflow-hidden  h-15 lg:max-w-100 md:w-3/6 sm:w-4/5 w-3/5  '>
            <div className="flex items-start pt-3 justify-between w-full h-18 border-b-0  border-t-2 border-l-2 border-r-2 rounded-l-xl rounded-r-xl">
            <a id="social-linkedin-icon" href="#" className='w-full border-r-2'><img src={linkedinIcon} alt="" className='w-full sm:h-10  h-7 ' /></a>
            <a id="social-github-icon" href="#" className='w-full border-r-2'><img src={githubIcon} alt="" className='w-full sm:h-10  h-7 ' /></a>
            <a id="social-leet-icon" href="#" className='w-full border-r-2'><img src={leetIcon} alt="" className='w-full sm:h-8  h-5.5 mt-0.5 rounded-4xl' /></a>
            <a id="social-quaranteDeux-icon" href="#" className='w-full'><img src={quaranteDeuxIcon} alt="" className='w-full sm:h-10  h-7 ' /></a>
            </div>
          </div>
        </div>
        <img className='text-center md:w-3/5 lg:w-2/5 w-2/4 object-cover h-full max-w-200
        hover:scale-101 transition-transform 
        ' src={myface} alt="Salah Eddine Gouzi" />
      </section>
    </div>
    </Container>
  )
}

const TechStack = () => {
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

  // Duplicate the icons array for seamless looping
  const duplicatedIcons = [...techIcons, ...techIcons];

  return (
    <Container>
    <section id='tech-stack'>
        <h3 className='flex justify-center font-[Manrope] md:text-5xl h-14'>Technologies</h3>
        <div id="technologies" className='md:mt-15 md:h-24 h-18 flex overflow-hidden relative'>
        <div className='flex absolute animate-scroll items-center h-24'>
          {duplicatedIcons.map((el, index) => (
            <div 
              key={index}
              className='md:h-18 md:w-18 sm:h-10 sm:w-10  w-8 h-8 
              flex justify-center items-center rounded-full border-2 md:mx-7 mx-3 animate-roll '
            >
              <img src={el.src} className='h-5 w-5 md:h-11 md:w-11' alt={el.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </Container>
  );
};

/* 
  project -> an object of ProjectTemplate class
*/

const Project = ({project}) => 
{
  return (
    <a href={project.link} className='flex flex-col  items-center'>
      <div className='flex sm:items-center  hover:scale-101 cursor-pointer relative sm:h-80 sm:w-120 w-full justify-center transition-all'>
        <img className='rounded-2xl object-top w-1/2 sm:w-full sm:h-full' src={PROJECTS_DIR  + project.img} />
        <div className="pl-5  hover:opacity-100 opacity-0 absolute hover:bg-gradient-to-b hover:from-transparent hover:to-black/100  transition-all  rounded-2xl   w-full h-full  top-0">
          <p className='h-full   bottom-4 w-auto flex whitespace-break-spaces text-sm font-mono  items-end  absolute'>{project.desc}</p>
        </div>
      </div>
      <div className='flex gap-x-2 mt-2 mb-3'>
          {project.tags.map((tag) => 
          {
            return (
              <span className='font-mono font-light text-[0.3em] sm:text-[0.7em] sm:px-2 sm:py-1 border-1 rounded-4xl border-zinc-600'>{tag}</span>
            )
          })}
        </div>
      <h4 className='md:text-2xl  sm:text-md text-xs whitespace-pre-wrap  font-[Manrope]'>
        {project.name}
      </h4>
    </a>
  )
}

const Projects = () => 
{
  let minirt = new ProjectTemplate();
  minirt.name = "Mini Ray Tracer"
  minirt.desc = "Ray Tracer built with C language! supporting native shapes such as spheres, planes, cylinders and cones, also supporting lights, shadows and reflections."
  minirt.img = "minirt.jpeg"
  minirt.link = "https://github.com/gouzidev/minirt.git"
  minirt.tags.push("graphics")
  minirt.tags.push("math")
  minirt.tags.push("software eng.")

  let book_store = new ProjectTemplate()
  book_store.name = "Book Store"
  book_store.desc = "Fully Crud Web Application that supports all CRUD operations such as adding, displaying, updating and removing and searching for books, written with MERN Stack."
  book_store.img = "book_store.png"
  book_store.tags.push("frontend")
  book_store.tags.push("backend")
  book_store.tags.push("web design")
  book_store.link = "https://github.com/gouzidev/minirt.git"

  let wizara = new ProjectTemplate()
  wizara.name = "Document Management Web App"
  wizara.desc = "Fully Crud Web Application that supports all CRUD operations such as adding, displaying, updating and removing and searching for books, written with MERN Stack."
  wizara.img = "wizara.png"
  wizara.tags.push("web dev")
  wizara.tags.push("crud")
  wizara.tags.push("web design")
  wizara.tags.push("software dev")
  wizara.link = "https://github.com/gouzidev/minirt.git"

  let webserv = new ProjectTemplate()
  webserv.name = "Web Server from Scratch in C++"
  webserv.desc = "Fully Crud Web Application that supports all CRUD operations such as adding, displaying, updating and removing and searching for books, written with MERN Stack."
  webserv.img = "web-server.webp"
  webserv.stts = projectStatus.progress
  webserv.tags.push("software eng.")
  webserv.tags.push("web dev")
  webserv.link = "https://github.com/gouzidev/webserv.git"

  return (
    <Container>
    <section id='projects' className='' >
        <h3 className='flex justify-center font-sans md:text-5xl'>Projects</h3>
        <div className='flex flex-wrap sm:gap-x-5 sm:gap-y-20 gap-x-3 gap-y-8 items-center  justify-center sm:mt-20 mt-5'>
            <Project project={minirt} />
            <Project project={wizara} />
            <Project project={book_store} />
            <Project project={webserv } />
        </div>
        </section>
    </Container>
  )
}

const Acheivements = () => {
  return (
    <Container >
      <section id="acheivements">
      <h3 className='flex justify-center font-sans md:text-5xl'>Acheivements</h3>
        <div className='my-20 w-full bg'>
          <div className="gap-y-5 sm:gap-y-0 items-center flex sm:flex-row flex-col gap-x-10">
          <img className='order-first w-1/2 sm:w-2/5 lg:2/5 sm:self-start md:w-full rounded-3xl' src={leetAcheiv}/>
          <div className='flex flex-col '>
            <h4 className='tracking-wide text-lg sm:text-2xl font-sans sm:mb-10 mb-4' >
              Solving more than 100 LeetCode problem!
            </h4>
            <p className='leading-8 font-mono tracking-wide text-sm sm:text-md whitespace-pre-line'>
              Demonstrated strong problem-solving and coding proficiency by successfully solving 122 LeetCode problems, showcasing expertise in algorithms, data structures, and efficient code optimization. This achievement highlights my ability to tackle complex challenges and deliver high-quality solutions under time constraints, making me a valuable asset for technical roles.</p>
          </div>
          </div>
        </div>

        <div className='my-20 w-full bg'>
        <div className="gap-y-5 sm:gap-y-0 items-center flex sm:flex-row flex-col gap-x-10">
        <div className=' flex flex-col '>
          <h4 className='tracking-wide text-lg sm:text-2xl font-sans sm:mb-10 mb-4' >
          Gaining the Oracle Mysql Learning Explorer!
            </h4>
            <p className='leading-8 font-mono tracking-wide text-md whitespace-pre-line'>
            Earned the Oracle MySQL Learning Explorer certification, demonstrating a solid foundation in database management, SQL querying, and data manipulation. This achievement reflects my commitment to mastering essential database skills and my ability to effectively work with relational databases, enhancing my technical expertise for data-driven projects.</p>
          </div>
          <img className='order-first sm:order-last w-1/2 sm:w-2/5 lg:2/5 sm:self-start md:w-full rounded-3xl' src={oracleAcheiv}/>
          </div>
        </div>


      <div className='my-20 w-full bg'>
          <div className="gap-y-5 sm:gap-y-0 items-center flex sm:flex-row flex-col gap-x-10">
          <img className='order-first w-1/2 sm:w-2/5 lg:2/5 sm:self-start md:w-full rounded-3xl' src={ibmAcheiv}/>
          <div className='flex flex-col '>
            <h4 className='tracking-wide text-lg sm:text-2xl font-sans sm:mb-10 mb-4' >
              Completing the IBM Web Dev Fundamentals!
            </h4>
            <p className='leading-8 font-mono tracking-wide text-sm sm:text-md whitespace-pre-line'>
            Earned the IBM Web Development Fundamentals certification, showcasing skills in HTML, CSS, JavaScript, and responsive design. This reflects my foundational web development expertise and commitment to growth in the field.</p>
          </div>
          </div>
      </div>
      </section>
    </Container>
  )
}

const Contact = () => 
{
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessge] = useState("")
  const [infoMsg, setInfoMsg] = useState("")
  const [isError, setIsError] = useState(false)
  const [visible, setVisible] = useState(false)
  const handleSubmit = async (e) => 
  {
    e.preventDefault()
    if (name.length == 0)
      {
        setIsError(true)
        setInfoMsg("please enter a valid name")
      }
    else if (email.length == 0)
      {
        setIsError(true)
        setInfoMsg("please enter a valid email")
      }
    else if (message.length == 0)
      {
        setIsError(true)
        setInfoMsg("please enter a valid message")
      }
      else
      {
        let response = await axios.post("http://localhost:7878/contact",
          {name, email, message}, 
          {headers : {'Content-type' : 'application/json'}}
        )
        let res = response.data
          setIsError(!res.success)
        setInfoMsg(res.msg)
      }
      setVisible(true)
      setTimeout(() => {
      setVisible(false)
      }, 3000)
  }
    return (
      <Container>
      <form id="contact" method='post' action="/contact"
        className='
        sm:mb-20
        flex flex-col rounded w-5/6 gap-y-5 items-center'
      >
        <h3 className='flex justify-center font-sans md:text-5xl'>Contact</h3>
          <input onChange={(e) => setName(e.target.value)} className='h-10 w-1/2 focus:outline-none border-zinc-700 border-1 p-5 rounded-md' name="name"  placeholder='name'/>
          <input onChange={(e) => setEmail(e.target.value)} className='h-10 w-1/2 focus:outline-none border-zinc-700 border-1 p-5 rounded-md' name="email"  placeholder='email'/>
          <input onChange={(e) => setMessge(e.target.value)} className='h-30 w-1/2 focus:outline-none border-zinc-700 border-1 p-5 rounded-md' name="message"  placeholder='message'/>
          <span className=
            {`w-1/2 text-sm font-light font-[BrandMed] tracking-wide 
            transition-all sm:h-4 
            ${isError ? "text-red-600" : "text-green-600"}
            ${visible ? "opacity-100" : "opacity-0"}
            `}
          >
            {infoMsg}
          </span>
          <button  type='submit' onClick={(e) => handleSubmit(e)} className='w-1/2 bg-zinc-700/50 py-4 transition-all cursor-pointer hover:bg-zinc-700/30 rounded-lg'>send</button>
      </form>
      </Container>
    )
}

const Main = () => 
{
  return (
        <main>
          <Profile />
          <TechStack />
          <Projects />
          <Acheivements />
          <Contact />
        </main>
  )
}

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <Container>
    <nav className='md:mt-4 font-[BrandMed] w-full flex justify-between sm:px-2 mb-20'>
      <span className='font-[scriptFont]  md:text-2xl lg:text-3xl '>Sgouzi</span>
      <ul className='hidden md:flex md:gap-5 md:text-1xl lg:text-2xl'>
        <li className='hover:text-gray-400 transition duration-150 ease-in-out'><a href='#profile'>Profile</a></li>
        <li className='hover:text-gray-400 transition duration-150 ease-in-out'><a href='#projects'>Projects</a></li>
        <li className='hover:text-gray-400  transition duration-150 ease-in-out hover:opacity-80'><a href='#acheivements'><span id='nav-acheivement'>Acheivements</span></a></li>
        <li className='hover:text-gray-400 transition duration-150 ease-in-out'><a href='#contact'>Contact</a></li>
      </ul>
      <div  className='md:hidden'>
        <button className='cursor-pointer' onClick={() => setToggleNav((prev) => !prev)}>
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
