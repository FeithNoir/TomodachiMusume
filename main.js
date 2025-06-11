// --- BASE DE DATOS DE OBJETOS (Simulada) ---
const masterItemList = {
    'cheap_shirt': { name: 'Camisa Barata', type: 'top', path: './img/tops/cheapShirt.png' },
    'cheap_pants': { name: 'Pantalones Baratos', type: 'bottom', path: './img/bottoms/cheapPants.png' },
};

// --- ESTADO DEL JUEGO ---
const gameState = {
    affinity: 50,
    money: 100,
    energy: 100,
    inventory: [], // Ahora es un array de objetos: { id: 'item_id', quantity: 1 }
    equipped: {
        top: null,
        bottom: null,
    },
    expression: {
        eyes: './img/expressions/eyes_1.png',
        mouth: './img/expressions/mouth_1.png',
    },
    characterName: "Eleanora",
};

// --- CONSTANTES DE JUEGO ---
const MAX_INVENTORY_SLOTS = 20;
const MAX_STACK_SIZE = 10;
const MISSION_ENERGY_COST = 10;

// --- ELEMENTOS DEL DOM ---
const characterContainer = document.getElementById("characterContainer");
const characterBody = document.getElementById("characterBody");
const characterBottom = document.getElementById("characterBottom");
const characterTop = document.getElementById("characterTop");
const characterEyes = document.getElementById("characterEyes");
const characterMouth = document.getElementById("characterMouth");

const affinityDisplay = document.getElementById("affinityDisplay");
const moneyDisplay = document.getElementById("moneyDisplay");
const energyDisplay = document.getElementById("energyDisplay");

const talkModal = document.getElementById("talkModal");
const inventoryModal = document.getElementById("inventoryModal");
const interactModal = document.getElementById("interactModal");
const missionModal = document.getElementById("missionModal");
const notificationModal = document.getElementById("notificationModal");

// --- LÓGICA DE INVENTARIO ---
const inventoryGrid = document.getElementById("inventoryGrid");
const inventorySlotsDisplay = document.getElementById("inventorySlots");
const closeInventoryModalButton = document.getElementById("closeInventoryModal");

function addItemToInventory(itemId, quantity = 1) {
    if (!masterItemList[itemId]) {
        console.error(`Intento de añadir objeto inexistente: ${itemId}`);
        return;
    }
    const existingItem = gameState.inventory.find((item) => item.id === itemId);
    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity <= MAX_STACK_SIZE) {
            existingItem.quantity = newQuantity;
            // No mostramos notificación aquí para evitar spam en misiones
        } else {
            showNotification("Inventario", `¡No puedes llevar más ${masterItemList[itemId].name}! (Pila llena)`);
        }
    } else {
        if (gameState.inventory.length < MAX_INVENTORY_SLOTS) {
            gameState.inventory.push({ id: itemId, quantity });
        } else {
            showNotification("Inventario Lleno", "No tienes más espacio en el inventario.");
        }
    }
    updateUI();
}

function renderInventory() {
    inventoryGrid.innerHTML = "";
    inventorySlotsDisplay.textContent = gameState.inventory.length;
    gameState.inventory.forEach((item, index) => {
        const itemData = masterItemList[item.id];
        const itemDiv = document.createElement("div");
        itemDiv.className = "inventory-item";
        const isEquipped = gameState.equipped[itemData.type] === item.id;
        if (isEquipped) {
            itemDiv.classList.add("equipped");
        }
        itemDiv.innerHTML = `
            <img src="${itemData.path}" alt="${itemData.name}" class="w-full h-auto object-contain">
            <span class="item-quantity">${item.quantity}</span>
        `;
        itemDiv.onclick = () => handleItemClick(item.id, index);
        inventoryGrid.appendChild(itemDiv);
    });
}

function handleItemClick(itemId) {
    const itemData = masterItemList[itemId];
    const itemType = itemData.type;
    if (gameState.equipped[itemType] === itemId) {
        gameState.equipped[itemType] = null;
    } else {
        gameState.equipped[itemType] = itemId;
    }
    updateUI();
    renderInventory();
}

closeInventoryModalButton.addEventListener("click", () => hideModal(inventoryModal));

