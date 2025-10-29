import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AutoShop</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Smart Car Care at Your Doorstep
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center bg-blue-500 px-4 py-2 rounded-full">
            <span className="text-sm">2/17 Roadside Help</span>
          </div>
          <div className="flex items-center bg-green-500 px-4 py-2 rounded-full">
            <span className="text-sm">Parts Marketplace</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="secondary">Login</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </section>
  );
}