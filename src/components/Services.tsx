

"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { HoverEffect } from "./ui/card-hover-effect";

function Services() {
  return (
    <section id="services" className="">
      <div className="container mx-auto px-0">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center text-4xl font-medium tracking-tight bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-cyan-400"
        ></motion.h1>
        {/* Conditionally render LampContainer based on screen size */}
        <div className="hidden md:block ">
          <LampContainer>
            <h1 className="text-5xl text-cyan-400 font-bold">My Services</h1>
            <HoverEffect items={projects} />
          </LampContainer>
        </div>
        <div className="bg-gray-950 text-center h-full">
          <h1 className="text-4xl font-bold text-cyan-400 py-6 md:hidden">My Services</h1>
          <div className="md:hidden">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "I am a passionate Web Developer with some experience in creating dynamic and responsive web applications. My skill set includes TypeScript, React, Formik, Yup, and TailwindCSS for front-end development, and Appwrite for backend services. I excel in building seamless user authentication systems, ensuring a smooth user experience. I am dedicated to delivering high-quality, bug-free projects with a focus on efficient and maintainable code.",
    link: "",
  },
  {
    title: "FREELANCING",
    description:
      "As a dedicated freelance professional, I provide tailored services to meet your unique needs. With a strong commitment to excellence, I bring a wealth of expertise, creativity, and attention to detail to every project. Whether you require web development, content creation, UI/UX design, or any other, I ensure high-quality, reliable, and timely delivery. Let’s collaborate to transform your ideas into successful outcomes.",
    link: "",
  },
];

export default Services;
