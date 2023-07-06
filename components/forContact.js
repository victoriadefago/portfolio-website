import ContactForm from "./contactForm";
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa"
import { TiLocation } from "react-icons/ti"
import Link from "next/link";
import userData from "@constants/data";

export default function ForContact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-32 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-10 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 mx-auto pt-20">
          <div className="relative z-10 rounded-xl shadow-md bg-[#02044A] p-4 md:p-8 lg:p-12 max-w-6xl mx-auto mb-2 -mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="md:ml-4">
                <header className="">
                  <h1 className="text-gray-50 font-semibold text-2xl">
                    Get in touch, let's talk.
                  </h1>
                  <p className="font-light text-base text-gray-200 mt-2">
                    Fill in the details and I'll get back to you as soon as I can.
                  </p>
                </header>
                <div className="icons-container inline-flex flex-col my-20">
                  <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                    <FaPhone width="24" height="24" fill="white" />
                    <p className="text-gray-50 font-light text-md">
                      {userData.phone}
                    </p>
                  </div>
                  <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                    <FaEnvelope width="24" height="24" fill="white" />
                    <p className="text-gray-50 font-light text-md">
                      {userData.email}
                    </p>
                  </div>
                  <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                    <TiLocation width="24" height="24" fill="white" />
                    <p className="text-gray-50 font-light text-md">
                      {userData.address}
                    </p>
                  </div>
                </div>
                <div className="social-icons flex flex-row space-x-8"> 
                  <Link
                    href={userData.socialLinks.linkedin}
                    target="_blank"
                    className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                  >
                    <FaLinkedin width="24" height="24" fill="white" />
                  </Link>
                  <Link
                    href={userData.socialLinks.github}
                    target="_blank"
                    className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                  >
                    <FaGithub width="24" height="24" fill="white" />
                  </Link>
                  <Link
                    href={userData.socialLinks.instagram}
                    target="_blank"
                    className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                  >
                    <FaInstagram width="24" height="24" fill="white" />
                  </Link>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
