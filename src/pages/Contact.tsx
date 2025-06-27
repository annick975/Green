import React from "react";

const Contact: React.FC = () => (
  <section className="max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-extrabold text-green-700 text-center mb-6">
      Contact Us
    </h2>

    <p className="text-center text-gray-700 text-lg mb-10">
      Want to volunteer, partner, or just say hello? We’d love to hear from you.
      Fill out the form below and we'll get back to you soon.
    </p>

    {/* Contact Form */}
    <form className="space-y-6">
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="text-left text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your full name"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-left text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-left text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Tell us how you'd like to contribute or what you'd like to know..."
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-block bg-green-600 text-white font-medium px-6 py-2 rounded-md shadow hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </div>
    </form>

    {/* Volunteer Info */}
    <div className="mt-12 text-center">
      <p className="text-gray-700">
        Or email us directly at{" "}
        <a
          href="mailto:girlsintechgreen@gmail.com"
          className="text-green-600 font-semibold hover:underline"
        >
          girlsintechgreen@gmail.com
        </a>
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Follow us on social media (coming soon)
      </p>
    </div>
  </section>
);

export default Contact;
