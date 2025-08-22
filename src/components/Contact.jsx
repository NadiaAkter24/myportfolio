import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen p-6 bg-gray-900 text-gray-200 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-purple-400">Contact Me</h2>

      <div className="text-center space-y-4 mb-8">
        <p className="text-xl">
          Email:{" "}
          <a
            href="mailto:nadia780akter@gmail.com"
            className="text-purple-400 hover:text-purple-200 underline"
          >
            nadia780akter@gmail.com
          </a>
        </p>
        <p className="text-xl">
          Phone:{" "}
          <a
            href="tel:+14374221810"
            className="text-purple-400 hover:text-purple-200 underline"
          >
            +1 437-422-1810
          </a>
        </p>
        <p className="text-xl">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/nadia-akter8692142a3/"
            target="_blank"
            className="text-purple-400 hover:text-purple-200 underline"
          >
            linkedin.com/in/nadia-akter8692142a3
          </a>
        </p>
        <p className="text-xl">
          GitHub:{" "}
          <a
            href="https://github.com/nadiaakter24"
            target="_blank"
            className="text-purple-400 hover:text-purple-200 underline"
          >
            github.com/nadiaakter24
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 rounded bg-gray-700 text-white"
            type="text"
            id="name"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 rounded bg-gray-700 text-white"
            type="email"
            id="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 rounded bg-gray-700 text-white"
            id="message"
            placeholder="Your message"
            rows="5"
          ></textarea>
        </div>
        <button
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
