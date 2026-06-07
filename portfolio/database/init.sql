-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    technologies VARCHAR(500) NOT NULL,
    live_url VARCHAR(255),
    github_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default user
INSERT INTO users (username, password)
VALUES ('omkarl09', 'Omkar@7887');

select * users;
-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category ENUM('Languages', 'Frontend', 'Backend', 'Tools', 'CS Fundamentals') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default projects
INSERT INTO projects (title, description, technologies, live_url, github_url) VALUES
('Jobby Portal', 'A comprehensive job portal built with React and JWT authentication. Features include job search, filtering, and user authentication with a clean, modern interface.', 'React.js, JWT, REST APIs, CSS3, JavaScript', 'https://jobby-portal-demo.netlify.app', 'https://github.com/kuldipl78/jobby-portal'),
('Next Trends E-commerce', 'Modern e-commerce platform with shopping cart functionality, product filtering, responsive design, and seamless user experience.', 'React.js, Context API, Tailwind CSS, REST APIs, JavaScript', 'https://next-trends-ecommerce.netlify.app', 'https://github.com/kuldipl78/next-trends'),
('Jarvis AI Assistant', 'Python-based AI assistant with voice recognition and natural language processing capabilities. Features speech-to-text, command processing, and automated responses.', 'Python, Speech Recognition, NLP, OpenAI API, Machine Learning', NULL, 'https://github.com/kuldipl78/jarvis-ai'),
('Face Recognition Attendance System', 'IEEE published research project for automated attendance using facial recognition technology. Implements computer vision algorithms for accurate face detection and recognition.', 'Python, OpenCV, Machine Learning, SQLite, Computer Vision', NULL, 'https://github.com/kuldipl78/face-recognition-attendance');

-- Insert default skills
INSERT INTO skills (name, category) VALUES
-- Languages
('JavaScript', 'Languages'),
('Python', 'Languages'),
('HTML5', 'Languages'),
('CSS3', 'Languages'),
('SQL', 'Languages'),

-- Frontend
('React.js', 'Frontend'),
('React Native', 'Frontend'),
('Tailwind CSS', 'Frontend'),
('Bootstrap', 'Frontend'),
('Responsive Design', 'Frontend'),

-- Backend
('Node.js', 'Backend'),
('Express.js', 'Backend'),
('FastAPI', 'Backend'),
('REST APIs', 'Backend'),
('GraphQL', 'Backend'),

-- Tools
('Git', 'Tools'),
('GitHub', 'Tools'),
('JWT', 'Tools'),
('Authentication', 'Tools'),
('Linux', 'Tools'),
('Docker', 'Tools'),
('AWS', 'Tools'),
('Postman', 'Tools'),

-- CS Fundamentals
('Data Structures', 'CS Fundamentals'),
('Algorithms', 'CS Fundamentals'),
('Object-Oriented Programming', 'CS Fundamentals'),
('System Design', 'CS Fundamentals'),
('Database Design', 'CS Fundamentals');

-- Create indexes for better performance
CREATE INDEX idx_projects_created_at ON projects(created_at);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_skills_name ON skills(name);

-- Show tables and data
SHOW TABLES;
SELECT COUNT(*) as total_projects FROM projects;
SELECT COUNT(*) as total_skills FROM skills;
SELECT category, COUNT(*) as skill_count FROM skills GROUP BY category;