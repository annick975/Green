import React, { useState, useEffect } from "react";

const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("impact-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "100+",
      label: "Girls trained in basic coding, Arduino, and environmental tech",
    },
    { number: "3", label: "Schools engaged across Bugesera district" },
    {
      number: "200+",
      label: "Trees planted by our girls in climate-action campaigns",
    },
  ];

  return (
    <section
      id="impact-section"
      className="max-w-5xl mx-auto px-4 py-20 text-center"
    >
      {/* Section Header */}
      <div className="mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our Impact
        </h2>
        <div
          className={`w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>

      {/* Story Introduction */}
      <div className="space-y-8 mb-16 max-w-4xl mx-auto">
        <p
          className={`text-xl md:text-2xl text-gray-700 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          It started with just one workshop in a dusty classroom in Bugesera.
          Five girls, one laptop, and a story about how technology can change
          lives. From there, our movement began to grow—powered by passion,
          sisterhood, and a belief that{" "}
          <span className="font-semibold text-emerald-700">
            girls from rural Rwanda can build solutions for the planet.
          </span>
        </p>

        <p
          className={`text-lg text-gray-600 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Since then, we've:
        </p>
      </div>

      {/* Impact Statistics - No Cards */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-green-700">
                  {stat.number}
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
                {stat.label}
              </p>
              {/* Subtle separator line */}
              <div className="w-12 h-0.5 bg-emerald-300 mx-auto mt-4 opacity-60" />
            </div>
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div
        className={`max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xl text-gray-700 leading-relaxed">
          Every line of code, every seed planted, every girl's voice
          amplified—this is the power of our community.{" "}
          <span className="font-semibold text-emerald-700">
            And we're just getting started.
          </span>
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-1/4 top-1/2 w-2 h-2 bg-emerald-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute right-1/3 top-1/3 w-1 h-1 bg-green-400 rounded-full opacity-30 animate-bounce" />
    </section>
  );
};

export default Impact;
