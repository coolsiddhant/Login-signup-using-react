const express = require('express');
const { authUser, registerUser, getUserDetails } = require('../controllers/userController.js');
const protect = require('../middleware/protect')

const router = express.Router();

router.route('/').post(registerUser)
router.post('/login', authUser)
router.get('/:id', protect, getUserDetails)

module.exports = router