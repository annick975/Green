import React from "react";

const Home: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
      {/* Background image with subtle overlay */}
      <img
        src="/hero.jpeg"
        alt="African girls coding"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
          <span className="text-emerald-200 text-sm font-medium">
            Youth-led • Rural Rwanda • Climate Action
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 mb-6 leading-tight">
          Girls in Tech
          <br />& Green
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-emerald-100 mb-10 font-light max-w-xl mx-auto">
          Empowering{" "}
          <span className="font-semibold text-emerald-300">African girls</span>{" "}
          to code, create, and lead climate solutions through{" "}
          <span className="font-semibold text-green-300">technology</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition"
          >
            Our Mission
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full border border-emerald-300 text-emerald-200 font-semibold hover:bg-emerald-500/20 transition"
          >
            Get Involved
          </a>
        </div>

        {/* Optional Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { number: "500+", label: "Girls Empowered" },
            { number: "50+", label: "Communities Reached" },
            { number: "100+", label: "Projects Built" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-emerald-300">
                {stat.number}
              </div>
              <div className="text-sm text-emerald-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
