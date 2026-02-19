import { FiRefreshCw } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { IoPulseOutline } from "react-icons/io5";
import { FiCheckSquare } from "react-icons/fi";
import ServiceCard from "./ServiceCard";

function ServicesSection() {

  const services = [
    {
      icon: <FiRefreshCw className="w-6 h-6 text-slate-700" />,
      title: "Full System Conversion",
      description:
        "Complete upgrade from conventional system to modern combi boiler with professional installation.",
      features: [
        "Boiler removal & install",
        "Tank & cylinder removal",
        "Pipework modifications",
        "System power flush",
      ],
    },
    {
      icon: <MdOutlineDelete className="w-6 h-6 text-slate-700" />,
      title: "Water Tank Removal",
      description:
        "Safe removal of cold water tanks and hot water cylinders, reclaiming valuable storage space.",
      features: [
        "Drain & disconnect safely",
        "Remove tanks & cylinders",
        "Cap off redundant pipes",
        "Space restoration",
      ],
    },
    {
      icon: <IoPulseOutline className="w-6 h-6 text-slate-700" />,
      title: "System Upgrades",
      description:
        "Modernize your existing heating system with energy-efficient components and smart controls.",
      features: [
        "Energy efficiency upgrades",
        "Smart thermostat install",
        "TRV valve replacement",
        "Pipe insulation",
      ],
    },
    {
      icon: <FiCheckSquare className="w-6 h-6 text-slate-700" />,
      title: "Testing & Certification",
      description:
        "Comprehensive testing and official certification for complete peace of mind and compliance.",
      features: [
        "Gas safety checks",
        "Pressure testing",
        "System commissioning",
        "Full documentation",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* serves section */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Complete System Conversion Services in West London
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            From system design to testing and certification, we handle every
            aspect of your heating system conversion. All work carried out by
            Gas Safe registered engineers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
