const CTA = () => {
    return (
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Transform Your
                <span className="block mt-2">Web Development Journey?</span>
              </h2>
              <p className="text-lg lg:text-xl text-indigo-100 max-w-2xl">
                Join thousands of developers who are already using our tools to build amazing websites. Get started today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 ease-in-out">
                  Get Started Free
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transform hover:-translate-y-0.5 transition duration-300 ease-in-out">
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 text-center lg:text-left">
                <p className="text-indigo-100 mb-4">Trusted by developers from</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">G</span>
                    </div>
                    <span className="ml-2">Google</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">M</span>
                    </div>
                    <span className="ml-2">Meta</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">A</span>
                    </div>
                    <span className="ml-2">Adobe</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="CTA" 
                  className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto rounded-full shadow-2xl object-cover transform hover:scale-105 transition duration-300 ease-in-out" 
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-indigo-100">Active Users</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-indigo-100">Components</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-indigo-100">Satisfaction</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default CTA;
