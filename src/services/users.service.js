function register user
function registerUser(name, email, password) {
  const data = {
    name,
    email,
    password,
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => data);
}

// export default registerUser;
