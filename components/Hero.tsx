import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-transparent py-20 md:py-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left side: Text content */}
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Артем Федоскин
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Product Manager | Астана
            </p>
            <div className="max-w-xl mx-auto md:mx-0">
              <p className="text-lg text-gray-600">
                PM с бэкграундом в программировании, создаю инновационные продукты и AI проекты в <span className="font-semibold">Doodocs</span>.
              </p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-gray-800 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-lg"
              >
                Связаться со мной
              </a>
              <a
                href="https://drive.google.com/file/d/1QPs-7jENLy3h-dv5gd3vy0VG9LFc4D8n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-800 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-200"
              >
                Скачать резюме
              </a>
            </div>
          </div>
          {/* Right side: Image */}
          <div className="md:w-2/5">
            <img
              src="https://i.ibb.co.com/ZpxqcDzK/photo-2025-10-03-23-41-57.jpg"
              alt="Артем Федоскин"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl mx-auto ring-4 ring-white/70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;