// --- LÓGICA DE EXPRESIONES Y ANIMACIONES ---
function startBlinking() {
    setInterval(() => {
        if (gameState.expression.eyes === "./img/expressions/eyes_1.png") {
            characterEyes.src = "./img/expressions/eyes_2.png";
            setTimeout(() => {
                characterEyes.src = gameState.expression.eyes;
            }, 150);
        }
    }, Math.random() * 4000 + 3000);
}

characterContainer.addEventListener("click", () => {
    characterEyes.src = "./img/expressions/eyes_2.png";
    characterMouth.src = "./img/expressions/mouth_2.png";
    setTimeout(() => {
        characterEyes.src = gameState.expression.eyes;
        characterMouth.src = gameState.expression.mouth;
    }, 800);
});

// --- LÓGICA DE MISIONES (MODIFICADA) ---
const missionTitle = document.getElementById("missionTitle");
const missionProgressBar = document.getElementById("missionProgressBar");
const missionProgressContainer = document.getElementById("missionProgressContainer");
const missionResult = document.getElementById("missionResult");
const closeMissionModalButton = document.getElementById("closeMissionModal");

function startMission() {
    if (gameState.energy < MISSION_ENERGY_COST) {
        showNotification("Sin Energía", `Necesitas al menos ${MISSION_ENERGY_COST} de energía para ir de misión.`);
        return;
    }
    gameState.energy -= MISSION_ENERGY_COST;
    updateUI();
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
            calculateMissionRewards();
            updateUI();
            closeMissionModalButton.classList.remove("hidden");
        }
    }, 300);
}

function calculateMissionRewards() {
    const rand = Math.random() * 100;
    let resultText = "¡Ha vuelto de la misión!<br>";
    let moneyEarned = 0;
    let itemsFoundIds = [];
    const possibleItems = Object.keys(masterItemList);
    if (rand < 30) {
        resultText += "No encontró nada esta vez...";
    } else if (rand < 50) {
        moneyEarned = 10;
    } else if (rand < 60) {
        moneyEarned = 20;
    } else if (rand < 65) {
        moneyEarned = 100;
    } else if (rand < 75) {
        moneyEarned = 10;
        itemsFoundIds.push(possibleItems[Math.floor(Math.random() * possibleItems.length)]);
    } else if (rand < 85) {
        moneyEarned = 20;
        itemsFoundIds.push(possibleItems[Math.floor(Math.random() * possibleItems.length)]);
    } else if (rand < 90) {
        moneyEarned = 100;
        itemsFoundIds.push(possibleItems[Math.floor(Math.random() * possibleItems.length)]);
    } else {
        itemsFoundIds.push(possibleItems[Math.floor(Math.random() * possibleItems.length)]);
        itemsFoundIds.push(possibleItems[Math.floor(Math.random() * possibleItems.length)]);
    }
    if (moneyEarned > 0) {
        gameState.money += moneyEarned;
        resultText += `Ganancias: $${moneyEarned}<br>`;
    }
    if (itemsFoundIds.length > 0) {
        const itemNames = [];
        itemsFoundIds.forEach((itemId) => {
            addItemToInventory(itemId, 1);
            itemNames.push(masterItemList[itemId].name);
        });
        resultText += `Objetos: ${itemNames.join(", ")}`;
    }
    missionResult.innerHTML = resultText;
}

closeMissionModalButton.addEventListener("click", () => hideModal(missionModal));

// --- FUNCIONES GENERALES Y UI ---
function updateUI() {
    // Estado
    affinityDisplay.textContent = gameState.affinity;
    moneyDisplay.textContent = gameState.money;
    energyDisplay.textContent = gameState.energy;

    // --- Personaje ---
    // Top (Camisa)
    if (gameState.equipped.top) {
        characterTop.src = masterItemList[gameState.equipped.top].path;
        characterTop.classList.remove('hidden-item'); // Muestra la capa
    } else {
        characterTop.classList.add('hidden-item'); // Oculta la capa
        characterTop.src = ''; // Opcional: limpiar el src para estar seguros
    }

    // Bottom (Pantalones)
    if (gameState.equipped.bottom) {
        characterBottom.src = masterItemList[gameState.equipped.bottom].path;
        characterBottom.classList.remove('hidden-item'); // Muestra la capa
    } else {
        characterBottom.classList.add('hidden-item'); // Oculta la capa
        characterBottom.src = ''; // Opcional: limpiar el src
    }

    // Expresiones
    characterEyes.src = gameState.expression.eyes;
    characterMouth.src = gameState.expression.mouth;
}

