const express = require('express');
const { getConnection } = require('../config/database');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET /api/skills
// @desc    Get all skills grouped by category
// @access  Public
router.get('/', async (req, res) => {
  try {
    const pool = getConnection();
    const result = await pool.query('SELECT * FROM skills ORDER BY category, name');
    
    // Group skills by category
    const groupedSkills = result.rows.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});

    res.json(groupedSkills);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/skills
// @desc    Add new skill
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, category } = req.body;

    // Validate input
    if (!name || !category) {
      return res.status(400).json({ message: 'Please provide skill name and category' });
    }

    const validCategories = ['Languages', 'Frontend', 'Backend', 'Tools', 'CS Fundamentals'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: 'Invalid category' });
    }

    const pool = getConnection();
    const result = await pool.query(
      'INSERT INTO skills (name, category) VALUES ($1, $2) RETURNING *',
      [name, category]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE /api/skills/:id
// @desc    Delete skill
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const pool = getConnection();
    const result = await pool.query('DELETE FROM skills WHERE id = $1 RETURNING *', [req.params.id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;