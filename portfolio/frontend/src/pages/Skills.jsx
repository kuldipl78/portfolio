import React, { useState, useEffect } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import SkillForm from '../components/SkillForm';
import axios from 'axios';

const Skills = () => {
  const { isAuthenticated } = useAuth();
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('/api/skills');
      setSkills(response.data);
    } catch (error) {
      setError('Failed to fetch skills');
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSkillAdded = (newSkill) => {
    setSkills(prevSkills => ({
      ...prevSkills,
      [newSkill.category]: [...(prevSkills[newSkill.category] || []), newSkill]
    }));
  };

  const handleDeleteSkill = async (skillId, category) => {
    if (!window.confirm('Are you sure you want to delete this skill?')) {
      return;
    }

    try {
      await axios.delete(`/api/skills/${skillId}`);
      setSkills(prevSkills => ({
        ...prevSkills,
        [category]: prevSkills[category].filter(skill => skill.id !== skillId)
      }));
    } catch (error) {
      console.error('Error deleting skill:', error);
      alert('Failed to delete skill');
    }
  };

  const categoryColors = {
    'Languages': 'bg-blue-100 text-blue-800 border-blue-200',
    'Frontend': 'bg-green-100 text-green-800 border-green-200',
    'Backend': 'bg-purple-100 text-purple-800 border-purple-200',
    'Tools': 'bg-orange-100 text-orange-800 border-orange-200',
    'CS Fundamentals': 'bg-red-100 text-red-800 border-red-200'
  };

  const categoryIcons = {
    'Languages': '💻',
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Tools': '🛠️',
    'CS Fundamentals': '📚'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development.
          </p>
          
          {isAuthenticated && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-6 btn-primary flex items-center space-x-2 mx-auto"
            >
              <FiPlus size={16} />
              <span>Add New Skill</span>
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-8">
            {error}
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="card p-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">{categoryIcons[category]}</span>
                <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
                <span className="text-sm text-gray-500">({categorySkills.length})</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`group relative px-4 py-2 rounded-lg border font-medium transition-all duration-200 hover:scale-105 ${categoryColors[category]}`}
                  >
                    <span>{skill.name}</span>
                    {isAuthenticated && (
                      <button
                        onClick={() => handleDeleteSkill(skill.id, category)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                        title="Delete skill"
                      >
                        <FiTrash2 size={12} />
                      </button>
                    )}
                  </div>
                ))}
                
                {categorySkills.length === 0 && (
                  <p className="text-gray-500 italic">No skills in this category yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(skills).length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No skills found.</p>
            {isAuthenticated && (
              <button
                onClick={() => setIsFormOpen(true)}
                className="mt-4 btn-primary"
              >
                Add Your First Skill
              </button>
            )}
          </div>
        )}

        {/* Skill Categories Overview */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skill Categories Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.entries(categoryIcons).map(([category, icon]) => (
              <div key={category} className="text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-medium text-gray-900 mb-1">{category}</h3>
                <p className="text-sm text-gray-600">
                  {skills[category]?.length || 0} skills
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Form Modal */}
      <SkillForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSkillAdded={handleSkillAdded}
      />
    </div>
  );
};

export default Skills;