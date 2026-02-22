import { useState } from "react";
import { FiPlus} from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer same-day boiler repairs?",
      answer:
        "Yes, we provide same-day boiler repair services across West London. Our engineers arrive fully equipped to fix most issues on the spot.",
    },
    {
      question: "Are you Gas Safe registered?",
      answer:
        "Absolutely. All of our engineers are Gas Safe registered and fully qualified with over 10 years of experience.",
    },
    {
      question: "How long does a system conversion take?",
      answer:
        "Most system conversions take between 2–3 days depending on the property size and complexity.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover all West London boroughs including Ealing, Acton, Chiswick, Fulham, Hammersmith and more.",
    },
    {
      question: "Do you provide warranties?",
      answer:
        "Yes, all installations come with a comprehensive warranty for your peace of mind.",
    },
    {
      question: "What happens to my old tank and cylinder?",
      answer:
        "We safely remove and responsibly dispose of all old equipment as part of our service.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a63] mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Got questions? We’ve got answers. If you need more help, call us anytime.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-[#1e3a63] text-sm md:text-base">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <IoIosClose className="text-2xl text-orange-500" />
                ) : (
                  <FiPlus className="text-xl text-[#1e3a63]" />
                )}
              </div>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
