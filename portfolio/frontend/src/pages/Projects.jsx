import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub, FiPlus, FiTrash2, FiCode, FiEye } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import ProjectForm from '../components/ProjectForm';
import axios from 'axios';

const Projects = () => {
  const { isAuthenticated } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      setError('Failed to fetch projects');
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectAdded = (newProject) => {
    setProjects(prevProjects => [newProject, ...prevProjects]);
  };

  const handleDeleteProject = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      await axios.delete(`/api/projects/${projectId}`);
      setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my work spanning web applications, mobile apps, and research projects. 
            Each project demonstrates different aspects of my technical expertise.
          </p>
          
          {isAuthenticated && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-6 btn-primary flex items-center space-x-2 mx-auto"
            >
              <FiPlus size={16} />
              <span>Add New Project</span>
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-8">
            {error}
          </div>
        )}

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group card p-6 hover:scale-105 transition-all duration-300 animate-fade-in relative"
              >
                {/* Delete button for authenticated users */}
                {isAuthenticated && (
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 z-10"
                    title="Delete project"
                  >
                    <FiTrash2 size={14} />
                  </button>
                )}

                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(',').map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors"
                        title="View Live Demo"
                      >
                        <FiExternalLink size={16} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
                        title="View Source Code"
                      >
                        <FiGithub size={16} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                  </div>
                  
                  {project.created_at && (
                    <span className="text-xs text-gray-500">
                      {formatDate(project.created_at)}
                    </span>
                  )}
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-lg pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4">
              <FiCode size={48} className="mx-auto text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Projects Yet</h3>
            <p className="text-gray-500 mb-6">
              {isAuthenticated 
                ? "Start building your portfolio by adding your first project."
                : "Projects will appear here once they are added."
              }
            </p>
            {isAuthenticated && (
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary"
              >
                Add Your First Project
              </button>
            )}
          </div>
        )}

        {/* Project Stats */}
        {projects.length > 0 && (
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {projects.length}
                </div>
                <div className="text-gray-600">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {projects.filter(p => p.live_url).length}
                </div>
                <div className="text-gray-600">Live Demos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {projects.filter(p => p.github_url).length}
                </div>
                <div className="text-gray-600">Open Source</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Form Modal */}
      <ProjectForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onProjectAdded={handleProjectAdded}
      />
    </div>
  );
};

export default Projects;