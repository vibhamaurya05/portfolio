import React from "react";
import { Input } from "../src/components/ui/input";
import { Textarea } from "../src/components/ui/textarea";
import { Button } from "../src/components/ui/button";

function Contact() {

  return (
    <>
      <div className=" flex  flex-col gap-4 items-center bg-[#152d47] p-10">
        <h1 className="text-4xl text-white text-center font-semibold">
          GET IN <span className=" text-[red]">TOUCH</span>
        </h1>
        <div className="flex justify-around w-[80vw] bg-white rounded-xl shadow-red-900 p-6">
          <div className="h-auto w-[30vw]">
            <img
              src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1747123002.1711868432&semt=ais_user"
              alt=""
              className=""
            />
          </div>
          <form action="https://formspree.io/f/mqazawna" method="POST">
            <div className="flex flex-col gap-4 h-auto w-[30vw]  rounded ">
              <h1 className="text-2xl text-cyan-400  font-semibold">Say Hi</h1>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                className="h-[7vh] bg-blue-200 border-[1px] border-black rounded-2xl"
                required
              ></Input>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                className="h-[7vh] bg-blue-200 border-[1px] border-black rounded-2xl"
                required
              ></Input>
              <Input
                type="text"
                placeholder="Phone"
                name="phone"
                className="h-[7vh] bg-blue-200 border-[1px] border-black rounded-2xl"
                required
              ></Input>
              <Textarea
                placeholder="Message..."
                name="message"
                className="h-[7vh] bg-blue-200 border-[1px] border-black rounded-2xl"
                required
              ></Textarea>
              <Button className="bg-[#a9ff47] w-[6vw] text-lg text-black font-semibold">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
