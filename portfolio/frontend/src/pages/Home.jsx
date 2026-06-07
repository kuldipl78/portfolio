import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Carousel from '../components/Carousel';

const Home = () => {
  const carouselItems = [
    {
      title: 'Full-Stack Developer',
      subtitle: 'React • Node.js',
      description: '3+ years of experience building modern web applications'
    },
    {
      title: 'IEEE Published Researcher',
      subtitle: 'Facial Recognition Systems',
      description: 'Published research in advanced computer vision technologies'
    },
    {
      title: 'React Native Developer',
      subtitle: 'Mobile App Development',
      description: 'Cross-platform mobile applications with React Native'
    },
    {
      title: 'Menu Mitra',
      subtitle: 'Menu Mitra is a restaurant management system that streamlines operations and enhances customer experience. It offers features like digital menu creation, order management, and analytics to help restaurants optimize their services.',
      description: 'Cross-platform mobile applications with React Native'
    }
  ];

  const personalInfo = {
    name: 'Kuldip Lohare',
    location: 'Pune, Maharashtra',
    phone: '+91-7887589853',
    email: 'kuldiplohare101@gmail.com',
    linkedin: 'linkedin.com/in/kuldip-lohare',
    github: 'github.com/kuldipl78'
  };

  const summary = `Full-stack software professional with 2+ years of experience in React, React Native, FastAPI, Node.js. 
    IEEE published researcher in facial recognition systems with expertise in modern web technologies and mobile development.`;

  const achievements = [
    {
      number: '3+',
      label: 'Years Experience',
      description: 'Professional development'
    },
    {
      number: '10+',
      label: 'Projects Completed',
      description: 'Web & Mobile apps'
    },
    {
      number: '1',
      label: 'IEEE Publication',
      description: 'Research paper published'
    },
    {
      number: '40%',
      label: 'Performance Boost',
      description: 'System optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                  {personalInfo.name}
                </h1>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="text-primary-600" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMail className="text-primary-600" />
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiPhone className="text-primary-600" />
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FiGithub size={20} />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="/projects"
                  className="btn-primary text-center"
                >
                  View My Work
                </a>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <FiDownload size={16} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="animate-slide-up">
              <Carousel items={carouselItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Professional Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {summary}
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 card hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Core Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['React.js', 'Node.js', 'FastAPI', 'React Native', 'JavaScript', 'Python', 'Tailwind CSS', 'JWT'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-primary-700 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/skills"
              className="btn-primary"
            >
              View All Skills
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;