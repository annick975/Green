import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* About Section */}
      <section
        className={`max-w-6xl mx-auto px-4 py-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/5 relative">
            <img
              src="/hero.jpeg"
              alt="Girls learning tech in Rwanda"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-2xl" />
          </div>

          <div className="lg:w-3/5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full" />
              <p className="text-xl text-gray-700 leading-relaxed">
                Girls in Tech & Green is a youth-led initiative rooted in rural
                Rwanda. We believe that girls—when equipped with the right
                tools—can build solutions to fight climate change, bridge the
                gender gap in tech, and transform their communities.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-emerald-700">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower girls in underserved communities through tech
                education and climate action. We teach coding, robotics, and
                environmental innovation to inspire a new generation of girls
                who lead with purpose and create change where it matters most.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-emerald-700">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A future where every girl has the skills and confidence to
                innovate, speak up, and build sustainable solutions. We dream of
                tech labs in every village school, trees planted by code, and
                girls leading green revolutions from the ground up.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-emerald-700">
                Our Story
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                It all began in a small school with one laptop, one Arduino kit,
                and a group of girls who had never seen code before. From that
                moment, the spark was lit. We started running workshops,
                planting trees, and hosting mini hackathons. What began as an
                idea has grown into a movement powered by sisterhood,
                innovation, and the belief that girls can—and should—lead the
                way toward a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
