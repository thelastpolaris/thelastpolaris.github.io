import React from 'react';
import { ProjectItem } from '../types';
import ProjectCard from './ProjectCard';

const projects: ProjectItem[] = [
  {
    title: 'Doodocs – Система документооборота',
    description: 'Выступил в роли founding product manager, отвечая за запуск и развитие первой AI-системы документооборота в Казахстане от идеи до первых 1000 корпоративных клиентов.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop',
    tags: ['Founding PM', 'AI/ML', 'SaaS', 'B2B']
  },
  {
    title: 'Alem School – IT Школа',
    description: 'Запускал "бассейны" (отборочные интенсивы) и проводил онлайн-чемпионаты по программированию, управляя процессами отбора и вовлечения студентов.',
    imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=870&auto=format&fit=crop',
    tags: ['Project Management', 'EdTech', 'Community Building']
  },
  {
    title: 'Google Summer of Code (2016, 2019)',
    description: 'Дважды участвовал в престижной международной программе Google, работая над open-source проектами и внося вклад в глобальные IT-решения.',
    imageUrl: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=870&auto=format&fit=crop',
    tags: ['Open Source', 'Software Development', 'Global Teams']
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Портфолио проектов</h2>
        <div className="w-24 h-1 bg-gray-800 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;