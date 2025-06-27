import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background with parallax effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <img
          src="/hero.jpeg"
          alt="African girls coding"
          className="w-full h-full object-cover opacity-40 transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
          }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-emerald-900/50" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(52, 211, 153, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-50" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce opacity-30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Subtitle badge */}
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
          <span className="text-emerald-200 text-sm font-medium tracking-wide">
            Youth-led • Rural Rwanda • Climate Action
          </span>
        </div>

        {/* Main heading with enhanced typography */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 mb-6 leading-tight tracking-tight transition-all duration-1200 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            textShadow: "0 0 40px rgba(52, 211, 153, 0.3)",
          }}
        >
          Girls in Tech
          <br />
          <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-green-300 bg-clip-text">
            & Green
          </span>
        </h1>

        {/* Enhanced description */}
        <p
          className={`text-xl md:text-2xl lg:text-3xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1200 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Empowering the next generation of{" "}
          <span className="font-semibold text-emerald-300">African girls</span>{" "}
          to code, build, and protect the planet through{" "}
          <span className="font-semibold text-green-300">
            innovative technology
          </span>
        </p>

        {/* Enhanced call-to-action buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1200 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/about"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg shadow-lg hover:shadow-emerald-500/25 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center">
              Our Mission
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>

          <a
            href="/contact"
            className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white border-2 border-emerald-400/50 font-bold text-lg shadow-lg hover:bg-emerald-400/20 hover:border-emerald-300 hover:shadow-emerald-400/25 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center">
              Get Involved
              <svg
                className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Impact stats */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1200 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "500+", label: "Girls Empowered" },
            { number: "50+", label: "Communities Reached" },
            { number: "100+", label: "Projects Built" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-400/20 hover:bg-white/10 hover:border-emerald-400/40 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-emerald-300 mb-2">
                {stat.number}
              </div>
              <div className="text-emerald-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center text-emerald-300">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Home;
