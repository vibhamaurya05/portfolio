'use client';
import React from 'react'
import {techStack}  from '@/data/data';
import { BackgroundGradient } from '../src/components/ui/Background-gradient';
import Image from 'next/image';



function TechStack() {
  return (
    
    <div className='flex flex-col justify-center text-center gap-8 h-full w-full bg-[#152d47] p-4 '>
        
        <h1 className='text-5xl text-cyan-200 font-medium'>My Tech Stack</h1>
        
           
           <div className='  w-[60vw] text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ml-[15rem] p-5 '>
                {techStack.map(({icon, name} :
                    {icon:string, name: string}, index
                )=><BackgroundGradient className='h-[17vh] rounded-lg bg-[#295686] ' key={index}  >
                    <div className=" w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex flex-col justify-center items-center px-2 py-1 rounded-xl ">
                        <Image src={icon} alt={name} width={55} height={55} className="w-[40px] h-[60px] md:w-[60px] md:h-[60px] mb-2"/>
                        <p className="text-sm  uppercase text-center text-[white] ">{name}</p>
                    </div>
                </BackgroundGradient>)}
           </div>
        
        
    </div>
    
  )
}

export default TechStack


