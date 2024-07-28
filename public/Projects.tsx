"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../src/components/ui/3d-card";
import Link from "next/link";
import { Button } from "../src/components/ui/button";

export function ThreeDCardDemo() {
  return (
    <div className="bg-[#0a0d30] flex flex-col items-center">
        <h1 className=" text-5xl text-cyan-400 font-bold pt-8">Featured Projects</h1>
      <CardContainer className=" inter-var grid grid-cols-2 gap-6 ">
        {/* Card1 */}
        <CardBody className="bg-gray-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Appwrite Authentication System
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            An authentication system using appwrite as a backend service. This is a react application demonstrates user authentication using Appwrite ans TypeScript.
            This project having features like User login, User Signup, profile management. 
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src="/assets/auth.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
            >
              Source Code →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
            >
              <a href="https://appwrite-authentication.vercel.app/login">Live Link</a>
            </CardItem>
          </div>
        </CardBody>

        {/* card2 */}

        <CardBody className="bg-gray-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Github Profile Search
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            An application that allows us to fetch user's details who uses GitHub, and for this, useState and useEffect hooks have been used.
            This Project display the users details like name, bio, repository name, its live link and  description. 
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/git.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
            >
              Source Code →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
            >
              <a href="https://github-beige-eta.vercel.app/">Live Link</a>
            </CardItem>
          </div>
        </CardBody>

        {/* card3 */}
        <CardBody className="bg-gray-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Expense Tracker
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/expense.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
            >
              Source Code →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
            >
              <a href="https://expense-tracker-mu-sable.vercel.app/">Live Link</a>
            </CardItem>
          </div>
        </CardBody>

        {/* card4 */}

        <CardBody className="bg-gray-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Image Slider
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/image.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
            >
              Source Code →
            </CardItem>
            <CardItem
              
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
            >
              <a href="https://image-slider-git-main-vibhas-projects-349a2fd5.vercel.app/">Live Link</a>
            </CardItem>
          </div>
        </CardBody>

        
      </CardContainer>


      <Button className="text-[#a9ff47] text-lg font-semibold bg-transparent w-[20rem] border-[1px] border-[#a9ff47] hover:bg-[#a9ff47] hover:text-black mb-8">VIEW ALL PROJECTS</Button>
    </div>
    
    
  );
}
