import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <Image
            width={200}
            height={200}
            src="https://i.postimg.cc/3NYY2hRP/innovatex-Og.png"
            alt="Sponsor 1"
            className="h-12 object-contain mx-auto"
          />
          <Image
            width={200}
            height={200}
            src="https://i.postimg.cc/3NYY2hRP/innovatex-Og.png"
            alt="Sponsor 2"
            className="h-12 object-contain mx-auto"
          />
          <Image
            width={200}
            height={200}
            src="https://i.postimg.cc/3NYY2hRP/innovatex-Og.png"
            alt="Sponsor 3"
            className="h-12 object-contain mx-auto"
          />
          <Image
            width={200}
            height={200}
            src="https://i.postimg.cc/3NYY2hRP/innovatex-Og.png"
            alt="Sponsor 4"
            className="h-12 object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
