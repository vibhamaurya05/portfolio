"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Button } from "./ui/button";

export function ThreeDCardDemo() {
  return (
    <section id="projects">
      <div className="bg-[#0a0d30] flex flex-col items-center py-10 px-14 ">
        <h1 className="text-4xl sm:text-5xl text-cyan-400 font-bold pt-8 text-center">
          Featured Projects
        </h1>
        <CardContainer className="inter-var grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {/* Card1 */}
          <CardBody className="bg-gray-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Appwrite Authentication System
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              An authentication system using Appwrite as a backend service. This
              React application demonstrates user authentication using Appwrite and TypeScript, with features like user login, user signup, and profile management.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/auth.jpg"
                height="300"
                width="300"
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/vibhamaurya05/appwrite-authentication"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
              >
                Source Code →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="mt-2 sm:mt-0 px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                <a href="https://appwrite-authentication.vercel.app/login">
                  Live Link
                </a>
              </CardItem>
            </div>
          </CardBody>

          {/* Card2 */}
          <CardBody className="bg-gray-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Github Profile Search
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              An application that allows you to fetch user details from GitHub using useState and useEffect hooks. Displays user details such as name, bio, repository names, live links, and descriptions.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/git.jpg"
                height="300"
                width="300"
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/vibhamaurya05/github-profile-search"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
              >
                Source Code →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="mt-2 sm:mt-0 px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                <a href="https://github-beige-eta.vercel.app/">Live Link</a>
              </CardItem>
            </div>
          </CardBody>

          {/* Card3 */}
          <CardBody className="bg-gray-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Expense Tracker
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              An expense tracking application with a clean and simple interface.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/expense.jpg"
                height="300"
                width="300"
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/vibhamaurya05/ExpenseTracker"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
              >
                Source Code →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="mt-2 sm:mt-0 px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                <a href="https://expense-tracker-mu-sable.vercel.app/">
                  Live Link
                </a>
              </CardItem>
            </div>
          </CardBody>

          {/* Card4 */}
          <CardBody className="bg-gray-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Image Slider
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              An image slider with smooth transitions.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/image.jpg"
                height="300"
                width="300"
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/vibhamaurya05/ImageSlider"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black"
              >
                Source Code →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="mt-2 sm:mt-0 px-4 py-2 rounded-xl bg-[#a9ff47] dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                <a href="https://image-slider-git-main-vibhas-projects-349a2fd5.vercel.app/">
                  Live Link
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <Button className="text-[#a9ff47] text-lg font-semibold bg-transparent w-[20rem] border-[1px] border-[#a9ff47] hover:bg-[#a9ff47] hover:text-black mb-8 mt-4">
          <a href="https://github.com/vibhamaurya05?tab=repositories">VIEW ALL PROJECTS</a>
        </Button>
      </div>
    </section>
  );
}



