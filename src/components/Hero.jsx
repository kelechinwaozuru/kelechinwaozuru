import React from "react";

const Hero = () => {
  return (
    <section className=" text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Kelechi Nwaozuru
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Aspiring Governance Risk and Complanince(GRC) Analyst. Security and
          Risk Management
        </p>
        <div className="flex justify-center items-center flex-wrap gap-10 md:p-12 p-6">
          <a
            href="#services"
            className="bg-green-500 text-white py-3 px-6 font-semibold rounded-md text-lg hover:bg-transparent hover:border w-full md:w-[250px]"
          >
            Explore Services
          </a>
          <a
            href="https://kelechinwaozuru.medium.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-transparent text-green-500 border py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-500 hover:border-none hover:text-white w-full md:w-[250px]"
          >
            Read articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
