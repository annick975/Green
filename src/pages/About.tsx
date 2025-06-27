import React from "react";

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Meta/SEO Head placeholder */}
      {/* <Head>...</Head> */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
          alt="Girls learning tech in Rwanda"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover mb-6 md:mb-0"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Our Mission
          </h2>
          <p className="mb-4 text-lg text-gray-800">
            We teach girls in rural Rwanda how to use technology for
            sustainability, climate action, and community problem-solving. Our
            mission is to promote gender equity in STEM and empower the next
            generation of climate leaders.
          </p>
          <h3 className="text-2xl font-semibold text-green-600 mt-8 mb-2">
            Meet the Founder
          </h3>
          <p className="text-gray-700">
            <strong>Niyubahwe Uwacu Annick</strong>, student at Rwanda Coding
            Academy, founded Girls in Tech & Green to bridge the gender gap in
            STEM and inspire girls to use tech for good. Her story is one of
            passion, resilience, and hope for a greener, more equitable future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
