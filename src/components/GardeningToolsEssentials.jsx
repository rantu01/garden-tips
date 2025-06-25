import { Link } from "react-router";

const GardeningToolsEssentials = () => {
  const tools = [
    {
      name: "Pruning Shears",
      description:
        "Professional-grade precision for trimming and shaping plants. Ergonomic design reduces hand fatigue during prolonged use.",
      icon: "✂️",
      highlight: "Precision-cut blades",
    },
    {
      name: "Garden Gloves",
      description:
        "Premium breathable material with reinforced fingertips. Offers superior protection while maintaining tactile sensitivity.",
      icon: "🧤",
      highlight: "Reinforced fingertips",
    },
    {
      name: "Watering Can",
      description:
        "Galvanized steel construction with balanced ergonomics. Rose attachment provides gentle shower for delicate seedlings.",
      icon: "💧",
      highlight: "Ergonomic balance",
    },
    {
      name: "Trowel",
      description:
        "Stainless steel head with comfortable grip handle. Perfect for precise digging and transplanting in tight spaces.",
      icon: "🛠️",
      highlight: "Stainless steel head",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-green-900 dark:via-green-800 dark:to-green-950 py-20 px-6 md:px-12 lg:px-24 rounded-3xl shadow-2xl max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Professional Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-900 dark:text-green-100">
            <span className="inline-block mr-3 animate-wiggle">🌿</span>
            Essential Gardening Tools
            <span className="inline-block ml-3 animate-wiggle delay-100">
              🌱
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-green-300">
            Premium quality tools designed for both amateur enthusiasts and
            professional horticulturists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-green-900/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100 dark:border-green-800 overflow-hidden"
              role="region"
              aria-label={tool.name}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-green-800/30 dark:to-green-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-green-800 dark:text-green-100">
                  {tool.name}
                </h3>
                <p className="text-gray-700 dark:text-green-200 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex items-center mt-4">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    {tool.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Link to="/">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-green-900">
              Explore Full Collection
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default GardeningToolsEssentials;
