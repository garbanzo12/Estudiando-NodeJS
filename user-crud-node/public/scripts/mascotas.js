import { apiRequest } from "../services/api.js";

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

petForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("petName").value.trim();
  const species = document.getElementById("petSpecies").value.trim();
  const age = document.getElementById("petAge").value.trim()
  
  try {
    const data = await apiRequest("/pets", "POST", { name, species , age});
    alert(data.message);
    petForm.reset();
    loadPets();
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});

async function loadPets() {
  try {
    const pets = await apiRequest("/pets/my", "GET"); // <-- Luego crearemos esta ruta para obtener todas las mascotas del usuario
    petList.innerHTML = ""; 
    pets.forEach((pet) => {
      const div = document.createElement("div");
      div.textContent = `${pet.name} (${pet.type})`;
      petList.appendChild(div);
    });
  } catch (error) {
    console.error(error);
  }
}

// Si quieres que al entrar cargue todas las mascotas
loadPets();
