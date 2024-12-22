const crypto = require('crypto');

// Generate a random JWT secret key (64 bytes converted to hex)
const jwtSecretKey = crypto.randomBytes(64).toString('hex');

console.log('Generated JWT Secret Key:');
console.log(jwtSecretKey);