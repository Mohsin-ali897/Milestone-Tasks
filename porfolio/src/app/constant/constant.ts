
// import { NavItem, UserObject,} from "./models/User"


import mypic from '../assets/porfolio.jpg'
import BgGradinetPic from '../assets/bgGradiennt.png'
import todo from '../assets/todoList.png'
import resBul from '../assets/resumeBuilder.png'
import cls1 from '../assets/classAssignment.png'
import Ecom from '../assets/ecommerce.png'
import cls2 from '../assets/figmadesign.png'
import atm from '../assets/atm.png'
export const userInfo = {
    name: "Mohsin Ali",
    
    picture:mypic, // Corrected the image path

    heading: ` I&#39;m a student passionate about both Front-end and Back-end development. As part of the Governor&#39;s Initiative for Generative AI and the Presidential Initiative for Cloud Native Generative AI, I am learning the latest technologies in the field. I have experience with HTML, CSS, TypeScript, JavaScript, Python, Next.js, React, and Tailwind CSS.`,
    
    about: `
        <p>Hi! I&#39;m Ahmed Ali, a dedicated professional in the field of Full Stack Development. I specialize in Web Development/ UI /UX Design and have a passion for creating many projects that make a difference. My journey in Development has been shaped by my love for innovation, problem-solving, and attention to detail.</p>
        <p>Over the past 1 years, I&#39;ve honed my skills working on projects ranging from [example 1] to [example 2], always striving to exceed expectations. Whether I&#39;m collaborating with a team or working independently, I take pride in delivering high-quality results that reflect both creativity and strategic thinking.</p>
        <p>When I&#39;m not [working on your craft], I enjoy [hobby or personal interest], which helps keep my mind fresh and inspired for new challenges. </p>
        `,
    
        skills: ['React', 'Next-JS',  'JavaScript', 'TypeScript', 'Python', 'TailWind-CSS',  'Bootstrap',  'Docker', 'HTML', 'CSS'],
}

export const headerItem ={
    home:{label:"Home" , page: "home"},
    about:{label:"About" , page: "about"},
    skills:{label:"Skills" , page: "Skills"},
    projects:{label:"Projects" , page: "projects"},
    contact:{label:"Contact" , page: "contact"}
}



export const data =[
    {
        //! 
        id:0,
        title:"Ecommerce Templete",
        desc:"Create a Fully Responsive website using React, Next js and Tailwind CSS",
        image: Ecom,
        tags:["React", "Next Js", "Tailwind"],
        url:"https://ecommerce-templete.vercel.app/"
    },
    
    {
        //!
        id:1,
        title:"Resume Builder",
        desc:"This is hackathon project to build a Resume Builder with the help of HTML , CSS , TypeScript",
        image: resBul,
        tags:["HTML" ,"CSS"  , "TypeScript"],
        url:"https://hackathon-project-miles-stone-05-resume-builder.vercel.app/"
    },
    {
        id:2,
        title:"Figma Design",
        desc:"Restrucutre the Figma design into Next Js and Tailwind",
        image: cls2,
        tags:["Next Js", "React","Tailwind CSS", ],
        url:"https://figma-to-code-in-nextjs.vercel.app/"
    },
    {
        id:3,
        title:"Class Assignment",
        desc:"Create a simple 5 page Using Next Js and Tailwind CSS ",
        image: cls1,
        tags:["React", "Next Js" ,"Tailwind CSS"],
        url:"https://class-assignment01-19c8.vercel.app/"
    },
    {
        //!
        id:4,
        title:"CLI Todo List",
        desc:"This is CLI Todo List Converte which is a project of typscript using inquirer",
        image: todo,
        tags:["TypeScript" ,"Node-JS", "Inquirer"  ],
        url:"https://github.com/Mohsin-ali897/CLI_TODO-LIST-.git"
    },
    {
        //! 
        id:5,
        title:"CLI ATM Machine",
        desc:"This is CLI Mangement System which is a project of typscript using inquirer",
        image: atm,
        tags:["TypeScript" ,"Node-JS", "Inquirer"  ],
        url:"https://github.com/Mohsin-ali897/Cli_atm_machine89.git"
    },
    {
        //! 
        id:6,
        title:"Figma Design",
        desc:"This is a class assigment to convert the Figma design into Next Js and Tailwind",
        image: cls2,
        tags:["Next Js" ,"Tailwind css", "React"  ],
        url:"    https://class-assignment02.vercel.app/"
    },
    {
        //!
        id:7,
        title:"Todo List",
        desc:"This is a Todo List project using React, Next JS and Tailwind CSS",
        image: todo,
        tags:["Next Js" ,"Tailwind css", "React"  ],
        url:"https://github.com/Mohsin-ali897/Todo-List.git"       
    },
    {
        id:8,
        title:"Background Gradient Generator",
        desc:"This is a background generator project using html, css and js",
        image: BgGradinetPic,
        tags:["HTML" ," css", "Javascript" ],
        url:"https://github.com/Mohsin-ali897/Todo-List.git" 
    }

    
]
