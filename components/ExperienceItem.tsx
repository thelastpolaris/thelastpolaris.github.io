import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceItemProps {
  item: ExperienceItem;
  isLeft: boolean;
}

const ExperienceItemComponent: React.FC<ExperienceItemProps> = ({ item, isLeft }) => {
  const timelineItemPosition = isLeft ? 'md:pr-12' : 'md:pl-12';
  
  return (
    <div className={`relative mb-8 flex md:justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      <div className={`z-10 absolute left-0 top-1 md:left-1/2 md:-ml-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-4 ring-gray-50`}>
      </div>
      <div className={`ml-10 md:ml-0 bg-white rounded-lg shadow-md p-6 md:w-5/12 ${timelineItemPosition}`}>
        <p className="text-gray-500 text-sm mb-1">{item.period}</p>
        <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
        <p className="text-md font-semibold text-gray-700 mb-3">{item.company}</p>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItemComponent;