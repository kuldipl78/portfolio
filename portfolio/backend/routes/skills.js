const express = require('express');
const { getConnection } = require('../config/database');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET /api/skills
// @desc    Get all skills grouped by category
// @access  Public
router.get('/', async (req, res) => {
  try {
    const connection = getConnection();
    const [skills] = await connection.execute('SELECT * FROM skills ORDER BY category, name');
    
    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
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

    const connection = getConnection();
    const [result] = await connection.execute(
      'INSERT INTO skills (name, category) VALUES (?, ?)',
      [name, category]
    );

    // Get the newly created skill
    const [newSkill] = await connection.execute('SELECT * FROM skills WHERE id = ?', [result.insertId]);
    
    res.status(201).json(newSkill[0]);
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
    const connection = getConnection();
    const [result] = await connection.execute('DELETE FROM skills WHERE id = ?', [req.params.id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;