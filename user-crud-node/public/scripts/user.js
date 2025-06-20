import { apiRequest } from '../services/api.js';

const userList = document.getElementById('userList');

function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}

async function loadUsers() {
  if (!localStorage.getItem('token')) {
    alert('No autorizado');
    window.location.href = 'index.html';
    return;
  }

  try {
  const data = await apiRequest('/auth/me', 'GET');
  userList.innerHTML = ""; // Limpiar primero
  const li = document.createElement('li');
  li.textContent = `${data.name} - ${data.email}`;
  userList.appendChild(li);
} catch (error) {
  alert(error.message);
  console.error(error);
}

}

// Ejecutamos la carga de usuarios al abrir la página
loadUsers();

// Exportamos la función de logout para llamarla desde el HTML
window.logout = logout;
