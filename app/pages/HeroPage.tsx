import React from "react";
import Navbar from "../components/header/Nav";
import Image from "next/image";

const mascot = "/assets/mascot.png";
const roundedRect1 = "/assets/roundedRect1.png";
const roundedRect2 = "/assets/roundedRect2.png";
const roundedRect3 = "/assets/roundedRect3.png";
const roundedRect4 = "/assets/roundedRect4.png";

const HeroPage = () => {
  return (
    <div className="h-screen bg-[#008FAD] relative">
      <Navbar />
      <div className="z-10 flex flex-col gap-5 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-4xl text-white font-medium ">
          NATIONAL LEVEL HACKATHON
        </h1>
        <h1 className="text-7xl font-extrabold text-white">BMC InnovateX</h1>
        <h1 className=" text-white text-4xl font-medium ">
          Think Big, Innovate Bigger
        </h1>
        <div>
          <button className="hover:bg-white hover:text-[#0684A1] border-2 border-white text-xl text-white rounded-3xl py-2 px-6">
            REGISTER NOW
          </button>
        </div>
      </div>
      <div className="absolute bottom-18 left-15 ">
        <Image src={roundedRect1} alt="mascot" width={480} height={175} />
      </div>
      <div className="absolute bottom-0 left-[39%] ">
        <Image src={roundedRect2} alt="mascot" width={500} height={175} />
      </div>
      <div className="absolute bottom-71 right-[26%] ">
        <Image src={roundedRect3} alt="mascot" width={280} height={100} />
      </div>
      <div className="absolute bottom-20 right-0 ">
        <Image src={roundedRect4} alt="mascot" width={400} height={175} />
      </div>
      <div className="absolute bottom-0 right-0 ">
        <Image src={mascot} alt="mascot" width={350} height={350} />
      </div>
      <div className="absolute bottom-12 left-16">
        <LeftDots />
      </div>
      <div className="absolute bottom-[65%] right-25 ">
        <RightDots />
      </div>
      <div></div>
    </div>
  );
};

export default HeroPage;

function Dots() {
  return <div className="h-2 w-2 rounded-full bg-white"></div>;
}

function LeftDots() {
  return (
    <div className="grid w-12  grid-cols-3 gap-x-5 gap-y-3">
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
    </div>
  );
}

function RightDots() {
  return (
    <div className="grid w-12 grid-cols-5 gap-x-6 gap-y-3">
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
    </div>
  );
}
