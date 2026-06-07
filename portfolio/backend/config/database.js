const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL Connected Successfully');
    client.release();
    await createTables();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

const createTables = async () => {
  try {
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create projects table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        technologies VARCHAR(500) NOT NULL,
        live_url VARCHAR(255),
        github_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create skills table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert default users if table is empty
    const usersResult = await pool.query('SELECT COUNT(*) FROM users');
    if (parseInt(usersResult.rows[0].count) === 0) {
      await insertDefaultUsers();
    }

    // Insert default projects if table is empty
    const projectsResult = await pool.query('SELECT COUNT(*) FROM projects');
    if (parseInt(projectsResult.rows[0].count) === 0) {
      await insertDefaultProjects();
    }

    // Insert default skills if table is empty
    const skillsResult = await pool.query('SELECT COUNT(*) FROM skills');
    if (parseInt(skillsResult.rows[0].count) === 0) {
      await insertDefaultSkills();
    }

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error.message);
  }
};

const insertDefaultUsers = async () => {
  const defaultUsers = [
    { username: 'kuldipl09', password: 'Kuldip@7887' },
    { username: 'omkarl09', password: 'Omkar@7887' }
  ];

  for (const user of defaultUsers) {
    await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [user.username, user.password]
    );
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
    await pool.query(
      'INSERT INTO projects (title, description, technologies, live_url, github_url) VALUES ($1, $2, $3, $4, $5)',
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
    await pool.query(
      'INSERT INTO skills (name, category) VALUES ($1, $2)',
      [skill.name, skill.category]
    );
  }
};

const getConnection = () => pool;

module.exports = { connectDB, getConnection };