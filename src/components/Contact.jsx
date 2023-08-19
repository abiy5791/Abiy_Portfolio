import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me !
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a3ded04d-c5be-4ec2-98c9-29ab0b4226b9"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:border"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-500 hover:text-black">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
