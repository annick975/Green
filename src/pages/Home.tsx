import React from "react";

const Home: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Unsplash image as background */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="African girls coding"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none -z-10"
      />
      {/* Meta/SEO Head placeholder */}
      {/* <Head>...</Head> */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-green-700 drop-shadow-lg mb-4 animate-fade-in">
        Girls in Tech & Green
      </h1>
      <p className="text-lg md:text-2xl text-gray-800 mb-8 max-w-2xl animate-fade-in delay-100">
        Empowering the next generation of African girls to code, build, and
        protect the planet.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
        <a
          href="/about"
          className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
        >
          Our Mission
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-white text-green-700 border border-green-600 font-semibold shadow hover:bg-green-50 transition"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
};

export default Home;
