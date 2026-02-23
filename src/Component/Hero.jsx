import bgImage from "../image/boiler.png";
import { IoSettings } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";
import { RiLayoutGrid2Line } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-screen flex items-center sm:py-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#162f4f]/95 via-[#162f4f]/95 to-transparent" />

      <div className="relative z-10 w-full">
        <div className=" max-w-[800px] ml-[6%] sm:ml-[10%]  md:ml-[12%]  lg:ml-[15%] px-4  sm:px-0  text-white ">
          <span className="flex w-fit gap-2 backdrop-blur-sm bg-orange-400/20 items-center  text-orange-500 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <IoSettings className="text-sm" />
            SYSTEM CONVERSION
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold leading-snug md:leading-tight mb-6">
            System Conversion & Water Tank Removal in{" "}
            <span className="text-orange-500">West London</span>
          </h1>

          <p
            className="text-gray-300 sm:text-[15px] md:text-base  
               text-sm  leading-relaxed mb-8 max-w-[520px] justify-start"
          >
            Upgrade to a modern combi system and reclaim your storage space. Gas
            Safe registered engineers available 24/7 for system conversions,
            water tank removal, and cylinder upgrades. Fixed pricing,
            professional service.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm mb-8">
            <div className="flex items-center gap-2">
              <MdOutlineShield className="text-orange-500 text-base" />
              Gas Safe Certified Conversion Specialists
            </div>

            <div className="flex items-center gap-2">
              <RiLayoutGrid2Line className="text-orange-500 text-base" />
              Free Up Valuable Storage Space
            </div>
          </div>

          <a
            href="tel:07852121346"
            className="inline-flex  items-center justify-center sm:justify-start gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md text-sm sm:text-base font-semibold"
          >
            <BsFillTelephoneFill className="text-lg" />
            Call 07852 121 346
          </a>

          <p className="text-gray-400 text-xs sm:text-sm mt-6">
            Free surveys and quotes — Average project completion 2-3 days
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
