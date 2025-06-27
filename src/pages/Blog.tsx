import React from "react";

const Blog: React.FC = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-extrabold text-green-700 text-center mb-8">
      Gallery & Blog
    </h2>

    {/* Introduction Text */}
    <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
      From workshops in village schools to tree-planting and tech discovery
      moments — our girls are building a movement. Here's a glimpse into the
      stories we're writing together.
    </p>

    {/* Placeholder Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-full h-64 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-500"
        >
          Image Placeholder {i + 1}
        </div>
      ))}
    </div>

    {/* Blog Post Previews */}
    <div className="grid gap-8 md:grid-cols-2">
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          How We Taught Girls to Code with One Arduino Kit
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A hands-on workshop where we turned a single Arduino into a learning
          moment for 15 girls. Here's how we did it...
        </p>
        <button className="text-sm text-green-700 font-semibold hover:underline">
          Read more
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          Why Tech is a Tool for Climate Justice
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Coding isn’t just about building apps — it’s about building futures.
          Here’s why we believe every girl should learn to code for climate.
        </p>
        <button className="text-sm text-green-700 font-semibold hover:underline">
          Read more
        </button>
      </div>
    </div>
  </section>
);

export default Blog;
