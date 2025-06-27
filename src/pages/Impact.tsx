import React from "react";

const Impact: React.FC = () => (
  <section className="max-w-4xl mx-auto px-4 py-16 text-center">
    <h2 className="text-3xl font-extrabold text-green-700 mb-6">Our Impact</h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-8">
      It started with just one workshop in a dusty classroom in Bugesera. Five
      girls, one laptop, and a story about how technology can change lives. From
      there, our movement began to grow—powered by passion, sisterhood, and a
      belief that **girls from rural Rwanda can build solutions for the
      planet.**
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mb-8">
      Since then, we’ve:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
      <div className="bg-green-50 rounded-xl p-6 shadow-sm">
        <p className="text-4xl font-bold text-green-600">100+</p>
        <p className="mt-2 text-sm text-gray-600">
          Girls trained in basic coding, Arduino, and environmental tech
        </p>
      </div>
      <div className="bg-green-50 rounded-xl p-6 shadow-sm">
        <p className="text-4xl font-bold text-green-600">3</p>
        <p className="mt-2 text-sm text-gray-600">
          Schools engaged across Bugesera district
        </p>
      </div>
      <div className="bg-green-50 rounded-xl p-6 shadow-sm">
        <p className="text-4xl font-bold text-green-600">200+</p>
        <p className="mt-2 text-sm text-gray-600">
          Trees planted by our girls in climate-action campaigns
        </p>
      </div>
    </div>

    <p className="text-gray-700 text-lg leading-relaxed">
      Every line of code, every seed planted, every girl's voice amplified—this
      is the power of our community. And we’re just getting started.
    </p>
  </section>
);

export default Impact;
