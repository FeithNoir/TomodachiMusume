// Estado del juego
const gameState = {
  affinity: 50,
  money: 100,
  items: [],
  girlOutfit: "default",
  girlImageDefault: "/img/character.png",
  girlImageAlt: "/img/character.png",
  characterName: "Chica Anime",
};

// Elementos del DOM
const animeGirlImg = document.getElementById("animeGirl");
const affinityDisplay = document.getElementById("affinityDisplay");
const moneyDisplay = document.getElementById("moneyDisplay");
const itemsDisplay = document.getElementById("itemsDisplay");
const hamburgerButton = document.getElementById("hamburgerButton");
const menuPanel = document.getElementById("menu-panel");

// Modales
const talkModal = document.getElementById("talkModal");
const equipModal = document.getElementById("equipModal");
const interactModal = document.getElementById("interactModal");
const missionModal = document.getElementById("missionModal");
const notificationModal = document.getElementById("notificationModal");

// Funciones para mostrar/ocultar modales
function showModal(modal) {
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
}

function hideModal(modal) {
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

// Funciones específicas para el modal de diálogo RPG
function showTalkModal() {
  talkModal.classList.remove("hidden", "opacity-0", "translate-y-full");
}

function hideTalkModal() {
  talkModal.classList.add("opacity-0", "translate-y-full");
  setTimeout(() => talkModal.classList.add("hidden"), 300);
}

// Notificación General
const notificationTitle = document.getElementById("notificationTitle");
const notificationMessage = document.getElementById("notificationMessage");
const closeNotificationModalButton = document.getElementById("closeNotificationModal");

function showNotification(title, message) {
  notificationTitle.textContent = title;
  notificationMessage.textContent = message;
  showModal(notificationModal);
}

closeNotificationModalButton.addEventListener("click", () => hideModal(notificationModal));

// Actualizar UI
function updateUI() {
  affinityDisplay.textContent = gameState.affinity;
  moneyDisplay.textContent = gameState.money;
  itemsDisplay.textContent = gameState.items.length > 0 ? gameState.items.join(", ") : "Ninguno";
}

// Lógica del Menú Hamburguesa
hamburgerButton.addEventListener("click", () => {
  menuPanel.classList.toggle("-translate-x-full");
});

document.addEventListener("click", (event) => {
  if (!menuPanel.contains(event.target) && !hamburgerButton.contains(event.target) && !menuPanel.classList.contains("-translate-x-full")) {
    menuPanel.classList.add("-translate-x-full");
  }
});

// Lógica de "Hablar" (Estilo RPG)
const dialogueText = document.getElementById("dialogueText");
const dialogueOptionsContainer = document.getElementById("dialogueOptions");
const characterNameElement = document.getElementById("characterName");

const dialogues = [
  {
    character: "Chica Anime",
    text: "¿Cómo crees que me fue en el entrenamiento de hoy?",
    options: [
      { text: "¡Seguro que genial! Eres muy fuerte.", affinityChange: 10 },
      { text: "Espero que bien, debes esforzarte más.", affinityChange: -5 },
      { text: "No lo sé, cuéntame más.", affinityChange: 2 },
      { text: "El entrenamiento es clave, ¡sigue así!", affinityChange: 3 },
    ],
  },
  {
    character: "Chica Anime",
    text: "A veces me pregunto si todo este esfuerzo vale la pena...",
    options: [
      { text: "¡Claro que sí! Estás protegiendo a muchos.", affinityChange: 15 },
      { text: "Si tienes dudas, quizás deberías reconsiderarlo.", affinityChange: -10 },
      { text: "Todos tenemos dudas, es normal.", affinityChange: 5 },
      { text: "Tu esfuerzo inspira a otros.", affinityChange: 7 },
    ],
  },
  {
    character: "Chica Anime",
    text: "Me gustaría tomar un descanso, ¿qué sugieres?",
    options: [
      { text: "Ver una película juntos.", affinityChange: 8 },
      { text: "Leer un buen libro.", affinityChange: 3 },
      { text: "El deber llama.", affinityChange: -7 },
      { text: "Pasear un rato.", affinityChange: 5 },
    ],
  },
];

function startDialogue() {
  const currentDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
  characterNameElement.textContent = currentDialogue.character || gameState.characterName;
  dialogueText.textContent = currentDialogue.text;
  dialogueOptionsContainer.innerHTML = "";

  currentDialogue.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.className = "dialogue-option-button";
    button.onclick = () => {
      gameState.affinity += option.affinityChange;
      if (gameState.affinity < 0) gameState.affinity = 0;
      if (gameState.affinity > 100) gameState.affinity = 100;
      updateUI();
      showNotification("Respuesta", `Ella parece ${option.affinityChange > 0 ? "contenta" : option.affinityChange < 0 ? "algo molesta" : "neutral"} con tu respuesta. (Afinidad ${option.affinityChange > 0 ? "+" : ""}${option.affinityChange})`);
      hideTalkModal();
    };
    dialogueOptionsContainer.appendChild(button);
  });
  showTalkModal();
}

