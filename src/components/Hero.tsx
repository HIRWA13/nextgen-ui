const Hero = () => {
    return (
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400 opacity-10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center lg:text-left text-white">
              <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="ml-2 text-sm font-medium tracking-wide">Now with Tailwind v4</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                    Welcome to
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-100 animate-gradient">
                      NextGen UI
                    </span>
                  </h1>

                  <p className="text-xl sm:text-2xl text-purple-100/90 leading-relaxed max-w-xl">
                    Build beautiful, responsive websites faster than ever with our modern web features
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                  <button className="group px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 ease-in-out">
                    <span className="flex items-center justify-center">
                      Get Started Free
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transform hover:-translate-y-0.5 transition duration-300 ease-in-out">
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                      </svg>
                      Watch Demo
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-12">
                  {[
                    { value: '10k+', label: 'Downloads' },
                    { value: '95%', label: 'Satisfaction' },
                    { value: '5k+', label: 'Reviews' }
                  ].map((stat, index) => (
                    <div key={index} className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-purple-200/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 relative lg:ml-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl"></div>
            
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                  alt="Hero" 
                  className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-full shadow-2xl object-cover transform hover:scale-105 transition duration-300 ease-in-out ring-4 ring-white/20"
                />

                <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-150"></div>

                <div className="absolute -right-6 top-1/4 animate-float">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                      <span className="text-indigo-600 font-medium whitespace-nowrap">Modern Design</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-6 bottom-1/4 animate-float-delayed">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                      <span className="text-indigo-600 font-medium whitespace-nowrap">Responsive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Hero;
