function CTASection() {
  return (
    <section className="bg-[#1e3a63] text-white py-20 text-center px-6">
      <p className="text-orange-400 text-xs tracking-widest mb-3 font-semibold">
        GET IN TOUCH
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Need a System Conversion in West London?
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
        Don’t wait for an old system to fail. Get in touch today for a
        no-obligation quote on your system conversion. Our team is ready to
        answer all your questions and provide a free site survey.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold shadow-md">
          Get a Free Quote
        </button>

        <button className="bg-white text-[#1e3a63] hover:bg-gray-200 transition px-6 py-3 rounded-md font-semibold">
          Send Message
        </button>
      </div>
    </section>
  );
}

export default CTASection;
