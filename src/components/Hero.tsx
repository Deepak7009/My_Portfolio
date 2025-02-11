import Image from "next/image";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "../app/rd.jpg";

const socialIcons = [
  { Icon: Github, link: "#" },
  { Icon: Linkedin, link: "#" },
  { Icon: Instagram, link: "#" },
  { Icon: Twitter, link: "#" },
];

const Hero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-600 dark:to-purple-600 rounded-full animate-blob mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-300 dark:from-yellow-600 dark:to-red-600 rounded-full animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-300 dark:from-blue-600 dark:to-green-600 rounded-full animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"></div>
              </div>
              <Image
                src={img} // Referencing the imported image
                alt="Profile"
                width={256}
                // height={100}
                className="rounded-full relative z-10 shadow-xl h-[256px]"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-spin-slow hover:pause-animation z-20"></div>
              {socialIcons.map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="absolute w-10 h-10 flex items-center justify-center bg-background rounded-full shadow-lg hover:shadow-primary transition-shadow duration-300 z-30"
                  style={{
                    top: `${50 - 40 * Math.cos((index * Math.PI) / 2)}%`,
                    left: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">
              I'm a web developer passionate about creating amazing experiences
            </p>
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-tl-full"></div>
    </section>
  );
};

export default Hero;
