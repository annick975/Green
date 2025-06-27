import React, { useState } from "react";
import Modal from "../components/Modal";

const initiatives = [
  {
    title: "Workshops",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    desc: "Teaching Arduino and basic coding to spark creativity and problem-solving.",
    quote: "“I built my first robot!”",
    story:
      "Our workshops introduce girls to the world of technology, starting with the basics of coding and hands-on Arduino projects. Through teamwork and creativity, participants build their first electronic gadgets, gaining confidence and practical skills that inspire them to pursue STEM careers.",
  },
  {
    title: "Tree Planting & Cleanups",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    desc: "Organizing tree planting and community cleanups for a greener Rwanda.",
    quote: "“We planted 100 trees in one day!”",
    story:
      "We organize regular tree planting drives and community cleanups, empowering girls to take direct action for the environment. These events foster a sense of responsibility and community pride, while making a tangible impact on local ecosystems.",
  },
  {
    title: "Mentorship Circles",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
    desc: "Connecting girls to inspiring women in STEM for guidance and support.",
    quote: "“My mentor showed me what's possible.”",
    story:
      "Mentorship Circles connect girls with women leaders in STEM fields. Through regular meetings and open discussions, girls receive guidance, encouragement, and real-world advice, helping them envision and pursue their own paths in technology and science.",
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
