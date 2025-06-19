const API = 'http://localhost:3000/api';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value
    })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem('token', data.token);
    alert('Login exitoso');
    window.location.href = 'dashboard.html'; // redirige a la vista privada
  } else {
    alert(data.message || 'Error en login');
  }
});

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: regName.value,
      email: regEmail.value,
      password: regPassword.value,
      age: parseInt(regAge.value),
      genre : genre.value
    })
  });

  const data = await res.json();
  if (res.ok) {
    alert('Usuario registrado');
  } else {
    alert(data.message || 'Error en registro');
  }
});
