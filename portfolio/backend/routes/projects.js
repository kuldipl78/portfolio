const express = require('express');
const { getConnection } = require('../config/database');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const connection = getConnection();
    const [projects] = await connection.execute('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/projects
// @desc    Add new project
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, technologies, live_url, github_url } = req.body;

    // Validate input
    if (!title || !description || !technologies) {
      return res.status(400).json({ message: 'Please provide title, description, and technologies' });
    }

    const connection = getConnection();
    const [result] = await connection.execute(
      'INSERT INTO projects (title, description, technologies, live_url, github_url) VALUES (?, ?, ?, ?, ?)',
      [title, description, technologies, live_url || null, github_url || null]
    );

    // Get the newly created project
    const [newProject] = await connection.execute('SELECT * FROM projects WHERE id = ?', [result.insertId]);
    
    res.status(201).json(newProject[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete project
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const connection = getConnection();
    const [result] = await connection.execute('DELETE FROM projects WHERE id = ?', [req.params.id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;