function showModal(modal) {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
}

function hideModal(modal) {
    modal.classList.add("opacity-0");
    setTimeout(() => modal.classList.add("hidden"), 300);
}

// <-- CORRECCIÓN: Usamos las funciones específicas del modal de diálogo para la animación de deslizamiento.
function showTalkModal() {
    talkModal.classList.remove("hidden", "opacity-0", "translate-y-full");
}

function hideTalkModal() {
    talkModal.classList.add("opacity-0", "translate-y-full");
    setTimeout(() => talkModal.classList.add("hidden"), 300);
}

// --- LÓGICA DE MENÚ Y NOTIFICACIONES ---
const hamburgerButton = document.getElementById("hamburgerButton");
const menuPanel = document.getElementById("menu-panel");
hamburgerButton.addEventListener("click", () => menuPanel.classList.toggle("-translate-x-full"));
document.addEventListener("click", (event) => {
    if (!menuPanel.contains(event.target) && !hamburgerButton.contains(event.target) && !menuPanel.classList.contains("-translate-x-full")) {
        menuPanel.classList.add("-translate-x-full");
    }
});

const notificationTitle = document.getElementById("notificationTitle");
const notificationMessage = document.getElementById("notificationMessage");
const closeNotificationModalButton = document.getElementById("closeNotificationModal");

function showNotification(title, message) {
    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    showModal(notificationModal);
}
closeNotificationModalButton.addEventListener("click", () => hideModal(notificationModal));

// --- LÓGICA DE DIÁLOGO ---
// <-- CORRECCIÓN: Se ha añadido toda la lógica de diálogo del script antiguo.
const dialogueText = document.getElementById("dialogueText");
const dialogueOptionsContainer = document.getElementById("dialogueOptions");
const characterNameElement = document.getElementById("characterName");

const dialogues = [{
    character: "Eleanora",
    text: "¿Cómo crees que me fue en el entrenamiento de hoy?",
    options: [
        { text: "¡Seguro que genial! Eres muy fuerte.", affinityChange: 10 },
        { text: "Espero que bien, debes esforzarte más.", affinityChange: -5 },
        { text: "No lo sé, cuéntame más.", affinityChange: 2 },
        { text: "El entrenamiento es clave, ¡sigue así!", affinityChange: 3 },
    ],
}, {
    character: "Eleanora",
    text: "A veces me pregunto si todo este esfuerzo vale la pena...",
    options: [
        { text: "¡Claro que sí! Estás protegiendo a muchos.", affinityChange: 15 },
        { text: "Si tienes dudas, quizás deberías reconsiderarlo.", affinityChange: -10 },
        { text: "Todos tenemos dudas, es normal.", affinityChange: 5 },
        { text: "Tu esfuerzo inspira a otros.", affinityChange: 7 },
    ],
}, ];

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

// --- LÓGICA DE INTERACCIÓN ---
// <-- CORRECCIÓN: Se ha añadido la lógica de los botones del modal de interacción.
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


// --- INICIALIZACIÓN Y EVENTOS ---
document.getElementById("talkButtonDesktop").addEventListener("click", startDialogue);
document.getElementById("equipButtonDesktop").addEventListener("click", () => {
    renderInventory();
    showModal(inventoryModal);
});
document.getElementById("interactButtonDesktop").addEventListener("click", () => showModal(interactModal));
document.getElementById("missionButtonDesktop").addEventListener("click", startMission);

document.getElementById("talkButtonMobile").addEventListener("click", startDialogue);
document.getElementById("equipButtonMobile").addEventListener("click", () => {
    renderInventory();
    showModal(inventoryModal);
});
document.getElementById("interactButtonMobile").addEventListener("click", () => showModal(interactModal));
document.getElementById("missionButtonMobile").addEventListener("click", startMission);

// --- INICIO DEL JUEGO ---
updateUI();
startBlinking();