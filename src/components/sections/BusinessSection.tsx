export default function BusinessSection() {
  const businessTypes = [
    {
      title: "Auto Shops",
      description: "Manage jobs, submit quotes, track results, get more customers",
      features: [
        "Job management dashboard",
        "Quote submission system",
        "Real-time result tracking",
        "Customer acquisition tools"
      ],
      icon: "🏪"
    },
    {
      title: "Tow Drivers",
      description: "Accept jobs on demand, earn money, track earnings and ratings",
      features: [
        "On-demand job requests",
        "Earnings tracking",
        "Rating system",
        "Route optimization"
      ],
      icon: "🚛"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            For Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our platform and grow your automotive service business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {businessTypes.map((business, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{business.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {business.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {business.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {business.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Join as {business.title}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <span className="text-green-600 font-semibold">
              🚀 Start earning today!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}