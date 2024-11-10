import react from 'react'
import Heading from "../components/Heading";

import Card from "../components/Card"


const data = [
           {
           id: 0,
           title: "WEBSITE",
           height: "100",
           width:  "100",
           desc: "A dynamic website created using HTML, CSS, and TypeScript. It features a responsive layout with interactive elements, providing an engaging user experience through smooth functionality and modern design.",
           img: "/wt.png",
           tags: ["HTML5", "CSS" , "Typescript"],
           },
           {
           id: 4,
           title: "Currency Conveter",
           desc: "A simple currency converter built with TypeScript and styled with CSS, allowing users to convert between different currencies with real-time exchange rates.",
           img: "/cc.png",
           tags: ["Typescript", "CSS"],
           },
           {
           id: 4,
           title: "Number Guessing Game",
           desc: "A fun number guessing game built with TypeScript and styled using CSS, where players try to guess a randomly generated number within a certain range.",
           img: "/gg.png",
           tags: ["Typescript","CSS","HTML5"],
            },
            {
            id: 3,
            title: "Todo List",
            desc: "A to-do list application built with HTML, CSS, and TypeScript, allowing users to add, delete, and mark tasks as completed, with a simple and responsive design.",
            img: "/todolist.jpg",
            tags: ["HTML5","Typescript","CSS"],
            },
            {
            id: 2,
            title: "ATM Machine",
            desc:  "An ATM machine interface built with HTML, CSS, and TypeScript, enabling basic banking functions like balance check, deposits, and withdrawals in a simple, user-friendly design.",
            img: "/aa.webp",
            tags: ["CSS","Typescript"],
            },
            {
              id: 1,
              title: "Simple Calculator",
              height: "100",
              width: "100",
              desc:  "A simple calculator created using HTML, CSS, and TypeScript. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division with a clean and responsive interface.",
              img: "/calculator.png",
              tags: ["Typescript","CSS"],
            },
    
]

const Project = () => {
  return (
    <div id="projects" className='container pt-3' data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
   >
       <h1 className='text-[#00cfff]'>
      <Heading title = ' My Projects ' /> 
      </h1>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {
          data.map((el) => (<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
          />))
        }
      </div>

    </div>
  )
}

export default Project