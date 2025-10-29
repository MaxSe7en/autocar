import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
// src/App.tsx
import Header from './components/layout/Header';
import FeaturesSection from './components/features/FeaturesSection';
import BusinessSection from './components/business/BusinessSection';
import SignUpForm from './components/auth/SignupForm';

export default function App() {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Auth Form */}
          <div>
            {/* Tab Switcher */}
            <div className="bg-gray-100 rounded-lg p-1 mb-6 inline-flex">
              <button
                onClick={() => setActiveTab('login')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'login'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'signup'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            {activeTab === 'signup' ? (
              <SignUpForm />
            ) : (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-center text-gray-600">Login form coming soon...</p>
              </div>
            )}
          </div>

          {/* Right Column - Features & Business */}
          <div>
            <FeaturesSection />
            <BusinessSection />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-gray-500">
          © 2025 AutoShop. All rights reserved.
        </footer>
      </div>
    </div>
  );
}