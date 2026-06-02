const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

let connection;

const connectDB = async () => {
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('MySQL Connected Successfully');
    
    // Create tables if they don't exist
    await createTables();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

const createTables = async () => {
  try {
    // Create projects table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        technologies VARCHAR(500) NOT NULL,
        live_url VARCHAR(255),
        github_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create skills table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS skills (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category ENUM('Languages', 'Frontend', 'Backend', 'Tools', 'CS Fundamentals') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert default projects if table is empty
    const [projects] = await connection.execute('SELECT COUNT(*) as count FROM projects');
    if (projects[0].count === 0) {
      await insertDefaultProjects();
    }

    // Insert default skills if table is empty
    const [skills] = await connection.execute('SELECT COUNT(*) as count FROM skills');
    if (skills[0].count === 0) {
      await insertDefaultSkills();
    }

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error.message);
  }
};

const insertDefaultProjects = async () => {
  const defaultProjects = [
    {
      title: 'Jobby Portal',
      description: 'A comprehensive job portal built with React and JWT authentication. Features include job search, filtering, and user authentication.',
      technologies: 'React.js, JWT, REST APIs, CSS3',
      live_url: 'https://jobby-portal-demo.netlify.app',
      github_url: 'https://github.com/kuldipl78/jobby-portal'
    },
    {
      title: 'Next Trends E-commerce',
      description: 'Modern e-commerce platform with shopping cart, product filtering, and responsive design.',
      technologies: 'React.js, Context API, Tailwind CSS, REST APIs',
      live_url: 'https://kuldiptrends.ccbp.tech',
      github_url: 'https://github.com/kuldipl78/next-trends'
    },
    {
      title: 'Jarvis AI Assistant',
      description: 'Python-based AI assistant with voice recognition and natural language processing capabilities.',
      technologies: 'Python, Speech Recognition, NLP, OpenAI API',
      live_url: null,
      github_url: 'https://github.com/kuldipl78/jarvis-ai'
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'IEEE published research project for automated attendance using facial recognition technology.',
      technologies: 'Python, OpenCV, Machine Learning, SQLite',
      live_url: null,
      github_url: 'https://github.com/kuldipl78/face-recognition-attendance'
    }
  ];

  for (const project of defaultProjects) {
    await connection.execute(
      'INSERT INTO projects (title, description, technologies, live_url, github_url) VALUES (?, ?, ?, ?, ?)',
      [project.title, project.description, project.technologies, project.live_url, project.github_url]
    );
  }
};

const insertDefaultSkills = async () => {
  const defaultSkills = [
    { name: 'JavaScript', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'HTML5', category: 'Languages' },
    { name: 'CSS3', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'React Native', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'JWT', category: 'Tools' },
    { name: 'Authentication', category: 'Tools' },
    { name: 'Git', category: 'Tools' },
    { name: 'Linux', category: 'Tools' },
    { name: 'DSA', category: 'CS Fundamentals' },
    { name: 'OOPs', category: 'CS Fundamentals' },
    { name: 'System Design', category: 'CS Fundamentals' }
  ];

  for (const skill of defaultSkills) {
    await connection.execute(
      'INSERT INTO skills (name, category) VALUES (?, ?)',
      [skill.name, skill.category]
    );
  }
};

const getConnection = () => connection;

module.exports = { connectDB, getConnection };