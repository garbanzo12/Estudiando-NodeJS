const API = 'http://localhost:3000/api';

// Capturas para register
const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regAge = document.getElementById("regAge");
const genre = document.getElementById("genre");

// Capturas para login
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// ---- Login ----
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
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
    window.location.href = 'dashboard.html';
  } else {
    alert(data.message || 'Error en login');
  }
});

// ---- Register ----
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: regName.value,
      email: regEmail.value,
      password: regPassword.value,
      age: parseInt(regAge.value),
      genre: genre.value
    })
  });

  const data = await res.json();
  if (res.ok) {
    alert('Usuario registrado exitosamente');
    window.location.href = 'index.html';
  } else {
    alert(data.message || 'Error en registro');
  }
});
