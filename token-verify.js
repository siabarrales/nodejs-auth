const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcxNzYzMjA2fQ.X9dgML-rHdAXb6nsYVuGat63suNHFAivkuqOxgG0ZUo';
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
