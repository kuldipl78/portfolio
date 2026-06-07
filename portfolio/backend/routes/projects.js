const express = require('express');
const { getConnection } = require('../config/database');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const pool = getConnection();
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
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

    const pool = getConnection();
    const result = await pool.query(
      'INSERT INTO projects (title, description, technologies, live_url, github_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, technologies, live_url || null, github_url || null]
    );

    res.status(201).json(result.rows[0]);
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
    const pool = getConnection();
    const result = await pool.query('DELETE FROM projects WHERE id = $1 RETURNING *', [req.params.id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;