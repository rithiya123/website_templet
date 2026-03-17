// src/components/ui/Logo.jsx
import React from 'react';
import img_logo from '../../images/logo.png';

const Logo = ({ variant = 'default', showText = true, className = '' }) => {
  const variants = {
    default: {
      container: 'flex items-center',
      iconContainer: 'w-10 h-10 flex-shrink-0',
      title: 'text-lg font-bold text-blue-900',
      subtitle: 'text-sm text-gray-600',
      badge: 'text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded'
    },
    hero: {
      container: 'flex items-center space-x-6',
      iconContainer: 'w-20 h-20 flex-shrink-0',
      title: 'text-3xl font-light text-white',
      subtitle: 'text-xl text-blue-200',
      badge: 'bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold'
    },
    footer: {
      container: 'flex items-center mb-4',
      iconContainer: 'w-12 h-12 flex-shrink-0',
      title: 'font-semibold text-lg text-white',
      subtitle: 'text-sm text-gray-400'
    }
  };

  const current = variants[variant] || variants.default;

  return (
    <div className={`${current.container} ${className}`}>
      <div className={current.iconContainer}>
        <img 
          src={img_logo} 
          alt="GDP Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <div className="ml-3">
          <div className="flex items-center flex-wrap gap-2">
            <h1 className={current.title}>អគ្គនាយកដ្ឋានពន្ធនាគារ</h1>
            {variant === 'default' && (
              <span className={current.badge}>អ.ព.ន.</span>
            )}
            {variant === 'hero' && (
              <span className={current.badge}>GDP</span>
            )}
          </div>
          <p className={current.subtitle}>GENERAL DEPARTMENT OF PRISONS of CAMBODIA</p>
          {variant === 'default' && (
            <p className="text-xs text-gray-500">Official Website • គេហទំព័រផ្លូវការ</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;