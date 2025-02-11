const Features = () => {
    return (
      <section className="py-16 bg-gray-50 text-gray-900 text-center">
        <h2 className="text-4xl font-semibold">Why Tailwind v4?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Performance" 
              className="w-full h-64 object-cover rounded-md mb-6" 
            />
            <h3 className="text-3xl font-bold mb-4">Performance Boost</h3>
            <p className="mt-2 text-lg text-gray-700">Faster builds, zero-config setup.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Colors" 
              className="w-full h-64 object-cover rounded-md mb-6" 
            />
            <h3 className="text-3xl font-bold mb-4">New Color Formats</h3>
            <p className="mt-2 text-lg text-gray-700">Supports oklch() and color-mix().</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Utilities" 
              className="w-full h-64 object-cover rounded-md mb-6" 
            />
            <h3 className="text-3xl font-bold mb-4">Dynamic Utilities</h3>
            <p className="mt-2 text-lg text-gray-700">More flexibility with responsive styles.</p>
          </div>
        </div>
      </section>
    );
  };

export default Features;
