import React from 'react';
import { FiMapPin, FiCalendar, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';
import myImage from './image.png';
const Experience = () => {
  const experience = [
    {
      company: 'Shekru Labs Private Limited',
      location: 'Pune, Maharashtra',
      positions: [
        {
          title: 'Associate Developer',
          period: 'Jun 2023 – Present',
          type: 'Full-time',
          current: true
        }
      ]
    },

  ];

  const projectDetails = {
    name: 'Menumtra Multi-Platform Restaurant Management System',
    description: 'Leading development of Menumtra, a comprehensive multi-platform restaurant management system including POS, Admin Panel, Mobile Apps (iOS/Android), Customer Web-Portal, CDS (Customer Display System), KDS (Kitchen Display System) and Outlet Dashboard.',
    achievements: [
      {
        metric: '40%',
        description: 'Performance optimization achieved',
        icon: FiTrendingUp,
        color: 'text-green-600'
      },
      {
        metric: '1000+',
        description: 'Daily transactions handled',
        icon: FiUsers,
        color: 'text-blue-600'
      },
      {
        metric: '6+',
        description: 'Interconnected platforms',
        icon: FiAward,
        color: 'text-purple-600'
      }
    ],
    technologies: [
      'React.js', 'React Native', 'Node.js', 'JavaScript', 'JWT Authentication',
      'RESTful APIs', 'iOS Development', 'Android Development', 'State Management',
      'API Optimization', 'Real-time Synchronization'
    ],
    responsibilities: [
      'Leading development of Menumtra multi-platform restaurant management system',
      'Deployed end-to-end features across React.js web applications and React Native mobile experiences',
      'Ensured seamless integration and consistent user proficiency across 6+ interconnected platforms',
      'Optimized platform performance by 40% through efficient state management and API optimization',
      'Implemented component reusability patterns for better maintainability',
      'Handled 1000+ daily transactions with robust system architecture',
      'Implemented secure authentication flows with JWT tokens',
      'Integrated RESTful APIs for real-time data synchronization across platforms',
      'Developed POS system, Admin Panel, and Customer Web-Portal',
      'Built Customer Display System (CDS) and Kitchen Display System (KDS)',
      'Created comprehensive Outlet Dashboard for restaurant management'
    ]
  };

  const internshipProject = {
    name: 'Carbon Estimation Website',
    company: 'Shiash Info Solutions Private Limited',
    description: 'Developed a carbon estimation website using JavaScript and React.js to calculate and visualize environmental impact metrics.',
    responsibilities: [
      'Developed carbon estimation website using JavaScript and React.js',
      'Implemented features to calculate and visualize environmental impact metrics',
      'Contributed to front-end implementation and user interface design',
      'Participated in code reviews to improve code quality and maintainability',
      'Collaborated with team members on project requirements and deliverables'
    ]
  };

  const education = [
    {
      degree: 'Bachelor of Engineering (BE)',
      institution: 'JSPM Pune',
      period: '2019 – 2023',
      field: 'Computer Engineering'
    },
    {
      Course: 'Full-Stack Development Certification',
      institution: 'Nxtwave',
      period: '2022 – 2023',
      field: 'MERN Stack Development'
    },
    {
      degree: 'Diploma in Electrical Engineering',
      institution: 'Government Polytechnic Gondia',
      period: '2016 – 2019',
      field: 'Electrical Engineering'
    }
  ];

  const skills = [
    'Full-Stack Development',
    'React.js & React Native',
    'Node.js & Express.js',
    'Database Design & Optimization',
    'API Development & Integration',
    'Authentication & Security',
    'Performance Optimization',
    'Team Collaboration',
    'Problem Solving',
    'Agile Development'
  ];

  const screenshotPlan = [
    {
      title: 'Before 1 - Sync UX',
      description: 'Old sync/loading experience with minimal progress visibility.'
    },
    {
      title: 'After 1 - Sync Progress',
      description: 'Sync screen with phase-wise progress for sections, tables, orders, and inventory.'
    },
    {
      title: 'Before 2 - Offline Status',
      description: 'Generic offline behavior without clear status or metrics.'
    },
    {
      title: 'After 2 - Offline Metrics',
      description: 'Offline stats showing record counts, used size, last sync, and status by record type.'
    },
    {
      title: 'Before 3 - Network Disruption',
      description: 'Error-prone UX during API/network interruption.'
    },
    {
      title: 'After 3 - Fallback Continuity',
      description: 'Automatic offline fallback with cached data continuity.'
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey in software development, from internship to associate developer, 
            building scalable applications and delivering impactful solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          {experience.map((exp, expIndex) => (
            <div key={expIndex} className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-primary-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h2>
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <FiMapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Positions */}
              <div className="space-y-6">
                {exp.positions.map((position, index) => (
                  <div key={index} className="border-l-4 border-primary-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FiCalendar size={14} />
                        <span>{position.period}</span>
                        {position.current && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{position.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Project: {projectDetails.name}</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">{projectDetails.description}</p>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {projectDetails.achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                    <IconComponent className={`mx-auto mb-3 ${achievement.color}`} size={32} />
                    <div className={`text-3xl font-bold mb-2 ${achievement.color}`}>
                      {achievement.metric}
                    </div>
                    <div className="text-gray-600 text-sm">{achievement.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Technologies Used */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {projectDetails.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectDetails.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Internship Project */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Internship Project: {internshipProject.name}</h2>
            <p className="text-gray-600 mb-4 font-medium">{internshipProject.company}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">{internshipProject.description}</p>

            {/* Internship Responsibilities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Contributions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {internshipProject.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-primary-600 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-2">{edu.field}</p>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <FiCalendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menumtra Case Study */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Menumtra Case Study: Offline-First, Realtime, and Reliable Sync
          </h2>
          <p className="text-gray-700 mb-8">
            This case study highlights the architecture and engineering decisions used to keep restaurant
            operations stable during weak or unstable internet while maintaining realtime behavior when connected.
          </p>
          <div className='mb-10'>
              <img src={myImage} alt="Dynamic" />
          </div>



  

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Before / After Screenshot Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {screenshotPlan.map((item, index) => (
                <div key={index} className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;