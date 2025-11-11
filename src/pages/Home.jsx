import React from "react";
import { FaBoxOpen, FaPen, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-purple-400 via-green-600 to--400 text-white py-32 px-6 text-center rounded-b-3xl relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Create Beautiful E-Invitations Instantly
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Weddings, Birthdays, Baby Showers & More – Send Invitations in Seconds
        </p>
        <div className="space-x-4">
          <Link
            to="/invitation"
            className="bg-white text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Browse Templates
          </Link>
          <Link
            to="/rsvp"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-500 transition"
          >
            RSVP Now
          </Link>
        </div>
        {/* Decorative Shapes */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -z-10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full -z-10"></div>
      </section>

      {/* Categories Section */}
      <section className="px-6 md:px-24">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/invitation"
            className="bg-pink-100 rounded-lg p-6 text-center hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg mb-2">Wedding</h3>
            <p>Elegant & Romantic Templates</p>
          </Link>
          <Link
            to="/invitation"
            className="bg-yellow-100 rounded-lg p-6 text-center hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg mb-2">Birthday</h3>
            <p>Fun & Colorful Designs</p>
          </Link>
          <Link
            to="/invitation"
            className="bg-blue-100 rounded-lg p-6 text-center hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg mb-2">Baby & Kids</h3>
            <p>Adorable & Playful Templates</p>
          </Link>
          <Link
            to="/invitation"
            className="bg-purple-100 rounded-lg p-6 text-center hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg mb-2">Party</h3>
            <p>Modern & Stylish Templates</p>
          </Link>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="px-6 md:px-24">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Popular Templates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Template Cards */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={`https://source.unsplash.com/400x300/?invitation,card,${item}`}
                alt="Template"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Template {item}</h3>
                <p className="text-gray-500">Customize & Share Online</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6 md:px-24 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-purple-500 text-5xl mb-4 flex items-center justify-center">
              <FaBoxOpen />
            </div>
            <h3 className="font-semibold text-xl mb-2">Choose Template</h3>
            <p className="text-gray-500">
              Select from a variety of pre-made designs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-purple-500 text-5xl mb-4 flex items-center justify-center">
              <FaPen />
            </div>
            <h3 className="font-semibold text-xl mb-2">Customize</h3>
            <p className="text-gray-500">
              Edit text, images, and colors to match your event.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-purple-500 text-5xl mb-4 flex items-center justify-center">
              <FaFileDownload />
            </div>
            <h3 className="font-semibold text-xl mb-2">Send & Share</h3>
            <p className="text-gray-500">
              Share online invitations or Generate link.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-500 text-white py-16 text-center rounded-b-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Create Your Invitation?
        </h2>
        <Link
          to="/invitation"
          className="bg-white text-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Start Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
