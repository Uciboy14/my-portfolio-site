import Image from "next/image";
import React from "react";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

// Dynamically import icons
const FaGlobe = dynamic(() => import('react-icons/fa').then(mod => mod.FaGlobe), { ssr: false });
const FaMobileAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaMobileAlt), { ssr: false });
const FaServer = dynamic(() => import('react-icons/fa').then(mod => mod.FaServer), { ssr: false });
const FaCloud = dynamic(() => import('react-icons/fa').then(mod => mod.FaCloud), { ssr: false });
const FaShoppingCart = dynamic(() => import('react-icons/fa').then(mod => mod.FaShoppingCart), { ssr: false });
const FaCreditCard = dynamic(() => import('react-icons/fa').then(mod => mod.FaCreditCard), { ssr: false });
const FaLink = dynamic(() => import('react-icons/fa').then(mod => mod.FaLink), { ssr: false });

const PortfolioContent = ({ project, onClose }) => {
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'web':
        return <FaGlobe className="w-6 h-6" />;
      case 'mobile':
        return <FaMobileAlt className="w-6 h-6" />;
      case 'backend':
        return <FaServer className="w-6 h-6" />;
      case 'cloud':
        return <FaCloud className="w-6 h-6" />;
      case 'ecommerce':
        return <FaShoppingCart className="w-6 h-6" />;
      case 'payment':
        return <FaCreditCard className="w-6 h-6" />;
      default:
        return <FaLink className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-[20px] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={project.src}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-t-[20px]"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            {getIcon(project.category)}
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
          
          <p className="text-gray-300 mb-6 font-light leading-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-light"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#1ab394] text-white rounded-full hover:bg-[#169c7d] transition-colors font-light"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors font-light"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioContent;
