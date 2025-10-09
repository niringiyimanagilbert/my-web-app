// auth.js — simple user auth example

const users = [{ username: 'user1', password: 'pass1' }];

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? 'Login successful' : 'Invalid credentials';
}

module.exports = { login };
