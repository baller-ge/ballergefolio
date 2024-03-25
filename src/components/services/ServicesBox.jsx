import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Services = [
  {
    name: "UX research",
    description:
      "Identify usability problems, gather feedback on design concepts, and validate design decisions.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "App Development",
    description:
      "Software for smartphones, tablets and digital assistants, aethesthically pleasing and delivered on time.",
    image: "https://picsum.photos/200/301",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Web App Development",
    description:
      "Software and web apps of any kind on any niche of your choice, delivered on schedule with client satisfaction as my watchword.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Security",
    description:
      "Developing, adding, and testing security features within applications to prevent security vulnerabilities against threats.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl  bg-blue-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
