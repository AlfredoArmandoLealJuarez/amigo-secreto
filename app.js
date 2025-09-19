// Array para guardar los nombres
const amigos = [];

const nombreInput = document.getElementById("nombreInput");
const agregarBtn = document.getElementById("agregarBtn");
const sortearBtn = document.getElementById("sortearBtn");
const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

// Función para actualizar la lista en pantalla
function mostrarLista() {
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Evento para agregar un nombre
agregarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();

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
  nombreInput.value = ""; // limpiar input
  nombreInput.focus();
});

// Evento para sortear un amigo
sortearBtn.addEventListener("click", () => {
  if (amigos.length < 5) {
    alert("Debes agregar 5 amigos antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];
  resultado.textContent = "🎉 Tu amigo sorteado es: " + amigoSorteado;
});