// Lógica de "Equipamiento"
const closeEquipModalButton = document.getElementById("closeEquipModal");
document.querySelectorAll(".outfit-choice").forEach((button) => {
  button.addEventListener("click", (e) => {
    gameState.girlOutfit = e.target.dataset.outfit;
    updateUI();
    showNotification("Equipamiento", `Atuendo cambiado a: ${e.target.textContent}`);
    hideModal(equipModal);
  });
});

closeEquipModalButton.addEventListener("click", () => hideModal(equipModal));

// Lógica de "Interactuar"
const feedButton = document.getElementById("feedButton");
const playMinigameButton = document.getElementById("playMinigameButton");
const closeInteractModalButton = document.getElementById("closeInteractModal");

feedButton.addEventListener("click", () => {
  gameState.affinity += 5;
  if (gameState.affinity > 100) gameState.affinity = 100;
  updateUI();
  showNotification("Alimentar", "Le diste algo de comer. ¡Parece contenta! (+5 Afinidad)");
  hideModal(interactModal);
});

playMinigameButton.addEventListener("click", () => {
  showNotification("Minijuego", "Esta función estará disponible pronto. ¡Imagina que jugaron un divertido juego!");
  hideModal(interactModal);
});

closeInteractModalButton.addEventListener("click", () => hideModal(interactModal));

// Lógica de "Misión"
const missionTitle = document.getElementById("missionTitle");
const missionProgressBar = document.getElementById("missionProgressBar");
const missionProgressContainer = document.getElementById("missionProgressContainer");
const missionResult = document.getElementById("missionResult");
const closeMissionModalButton = document.getElementById("closeMissionModal");

function startMission() {
  missionTitle.textContent = "Enviando a Misión...";
  missionResult.textContent = "";
  missionProgressBar.style.width = "0%";
  missionProgressBar.textContent = "0%";
  closeMissionModalButton.classList.add("hidden");
  missionProgressContainer.classList.remove("hidden");
  showModal(missionModal);

  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    missionProgressBar.style.width = progress + "%";
    missionProgressBar.textContent = progress + "%";
    if (progress >= 100) {
      clearInterval(interval);
      missionTitle.textContent = "¡Misión Completada!";
      const moneyEarned = Math.floor(Math.random() * 50) + 20;
      const itemsFound = Math.random() > 0.5 ? ["Fragmento Raro", "Medicina"] : ["Componente Común"];

      gameState.money += moneyEarned;
      gameState.items.push(...itemsFound);

      missionResult.innerHTML = `¡Ha vuelto de la misión!<br>Ganancias: $${moneyEarned}<br>Objetos: ${itemsFound.join(", ")}`;
      updateUI();
      closeMissionModalButton.classList.remove("hidden");
    }
  }, 300);
}

closeMissionModalButton.addEventListener("click", () => hideModal(missionModal));

// Asignar eventos a los botones de acción
document.getElementById("talkButtonDesktop").addEventListener("click", startDialogue);
document.getElementById("equipButtonDesktop").addEventListener("click", () => showModal(equipModal));
document.getElementById("interactButtonDesktop").addEventListener("click", () => showModal(interactModal));
document.getElementById("missionButtonDesktop").addEventListener("click", startMission);

document.getElementById("talkButtonMobile").addEventListener("click", startDialogue);
document.getElementById("equipButtonMobile").addEventListener("click", () => showModal(equipModal));
document.getElementById("interactButtonMobile").addEventListener("click", () => showModal(interactModal));
document.getElementById("missionButtonMobile").addEventListener("click", startMission);

// Inicializar UI
updateUI();
