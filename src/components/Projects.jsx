// components/Projects.jsx
import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Projects = () => {
  const { getBgClass, getTextClass, getSecondaryTextClass, getCardBgClass } = useGlobalContext();
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Static Shoes E-Commerce Website',
      description: 'Frontend show product (Shoes) for sale.',
      tech: ['HTML', 'Tailwind', 'Javascript'],
      demo: "https://nike-shoes-bice.vercel.app/",  
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/1200x/ed/58/f8/ed58f8d2f741c6d3aa4725996ebebad1.jpg',
      features: []
    },
    {
      id: 2,
      title: 'StaticClothes E-Commerce Website',
      description: 'Frontend show product (Clothes) for sale.',
      tech: ['HTML', 'Tailwind', 'Javascript'],
      demo: "https://leab-samchhay.github.io/E-commerce-website-sale-clothes/",  
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/1200x/1f/16/c6/1f16c64605f86bc33bdeec5f934dc24a.jpg',
      features: []
    },
    {
      id: 3,
      title: 'Static Phone & Computer E-Commerce Website',
      description: 'Frontend show product (Phone and Computer ) for sale.',
      tech: ['HTML', 'Tailwind', 'Reactjs'],
      demo: "https://tesreact-kappa.vercel.app/", // Changed from "Demo" to "demo" (lowercase)
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/736x/59/3d/a9/593da92a18d6b617bf6e556debbff061.jpg',
      features: []
    },
    {
      id: 4,
      title: 'Static Product Food E-Commerce Website',
      description: 'Frontend show product ( Food ) for sale.',
      tech: ['HTML', 'Tailwind', 'Reactjs'],
      demo: "https://restaurant-kh-ngld.vercel.app/", // Changed from "Demo" to "demo" (lowercase)
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/1200x/85/ce/e1/85cee14750e778f55332467dfa307f58.jpg',
      features: []
    },
    {
      id: 5,
      title: 'UX/UI Design',
      description: 'design web fronend phone & Computer for sale.',
      tech: ['Figma'],
      demo: "https://www.figma.com/design/X6Ew5Ge89avaP37jxl323i/Assigment_Final_Electronic?node-id=0-1&t=QfrKHWgZcH15cTMW-0", // Changed from "Demo" to "demo" (lowercase)
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/1200x/41/d4/73/41d473d91c0674dfe22e550578c17da7.jpg',
      features: []
    },
    // ... other projects
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Function to handle demo link click
  const handleDemoClick = (demoLink) => {
    if (demoLink) {
      window.open(demoLink, '_blank', 'noopener,noreferrer');
    }
  };

  // Function to handle code link click (if you have code links)
  const handleCodeClick = (codeLink) => {
    if (codeLink) {
      window.open(codeLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className={`py-20 px-4 transition-colors duration-300 ${getBgClass()}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${getSecondaryTextClass()}`}>
            Here are some of my recent works. Each project is crafted with care and attention to detail.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === f.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${getCardBgClass()}`}
            >
              {/* Project Image/Header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                {project.image && project.image.startsWith('http') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl">{project.image || '📁'}</span>
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-bold ${getTextClass()}`}>{project.title}</h3>
                  <span className="text-2xl">{project.icon}</span>
                </div>
                
                <p className={`text-sm mb-4 ${getSecondaryTextClass()}`}>{project.description}</p>
                
                {/* Features Tags */}
                {project.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleDemoClick(project.demo)}
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition"
                  >
                    Live Demo
                  </button>
                   
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;