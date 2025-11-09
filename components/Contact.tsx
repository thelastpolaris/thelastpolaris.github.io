import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';
import MailIcon from './icons/MailIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          Я всегда открыт для новых проектов, интересных идей и сотрудничества. Заполните форму ниже или используйте ссылки для связи.
        </p>

        {/* Google Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdxQ2Kp9RT9OWyElD7nOcKT1OVgIiUiJwhU-x6mr7OO1e6Rhw/viewform?embedded=true"
            width="100%"
            height="689"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Форма для связи"
            style={{ display: 'block' }}
          >
            Загрузка…
          </iframe>
        </div>

        <div className="mt-16">
          <p className="text-gray-400 mb-6">Или свяжитесь со мной напрямую:</p>
          <div className="flex justify-center items-center space-x-8">
            <a href="mailto:afedoskin3@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Написать на почту">
              <MailIcon className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/artem-fedoskin-9ab0aaa1/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Профиль LinkedIn">
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a href="https://github.com/thelastpolaris" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Профиль Github">
              <GithubIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;