const validateVerificationData = (req, res, next) => {
    const { email, code } = req.body;
    
    if (!email || typeof email !== 'string') {
        return res.status(400).json({
            status: 'error',
            message: 'Valid email is required'
        });
    }
    
    if (!code || typeof code !== 'string') {
        return res.status(400).json({
            status: 'error',
            message: 'Valid verification code is required'
        });
    }
    
    next();
};

module.exports = validateVerificationData;