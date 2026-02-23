import { FiZap } from "react-icons/fi";
import { RiLayoutGrid2Line } from "react-icons/ri";
import { IoSunnyOutline } from "react-icons/io5";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";

function Features() {
  return (
    <section className="bg-gray-100 py-20 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-center">
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <FiZap className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">
              Improved Energy Efficiency
            </h3>l
            <p className="text-sm text-gray-500 mt-2">
              Lower bills with modern heating
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <RiLayoutGrid2Line className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">Free Up Space</h3>
            <p className="text-sm text-gray-500 mt-2">
              Reclaim loft or airing cupboard
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <IoSunnyOutline className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">
              Professional Installation
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Gas Safe certified experts
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <FiCheckSquare className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">
              System Fully Tested
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Guaranteed safe operation
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <FaRegClock className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">Minimal Disruption</h3>
            <p className="text-sm text-gray-500 mt-2">
              Quick professional service
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <LuDollarSign className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">Fixed Pricing</h3>
            <p className="text-sm text-gray-500 mt-2">
              No hidden costs
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;