const bcrypt = require('bcrypt');

const verifyPassword = async () => {
  const myPassword = 'password123';
  const hash = '$2b$10$Y6GRWFIZUhJ9RhzMIycSqurDdSJ8X3vxltZMdNspK/RKP/4S3bPVi';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
};

verifyPassword();
