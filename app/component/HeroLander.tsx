import Image from "next/image";

const HeroLander = () => {
  return (
    <div className="h-[45rem] lg:h-screen bg-[#008FAD] relative overflow-hidden">
      <div className="z-10 flex flex-col gap-14 md:gap-12 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="flex flex-col gap-5 md:gap-6 items-center justify-center text-center">
          <h1 className="text-xl md:text-3xl lg:text-[30px] text-white font-medium">
            NATIONAL LEVEL HACKATHON
          </h1>
          <h1 className="text-5xl md:text-5xl lg:text-[90px] font-extrabold text-white">
            BMC InnovateX
          </h1>

          <h1 className="text-white text-xl md:text-3xl lg:text-[30px] font-medium text-center">
            Think Big, Innovate Bigger
          </h1>
        </div>
        <div>
          <button
            className="hover:bg-white bg-white hover:text-[#0684A1] border-2 border-white text-lg md:text-2xl text-[#0684A1] mt-4 md:mt-6 rounded-3xl py-2 px-6 md:px-8"
            disabled
          >
            Registration Opening Soon
          </button>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute bottom-18 left-15 hidden md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect1_gomv4w.png"
          }
          alt="mascot"
          width={520}
          height={100}
        />
      </div>
      <div className="absolute bottom-40 left-[-140px] md:hidden">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect1_gomv4w.png"
          }
          alt="mascot"
          width={350}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 left-[39%] hidden md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect2_jxg4iu.png"
          }
          alt="mascot"
          width={500}
          height={175}
        />
      </div>
      <div className="absolute bottom-71 right-[26%] hidden md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect3_h6gjvc.png"
          }
          alt="mascot"
          width={350}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 right-0   md:bottom-20 md:right-0  md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect4_nmwu5q.png"
          }
          alt="mascot"
          width={500}
          height={175}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/mascot_to157e.png"
          }
          alt="mascot"
          width={350}
          height={350}
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-10 md:bottom-12 md:left-16  ">
        <LeftDots />
      </div>
      <div className="absolute  top-[15%] right-2 p-2 md:p-0 md:bottom-[65%] md:right-25  ">
        <RightDots />
      </div>
    </div>
  );
};

export default HeroLander;

function Dots() {
  return (
    <div className="md:h-2 md:w-2 h-1.5 w-1.5 rounded-full bg-white"></div>
  );
}

function LeftDots() {
  return (
    <div className="grid w-12 grid-cols-3 gap-x-5 gap-y-3">
      {Array.from({ length: 18 }).map((_, index) => (
        <Dots key={index} />
      ))}
    </div>
  );
}

function RightDots() {
  return (
    <div className="grid w-12 grid-cols-5 gap-x-6 gap-y-3">
      {Array.from({ length: 18 }).map((_, index) => (
        <Dots key={index} />
      ))}
    </div>
  );
}
