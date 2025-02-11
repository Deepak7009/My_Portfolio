"use client";

import Image from "next/image";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "../app/rd.jpg";
import { Typewriter } from "react-simple-typewriter";

const socialIcons = [
  { Icon: Github, link: "#", top: "0%", left: "50%" },
  { Icon: Linkedin, link: "#", top: "50%", left: "1%" },
  { Icon: Instagram, link: "#", top: "50%", left: "99%" },
  { Icon: Twitter, link: "#", top: "99%", left: "50%" },
];

const Hero = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section: Profile Image & Social Icons */}
          <div className="md:w-1/2 mb-8 md:mb-0 relative text-center md:text-left">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-600 dark:to-purple-600 rounded-full animate-blob mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-300 dark:from-yellow-600 dark:to-red-600 rounded-full animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-300 dark:from-blue-600 dark:to-green-600 rounded-full animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"></div>
              </div>
              <Image
                src={img}
                alt="Profile"
                width={256}
                // height={256}
                className="rounded-full relative z-10 shadow-xl h-[256px]"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-spin-slow hover:pause-animation z-20"></div>
              {socialIcons.map(({ Icon, link, top, left }, index) => (
                <a
                  key={index}
                  href={link}
                  className="absolute w-10 h-10 flex items-center justify-center bg-background rounded-full shadow-lg hover:shadow-primary transition-shadow duration-300 z-30"
                  style={{
                    top,
                    left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section: Text & Buttons */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              <Typewriter
                words={["Welcome to My Portfolio"]}
                loop={true}
                cursor
              />
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              <Typewriter
                words={[
                  "I'm a web developer passionate about creating amazing experiences.",
                  "I build modern, responsive, and interactive websites.",
                  "Let's collaborate on your next project!",
                ]}
                loop={true}
                cursor
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild>
                <a href="#contact" className="w-full sm:w-auto text-center">
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download className="w-full sm:w-auto text-center">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Blob Effect */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-tl-full"></div>
    </section>
  );
};

export default Hero;
