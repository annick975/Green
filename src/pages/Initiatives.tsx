import React, { useState } from "react";
import Modal from "../components/Modal";

const initiatives = [
  {
    title: "Code for Climate Workshops",
    img: "./code.png",
    desc: "Teaching girls to code and build tech that responds to real-world climate challenges.",
    quote: "“I built my first robot!” — Clarisse, 15",
    story:
      "In one workshop, girls used Arduino kits to build a basic humidity sensor that could help monitor soil moisture. Clarisse couldn’t stop smiling when her code worked. For most, it was the first time they touched a circuit board — and the first spark of a future in tech.",
  },
  {
    title: "Tree Planting & Cleanups",
    img: "/imbuto.jpeg",
    desc: "Restoring green spaces through hands-on environmental action.",
    quote: "“We planted 100 trees in one day!” — Aline, 14",
    story:
      "Our girls teamed up with local leaders in Bugesera to clean up riverbanks and plant indigenous trees. Aline led a group that planted over 100 saplings near her school. These cleanups spark community pride and reinforce that girls are not just future leaders—they're leaders now.",
  },
  {
    title: "Mentorship Circles",
    img: "./mentor.jpeg",
    desc: "Connecting girls to role models in STEM to grow their confidence and vision.",
    quote: "“My mentor showed me what's possible.” — Kevine, 16",
    story:
      "Every month, our Mentorship Circles pair participants with Rwandan women in tech. Kevine met her mentor through our first pilot—and is now planning to study electrical engineering. These circles are safe spaces to ask questions, dream bigger, and build real-world connections.",
  },
  {
    title: "Girls Hack Days",
    img: "./hackdays.png",
    desc: "1-day mini hackathons where girls collaborate to build tech for social good.",
    quote: "“We made a water filter alert system!” — Diane, 17",
    story:
      "Our first Hack Day brought together 20 girls with one challenge: design a tech-based solution for clean water access. Diane's team created a basic alert system that detects when a homemade water filter needs cleaning. These events turn learning into leadership—fast.",
  },
  {
    title: "Community Cleanups + Environmental Talks",
    img: "./talks.jpeg",
    desc: "Using tech tools to support sustainability awareness in local communities.",
    quote: "“Now my whole village knows how to reuse plastic.” — Nadine, 13",
    story:
      "The girls designed posters using Canva and basic design tools to educate their communities on climate waste, recycling, and water conservation. Nadine stood up in her village church to give a talk using the slides she made herself. These aren’t just cleanups—they’re campaigns.",
  },
  {
    title: "School Club Launches",
    img: "./club.jpeg",
    desc: "Sustainable impact through student-led Girls in Tech & Green clubs.",
    quote: "“We run our own tech events now!” — Joëlle, 14",
    story:
      "We’re helping girls start their own clubs in secondary schools across Bugesera. Joëlle’s team now hosts weekly meetups where they test sensors, brainstorm climate projects, and even write blogs. These clubs are micro-hubs of innovation, built to last beyond our visits.",
  },
];


const Initiatives: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Meta/SEO Head placeholder */}
      {/* <Head>...</Head> */}
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Our Initiatives
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {initiatives.map((item, idx) => (
          <button
            key={item.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-left hover:shadow-2xl transition-shadow focus:outline-none"
            onClick={() => setOpenIndex(idx)}
            tabIndex={0}
            aria-label={`Read more about ${item.title}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.desc}</p>
              </div>
              <span className="italic text-coral-500 text-sm">
                {item.quote}
              </span>
            </div>
          </button>
        ))}
      </div>
      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title={openIndex !== null ? initiatives[openIndex].title : ""}
      >
        {openIndex !== null && (
          <>
            <img
              src={initiatives[openIndex].img}
              alt={initiatives[openIndex].title}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <p className="mb-2 text-gray-800">{initiatives[openIndex].story}</p>
            <span className="block italic text-coral-500 text-sm mt-2">
              {initiatives[openIndex].quote}
            </span>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Initiatives;
