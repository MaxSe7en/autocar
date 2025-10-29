// src/components/business/BusinessSection.jsx
const businesses = [
  {
    title: 'Auto Shops',
    description: 'Manage jobs, submit quotes, track repairs, get more customers',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'bg-purple-100 text-purple-700'
  },
  {
    title: 'Tow Drivers',
    description: 'Accept jobs on-demand, earn money, track earnings and ratings',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    color: 'bg-orange-100 text-orange-700'
  }
];

export default function BusinessSection() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">For Businesses</h2>
      
      <div className="space-y-4">
        {businesses.map((business, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className={`${business.color} p-3 rounded-xl`}>
                {business.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{business.title}</h3>
                <p className="text-sm text-gray-600">{business.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Trusted by <span className="font-semibold text-gray-700">1000+ Drivers</span>
        </p>
      </div>
    </div>
  );
}