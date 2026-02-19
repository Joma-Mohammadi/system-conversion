import TestimonialCard from "./TestimonialCard";
import { FaStar } from "react-icons/fa";

function TestimonialsSection() {

  const testimonials = [
    {
      review:
        "Excellent service from start to finish. They removed our old tank system and installed a new combi boiler in just two days.",
      name: "Sarah Johnson",
      location: "Ealing, West London",
      initials: "SJ",
      rating: 5,
    },
    {
      review:
        "Had an emergency leak from our old tank. The team assessed everything and started the conversion immediately.",
      name: "Michael Peters",
      location: "Hammersmith, West London",
      initials: "MP",
      rating: 5,
    },
    {
      review:
        "Very impressed with the quality of work. The engineer explained everything clearly and completed the job on time.",
      name: "Rachel Kumar",
      location: "Chiswick, West London",
      initials: "RK",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">
            What Our West London Customers Say
          </h2>
          <p className="text-gray-600 text-sm">
            Don’t just take our word for it. Read real reviews from homeowners who choose our service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>

        {/* Bottom Rating */}
        <div className="mt-16 bg-gray-200 rounded-xl py-8 text-center">
          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-orange-400 text-lg" />
            ))}
          </div>
          <p className="text-sm text-gray-700">
            4.9/5 rating on 300+ reviews
          </p>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
