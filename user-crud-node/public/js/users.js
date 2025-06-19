const token = localStorage.getItem('token');
const API = 'http://localhost:3000/api/users';

if (!token) {
  alert('No autorizado');
  window.location.href = 'index.html';
}

fetch(API, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(res => res.json())
.then(data => {
  const list = document.getElementById('userList');
  list.innerHTML = '';
  data.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} - ${user.email}`;
    list.appendChild(li);
  });
})
.catch(err => {
  console.error(err);
  alert('Error al obtener usuarios');
});

function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}
