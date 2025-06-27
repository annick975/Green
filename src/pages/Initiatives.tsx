import React from 'react';

const initiatives = [
  {
    title: 'Workshops',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
    desc: 'Teaching Arduino and basic coding to spark creativity and problem-solving.',
    quote: '“I built my first robot!”',
  },
  {
    title: 'Tree Planting & Cleanups',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    desc: 'Organizing tree planting and community cleanups for a greener Rwanda.',
    quote: '“We planted 100 trees in one day!”',
  },
  {
    title: 'Mentorship Circles',
    img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
    desc: 'Connecting girls to inspiring women in STEM for guidance and support.',
    quote: '“My mentor showed me what\'s possible.”',
  },
];

const Initiatives: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Meta/SEO Head placeholder */}
      {/* <Head>...</Head> */}
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">Our Initiatives</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {initiatives.map((item) => (
          <div key={item.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.desc}</p>
              </div>
              <span className="italic text-coral-500 text-sm">{item.quote}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives; 