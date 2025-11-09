import React from 'react';
import { ExperienceItem as ExperienceItemType } from '../types';
import ExperienceItem from './ExperienceItem';

const experiences: ExperienceItemType[] = [
  {
    role: 'Product Manager',
    company: 'Doodocs',
    period: '2022 - Настоящее время',
    description: 'Управление продуктовой стратегией и разработкой AI-решений для автоматизации документооборота. Проведение исследований рынка, определение требований к продукту и координация работы кросс-функциональных команд.',
    stack: ['Agile', 'Scrum', 'JIRA', 'Figma', 'AI/ML Concepts']
  },
  {
    role: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2019 - 2022',
    description: 'Разработка и поддержка веб-приложений с использованием современных фреймворков. Участвовал в полном цикле разработки, от проектирования архитектуры до развертывания.',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Опыт работы</h2>
        <div className="w-24 h-1 bg-gray-800 mx-auto mb-16"></div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-3 md:left-1/2 h-full w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
          {experiences.map((item, index) => (
            <ExperienceItem key={index} item={item} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;