export default function StatsSection() {
  const stats = [
    {
      number: "2,847",
      label: "Users",
      description: "Happy customers trusting our services",
      trend: "+12% this month"
    },
    {
      number: "154",
      label: "Shops",
      description: "Professional auto shops on our platform",
      trend: "+8 new shops"
    },
    {
      number: "89",
      label: "Drivers",
      description: "Certified tow and service drivers",
      trend: "+5 active drivers"
    }
  ];

  const trustedBy = [
    { name: "MechanicPro", logo: "🔧" },
    { name: "AutoCare+", logo: "🚗" },
    { name: "QuickFix", logo: "⚡" },
    { name: "ProGarage", logo: "🏢" },
    { name: "MobilMechanic", logo: "🛠️" }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Join the growing community of users, shops, and drivers who trust AutoShop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition-all duration-300 border border-gray-700"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-2xl font-semibold text-white mb-3">
                {stat.label}
              </div>
              <p className="text-gray-300 mb-4">
                {stat.description}
              </p>
              <div className="inline-flex items-center space-x-1 bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm">
                <span>📈</span>
                <span>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300">
              Partnered with top automotive service providers
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {trustedBy.map((company, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center text-2xl mb-3 group-hover:bg-gray-600">
                  {company.logo}
                </div>
                <span className="text-gray-300 font-medium text-sm">
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-700 pt-8">
            <div>
              <div className="text-2xl font-bold text-blue-400">98%</div>
              <div className="text-gray-400 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">15min</div>
              <div className="text-gray-400 text-sm">Avg Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">4.9★</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Growing Community?
            </h3>
            <p className="text-blue-100 mb-6">
              Sign up today and experience the future of automotive services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started Free
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}