import React from "react";
import Navbar from "../components/header/Nav";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="h-screen bg-[#008FAD] relative">
      <Navbar />
      <div className="z-10 flex flex-col gap-12 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="lg:text-[40px]  text-5xl text-white font-medium ">
            NATIONAL LEVEL HACKATHON
          </h1>
          <h1 className="lg:text-[90px]  text-7xl font-extrabold text-white">
            BMC InnovateX
          </h1>
        </div>

        <h1 className=" text-white text-5xl font-medium ">
          Think Big, Innovate Bigger
        </h1>
        <div>
          <button className="hover:bg-white hover:text-[#0684A1] border-2  border-white text-2xl text-white mt-6 rounded-3xl py-2 px-8">
            REGISTER NOW
          </button>
        </div>
      </div>
      <div className="absolute bottom-18 left-15 ">
        <Image
          src={"https://i.postimg.cc/LXzvrKT4/roundedrect1.png"}
          alt="mascot"
          width={520}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 left-[39%] ">
        <Image
          src={"https://i.postimg.cc/4yPPx6qr/roundedrect2.png"}
          alt="mascot"
          width={500}
          height={175}
        />
      </div>
      <div className="absolute bottom-71 right-[26%] ">
        <Image
          src={"https://i.postimg.cc/m2ZV6nFR/roundedrect3.png"}
          alt="mascot"
          width={350}
          height={100}
        />
      </div>
      <div className="absolute bottom-20 right-0 ">
        <Image
          src={"https://i.postimg.cc/Pr6KGMmD/roundedrect4.png"}
          alt="mascot"
          width={500}
          height={175}
        />
      </div>
      <div className="absolute bottom-0 right-0 ">
        <Image
          src={"https://i.postimg.cc/Dy5pvhK8/mascot.png"}
          alt="mascot"
          width={350}
          height={350}
        />
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
