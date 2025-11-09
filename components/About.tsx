import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Обо мне</h2>
        <div className="w-24 h-1 bg-gray-800 mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed space-y-6">
          <p>
            Привет! Я Артем, Product Manager из Астаны с сильным техническим бэкграундом. Моя страсть — превращать сложные идеи в успешные и полезные продукты. Я специализируюсь на управлении полным жизненным циклом продукта: от исследования и концепции до запуска и масштабирования.
          </p>
          <p>
            Особое внимание я уделяю проектам в области искусственного интеллекта. Я верю, что AI технологии могут кардинально улучшить жизнь людей и бизнес-процессы. В Doodocs я работаю над созданием AI-решений, которые помогают нашим клиентам достигать новых высот.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
