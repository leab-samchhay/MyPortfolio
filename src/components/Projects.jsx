// components/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Projects = () => {
  const { getBgClass, getTextClass, getSecondaryTextClass, getCardBgClass, isDarkMode } = useGlobalContext();
  const [filter, setFilter] = useState('all');

  // Refs for animation
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const projectRefs = useRef([]);
  const viewAllRef = useRef(null);

  const [animated, setAnimated] = useState({
    section: false,
    header: false,
    filter: false,
    projects: [],
    viewAll: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section
            if (entry.target === sectionRef.current) {
              setAnimated((prev) => ({ ...prev, section: true }));
            }

            // Animate header
            if (entry.target === headerRef.current) {
              setAnimated((prev) => ({ ...prev, header: true }));
            }
            
            // Animate filter buttons
            if (entry.target === filterRef.current) {
              setAnimated((prev) => ({ ...prev, filter: true }));
            }

            // Animate project cards
            if (entry.target.classList.contains('project-card')) {
              const index = projectRefs.current.indexOf(entry.target);
              if (index !== -1) {
                setAnimated((prev) => ({
                  ...prev,
                  projects: [...prev.projects, index]
                }));
              }
            }

            // Animate view all button
            if (entry.target === viewAllRef.current) {
              setAnimated((prev) => ({ ...prev, viewAll: true }));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe filter buttons
    if (filterRef.current) {
      observer.observe(filterRef.current);
    }

    // Observe project cards
    projectRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Observe view all button
    if (viewAllRef.current) {
      observer.observe(viewAllRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      title: 'E-Commerce Static Website',
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
      title: 'E-Commerce Static Website',
      description: 'Frontend show product (Phone and Computer ) for sale.',
      tech: ['HTML', 'Tailwind', 'Reactjs'],
      demo: "https://tesreact-kappa.vercel.app/",
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/736x/59/3d/a9/593da92a18d6b617bf6e556debbff061.jpg',
      features: []
    },
    {
      id: 4,
      title: 'E-Commerce Static Website',
      description: 'Frontend show product ( Food ) for sale.',
      tech: ['HTML', 'Tailwind', 'Reactjs'],
      demo: "https://restaurant-sandy-seven.vercel.app/",
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
      demo: "https://www.figma.com/design/X6Ew5Ge89avaP37jxl323i/Assigment_Final_Electronic?node-id=0-1&t=QfrKHWgZcH15cTMW-0",
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/1200x/41/d4/73/41d473d91c0674dfe22e550578c17da7.jpg',
      features: []
    },
    {
      id: 6,
      title: 'Project Using C#',
      description: 'Project Manage Minimart (product, user, Customer, Employee, CategoryProduct, Supplier)',
      tech: ['C#','Sql Server'],
      demo: "https://github.com/leab-samchhay/ProjectMart",
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
      image: 'https://i.pinimg.com/1200x/c4/db/9b/c4db9be611286c10518909959f68c679.jpg',
      features: []
    },
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

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 px-4 transition-colors duration-300 ${getBgClass()}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with enhanced animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-800 transform ${
            animated.header
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full transition-all duration-1000 ${
            animated.header ? "w-20" : "w-0"
          }`} />
          <p className={`mt-4 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            animated.header ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${getSecondaryTextClass()}`}>
            Here are some of my recent works. Each project is crafted with care and attention to detail.
          </p>
        </div>
        
        {/* Filter Buttons with enhanced animation */}
        <div 
          ref={filterRef}
          className={`flex justify-center gap-4 mb-12 flex-wrap transition-all duration-700 delay-300 transform ${
            animated.filter
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                filter === f.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transform scale-105 hover:scale-110'
                  : `bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105 ${
                      isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'
                    }`
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`project-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                animated.projects.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              } ${getCardBgClass()} hover:-translate-y-2 hover:scale-[1.02]`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Project Image/Header */}
              <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden group`}>
                {project.image && project.image.startsWith('http') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-6xl">{project.image || '📁'}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  project.category === 'frontend' 
                    ? 'bg-blue-500/80 text-white' 
                    : project.category === 'fullstack'
                    ? 'bg-purple-500/80 text-white'
                    : 'bg-green-500/80 text-white'
                }`}>
                  {project.category}
                </span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${getTextClass()} hover:text-purple-600 dark:hover:text-purple-400`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className={`text-sm mb-4 leading-relaxed ${getSecondaryTextClass()}`}>
                  {project.description}
                </p>
                
                {/* Features Tags */}
                {project.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium transition-all duration-300 hover:scale-105">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleDemoClick(project.demo)}
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Live Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button with enhanced animation */}
        <div 
          ref={viewAllRef}
          className={`text-center mt-12 transition-all duration-800 delay-500 transform ${
            animated.viewAll
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <button className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group">
            <span className="flex items-center gap-2">
              View All Projects
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;