"use client"
import React from 'react';

import { headerItem } from '../constant/constant';
import {data} from '../constant/constant'
import Heading from '../component/heading';
import Cards from '../component/card';




const Projects: React.FC = () => {
  return (
    <section
      id={headerItem.projects.page}
      className='text-white  flex flex-col text-center justify-center mt-[150px] md:mt-[100px] items-center'
    >
      <div>
        <Heading title='Projects'/>
        <div className='grid gap-10 xl:gap-7 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {data.map((el)=>
            ( <Cards 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.image}
            tags={el.tags}
            url={el.url}
            />)
            )
          }
        </div>
      </div>

    </section>
);
};

export default Projects;
