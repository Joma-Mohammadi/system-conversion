import engineerImage from "../image/engineer-working.jpg";
import { FiCheck } from "react-icons/fi";

function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-24 sm:py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <p className="text-orange-500 text-sm font-semibold mb-4 tracking-wide">
              WHY CHOOSE US
            </p>

            <h2 className=" lg:text-2xl font-bold text-slate-900 leading-tight mb-6">
              Reliable System Conversion Experts – <br />
              24 Hours a Day
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Your boiler is the heart of your home. When it stops working, you need
              immediate help. Our Gas Safe certified engineers specialize in system
              conversions, replacing outdated water tanks and cylinders with modern,
              efficient combi boilers.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We handle the entire process professionally — from safe removal and
              disposal to professional installation and testing — leaving you with
              a cleaner, more efficient setup.
            </p>

            {/* FEATURES LIST */}
            <ul className="space-y-5 mb-8">
              {[
                "Gas Safe registered engineers with 10+ years of experience",
                "Arrive on time, fully equipped with modern tools and parts",
                "Same day or next day repair service",
                "Clear pricing — no hidden fees",
                "Free site surveys and quotes",
                "100% satisfaction guaranteed on every conversion",
                "Environmentally responsible disposal of old equipment",
                "Comprehensive warranty on all work completed",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <FiCheck className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <a
            href="tel:07852121346"
             className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md text-white font-semibold shadow-md">
              Book Now
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative order-1 lg:order-2">

            <img
              src={engineerImage}
              alt="Engineer Working"
              className="rounded-xl shadow-xl"
            />

            {/* 24/7 Badge */}
            <div className="absolute top-6 right-6 bg-slate-900 text-white px-5 py-2 rounded-lg shadow-lg font-bold">
              24/7
            </div>

            {/* 1000+ Box */}
            <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg">
              <p className="text-xl font-bold">1000+</p>
              <p className="text-sm">Happy Customers</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
