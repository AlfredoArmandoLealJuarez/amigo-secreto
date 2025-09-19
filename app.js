// Array para guardar los nombres
const amigos = [];

// Obtener referencias de los elementos
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
  listaAmigos.innerHTML = ""; // Limpiar lista antes de volver a pintar
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para agregar un amigo
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  if (amigos.length >= 5) {
    alert("Ya tienes 5 amigos en la lista.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  inputAmigo.value = ""; // limpiar input
  inputAmigo.focus();
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length < 5) {
    alert("Debes agregar 5 amigos antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  // Limpiar y mostrar resultado
  resultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = `🎉 Tu amigo secreto es: ${amigoSorteado}`;
  resultado.appendChild(li);
}
