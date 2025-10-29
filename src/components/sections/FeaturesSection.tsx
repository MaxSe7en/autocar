export default function FeaturesSection() {
  const features = [
    {
      title: "AI-powered Diagnostics",
      description: "Get instant analysis using photos, videos, and OEM data"
    },
    {
      title: "24/7 Roadside Assistance",
      description: "Jump starts, tire changes, lockout, and fuel delivery"
    },
    {
      title: "Live Tracking",
      description: "Real-time tracking for tow trucks and repair progress"
    },
    {
      title: "Transparent Pricing",
      description: "Compare shops, get scanned quotes, approve before work starts"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose AutoShop?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}