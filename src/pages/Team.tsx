import React from "react";

const teamMembers = [
  {
    name: "Niyubahwe U. Annick",
    role: "Founder & Lead Organizer",
    image: "https://via.placeholder.com/150", // Replace with real or Unsplash image
    bio: "Tech for good believer. Leads the Girls in Tech & Green initiative with passion and vision.",
  },
  {
    name: "Placeholder Name",
    role: "Workshop Coordinator",
    image: "https://via.placeholder.com/150",
    bio: "Helps organize hands-on coding sessions and supports girls learning Arduino and environmental tech.",
  },
  {
    name: "Placeholder Name",
    role: "Outreach & Events",
    image: "https://via.placeholder.com/150",
    bio: "Connects with local schools and communities to grow our movement.",
  },
  {
    name: "Placeholder Name",
    role: "Media & Storytelling",
    image: "https://via.placeholder.com/150",
    bio: "Captures stories, runs the blog, and documents our impact through visuals and interviews.",
  },
];

const Team: React.FC = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-extrabold text-green-700 text-center mb-6">
      Meet the Team
    </h2>
    <p className="text-center text-gray-700 text-lg mb-12">
      We're a team of young Rwandan change-makers committed to building a future
      where girls lead in tech and sustainability.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white border border-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-green-700">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500">{member.role}</p>
          <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
