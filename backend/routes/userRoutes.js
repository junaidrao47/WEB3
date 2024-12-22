// backend/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const validateVerificationData = require('../middlewares/validation');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Validation middleware
// const validateVerificationData = (req, res, next) => {
//     const { email, code } = req.body;
    
//     if (!email || typeof email !== 'string') {
//         return res.status(400).json({
//             status: 'error',
//             message: 'Valid email is required'
//         });
//     }
    
//     if (!code || typeof code !== 'string') {
//         return res.status(400).json({
//             status: 'error',
//             message: 'Valid verification code is required'
//         });
//     }
    
//     next();
// };

// Public routes
router.post('/signup', userController.signup);
router.post('/verify-code', validateVerificationData, userController.verifyEmail);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);
router.patch('/reset-password/:token', userController.resetPassword);

// Protected routes
router.use(authMiddleware.protect);

module.exports = router;