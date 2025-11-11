import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Package, Pencil, Download, Search } from "lucide-react";

// 1. Mock Template Data
// Note: Changed template structure to support filtering
const INITIAL_TEMPLATES = [
  { id: 1, title: "Elegant Floral Invite", category: "Wedding", description: "Classic and romantic design, perfect for formal events." },
  { id: 2, title: "Superhero Birthday Bash", category: "Birthday", description: "Fun, dynamic design for kids parties and theme events." },
  { id: 3, title: "Watercolor Baby Shower", category: "Baby & Kids", description: "Adorable blue/pink design for gender reveals or shower invitations." },
  { id: 4, title: "Modern Cocktail Night", category: "Party", description: "Stylish and chic template for adult evening events." },
  { id: 5, title: "Vintage Save The Date", category: "Wedding", description: "Rustic, minimalist theme with vintage typography." },
  { id: 6, title: "Sweet Sixteen Banner", category: "Birthday", description: "Glittering and vibrant design for milestones." },
  { id: 7, title: "Gender Reveal Balloon", category: "Baby & Kids", description: "Simple 'He or She' themed design." },
  { id: 8, title: "Holiday Office Party", category: "Party", description: "Professional and festive corporate event invite." },
  { id: 9, title: "Gothic Halloween Rave", category: "Party", description: "Dark and dramatic invitation for a themed event." },
  { id: 10, title: "Minimalist Graduation", category: "Party", description: "Clean design for academic ceremonies." },
];

const CATEGORY_COLORS = {
  "Wedding": "bg-pink-100 text-pink-700 hover:bg-pink-200",
  "Birthday": "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  "Baby & Kids": "bg-blue-100 text-blue-700 hover:bg-blue-200",
  "Party": "bg-purple-100 text-purple-700 hover:bg-purple-200",
};

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => ["All", ...new Set(INITIAL_TEMPLATES.map(t => t.category))], []);

  // 2. Filter Logic
  const filteredTemplates = useMemo(() => {
    return INITIAL_TEMPLATES.filter(template => {
      // 2a. Filter by Category
      const categoryMatch = activeCategory === "All" || template.category === activeCategory;

      // 2b. Filter by Search Term (Title or Description)
      const lowerSearchTerm = searchTerm.toLowerCase();
      const searchMatch = template.title.toLowerCase().includes(lowerSearchTerm) || 
                          template.description.toLowerCase().includes(lowerSearchTerm);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white py-32 px-6 text-center rounded-b-[40px] relative overflow-hidden shadow-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Create Beautiful E-Invitations Instantly
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light">
          Weddings, Birthdays, Baby Showers & More – Send Invitations in Seconds
        </p>
        <div className="space-x-4">
          <Link
            to="/invitation"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-2xl hover:bg-gray-100 transition transform hover:scale-105"
          >
            Browse Templates
          </Link>
          <Link
            to="/rsvp"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition transform hover:scale-105"
          >
            RSVP Now
          </Link>
        </div>
        {/* Decorative Shapes */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      </section>
      
      {/* --- Featured Templates (Filterable) --- */}
      <section className="px-6 md:px-24">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
          Popular Templates
        </h2>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-6 md:space-y-0">
          
          {/* Search Input */}
          <div className="relative w-full md:w-1/3 max-w-lg">
            <input
              type="text"
              placeholder="Search templates by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-full focus:border-purple-500 focus:ring-purple-500 outline-none transition duration-150 shadow-md"
            />
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Category Filter Buttons (Pill Shape) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const baseClasses = "px-6 py-3 rounded-full font-medium transition duration-300 shadow-lg transform hover:scale-105 cursor-pointer";
              let colorClasses = "";

              if (category === "All") {
                colorClasses = isActive 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300";
              } else {
                colorClasses = isActive
                  ? `${CATEGORY_COLORS[category].replace('hover:bg', 'bg').replace('text', 'border')} border-2 border-current font-bold` // Use current color as border for active state
                  : `${CATEGORY_COLORS[category]} text-gray-800`;
              }

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`${baseClasses} ${colorClasses}`}
                >
                  {category === "All" ? "Show All" : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer aspect-[3/4]"
              >
                {/* Image */}
                <img
                  src={`https://source.unsplash.com/400x533/?invitation,card,${template.category},${template.id}`}
                  alt={`Template: ${template.title}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x533/EAEAEA/808080?text=Template+Image"; }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  
                  {/* Category Tag */}
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2 ${CATEGORY_COLORS[template.category].replace('text', 'text-white').replace('hover:bg', 'bg')}`}>
                    {template.category}
                  </span>

                  {/* Title and Description */}
                  <h3 className="font-bold text-xl text-white mb-1">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {template.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="md:col-span-4 text-center py-16 text-gray-500 text-lg">
              No templates found matching your criteria. Try adjusting your search or filter.
            </div>
          )}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Link
            to="/invitation"
            className="inline-block bg-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition"
          >
            See More Templates
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6 md:px-24 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-purple-500 text-5xl mb-4 flex items-center justify-center">
              <Package size={50} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Choose Template</h3>
            <p className="text-gray-500">
              Select from a variety of pre-made designs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-purple-500 text-5xl mb-4 flex items-center justify-center">
              <Pencil size={50} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Customize</h3>
            <p className="text-gray-500">
              Edit text, images, and colors to match your event.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-purple-500 text-5xl mb-4 flex items-center justify-center">
              <Download size={50} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Send & Share</h3>
            <p className="text-gray-500">
              Share online invitations or Generate link.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16 text-center rounded-t-3xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Create Your Invitation?
        </h2>
        <Link
          to="/invitation"
          className="bg-white text-purple-600 px-10 py-3 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition transform hover:scale-105"
        >
          Start Now
        </Link>
      </section>
    </div>
  );
};

export default Home;