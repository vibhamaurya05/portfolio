
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function Contact() {
  return (
    <section id="contact" className="bg-[#152d47] py-10">
      <div className="flex flex-col items-center px-4 py-2 sm:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center font-semibold mb-6">
          GET IN <span className="text-red-600">TOUCH</span>
        </h1>
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
          <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
            <img
              src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1747123002.1711868432&semt=ais_user"
              alt="Customer Support"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <form
            action="https://formspree.io/f/mqazawna"
            method="POST"
            className="flex-1 flex flex-col gap-4"
          >
            <h2 className="text-2xl text-cyan-400 font-semibold mb-4">Say Hi</h2>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              className="p-3 bg-blue-200 border border-black rounded-lg w-full"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              className="p-3 bg-blue-200 border border-black rounded-lg w-full"
              required
            />
            <Input
              type="text"
              placeholder="Phone"
              name="phone"
              className="p-3 bg-blue-200 border border-black rounded-lg w-full"
              required
            />
            <Textarea
              placeholder="Message..."
              name="message"
              className="p-3 bg-blue-200 border border-black rounded-lg w-full"
              required
            />
            <Button className="bg-[#a9ff47] text-lg text-black font-semibold py-2 px-4 rounded-lg w-full sm:w-auto">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
