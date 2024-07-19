
"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { social_icons } from "@/data/data";

function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 h-full w-full bg-slate-900 py-32 px-4 md:px-8">
        <div className="flex flex-col justify-evenly h-auto md:h-[55vh] w-full md:w-[35vw] text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-white">
            <span className="text-[red]">Hi,</span> I'm Vibha
          </h1>
          <p className="text-2xl md:text-4xl text-white mt-4 md:mt-0">A Fullstack Developer</p>
          <p className="text-white text-justify mt-4 md:mt-0">
            I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.
          </p>

          <div className="flex justify-center md:justify-start gap-3 mt-4 md:mt-0">
            {social_icons.map((social, index) => (
              <div key={index}>
                <Link href={social.link}>
                  <img
                    src={social.icon}
                    // alt={`${social.name} icon`}
                    width={35}
                    height={35}
                    className="bg-white p-1 rounded-full"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-3 mt-4 md:mt-0">
            <Link href="#contact">
              <Button className="bg-[#a9ff47] text-black hover:bg-white">GET In TOUCH</Button>
            </Link>
            <Link href="#projects">
              <Button className="bg-transparent border-2 border-[#a9ff47] text-[#a9ff47]">
                SEE MY WORK
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-auto md:h-[60vh] w-full md:w-[43vw] flex justify-center md:justify-end">
          <img src="/assets/hero.png" alt="Hero Image" className="h-[50vh] md:h-[70vh] w-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

