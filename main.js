const UI_TEXTS = {
    // ---- Indicadores y Menú Principal ----
    affinity: { es: "Afinidad", en: "Affinity" },
    money: { es: "Dinero", en: "Money" },
    energy: { es: "Energía", en: "Energy" },
    satiety: { es: "Saciedad", en: "Satiety" },
    menuTitle: { es: "Menú", en: "Menu" },
    options: { es: "Opciones", en: "Options" },
    save: { es: "Guardar", en: "Save" },
    gallery: { es: "Galería (Próximamente)", en: "Gallery (Coming Soon)" },
    exit: { es: "Salir (Simulado)", en: "Exit (Simulated)" },
    placeholder_name: { es: "Escribe tu nombre...", en: "Enter your name..." },
    confirm: { es: "Confirmar", en: "Confirm" },
    next: { es: "Siguiente", en: "Next" },

    // ---- Botones de Acción ----
    talk: { es: "Hablar", en: "Talk" },
    equip: { es: "Equipo", en: "Gear" },
    interact: { es: "Interactuar", en: "Interact" },
    mission: { es: "Misión", en: "Mission" },
    market: { es: "Mercado", en: "Market" },
    craft: { es: "Crear", en: "Craft" },

    // ---- Títulos de Modales ----
    inventoryTitle: { es: "Inventario", en: "Inventory" },
    optionsTitle: { es: "Opciones", en: "Options" },
    language: { es: "Idioma", en: "Language" },
    close: { es: "Cerrar", en: "Close" },
    back: { es: "Volver", en: "Back" },
    marketTitle: { es: "Mercado", en: "Market" },
    marketPrompt: { es: "¿Qué te gustaría hacer?", en: "What would you like to do?" },
    buy: { es: "Comprar", en: "Buy" },
    sell: { es: "Vender", en: "Sell" },
    buyTitle: { es: "Comprar Objetos", en: "Buy Items" },
    sellTitle: { es: "Vender Objetos", en: "Sell Items" },
    sellConfirmTitle: { es: "Vender Objeto", en: "Sell Item" },
    sellConfirmPrompt: { es: "¿Cuántos quieres vender?", en: "How many do you want to sell?" },
    confirmSell: { es: "Confirmar Venta", en: "Confirm Sale" },
    cancel: { es: "Cancelar", en: "Cancel" },
    interactTitle: { es: "Interactuar", en: "Interact" },
    feed: { es: "Alimentar", en: "Feed" },
    playMinigame: { es: "Jugar Minijuego (Próximamente)", en: "Play Minigame (Coming Soon)" },
    missionTitle: { es: "Enviando a Misión...", en: "Sending on Mission..." },
    missionComplete: { es: "¡Misión Completada!", en: "Mission Complete!" },
    notificationTitle: { es: "Notificación", en: "Notification" },
    understood: { es: "Entendido", en: "Understood" },
    craftingTitle: { es: "Mesa de Trabajo", en: "Workbench" },
    craftingSlots: { es: "Ranuras de Creación", en: "Crafting Slots" },
    availableMaterials: { es: "Materiales Disponibles", en: "Available Materials" },
    emptySlot: { es: "Vacío", en: "Empty" },
    craftItem: { es: "Crear Objeto", en: "Craft Item" },
    recipeBookTitle: { es: "Libro de Recetas", en: "Recipe Book" },

    // ---- Notificaciones y Mensajes ----
    noSellEquipped: { es: "No se puede vender", en: "Cannot Sell" },
    noSellEquippedMsg: { es: "No puedes vender la última unidad de un objeto que llevas equipado.", en: "You can't sell the last unit of an equipped item." },
    insufficientAffinity: { es: "Afinidad Insuficiente", en: "Insufficient Affinity" },
    insufficientAffinityMsg: { es: (req) => ({ es: `Necesitas ${req} de afinidad para equipar esto.`, en: `You need ${req} affinity to equip this.` }) },
    fundsInsufficient: { es: "Fondos Insuficientes", en: "Insufficient Funds" },
    fundsInsufficientMsg: { es: "No tienes suficiente dinero para comprar esto.", en: "You don't have enough money to buy this." },
    inventoryFull: { es: "Inventario Lleno", en: "Inventory Full" },
    inventoryFullMsg: { es: "No tienes espacio para un nuevo tipo de objeto.", en: "You don't have space for a new type of item." },
    stackFull: { es: "Pila Llena", en: "Stack Full" },
    stackFullMsg: { es: (name) => ({ es: `Ya tienes el máximo de ${name}.`, en: `You already have the maximum amount of ${name}.` }) },
    buySuccess: { es: "Compra Exitosa", en: "Purchase Successful" },
    buySuccessMsg: { es: (name) => ({ es: `¡Has comprado ${name}!`, en: `You bought ${name}!` }) },
    sellSuccess: { es: "Venta Exitosa", en: "Sale Successful" },
    sellSuccessMsg: { es: (qty, name, price) => ({ es: `¡Has vendido ${qty}x ${name} por $${price}!`, en: `You sold ${qty}x ${name} for $${price}!` }) },
    craftSuccess: { es: "¡Éxito!", en: "Success!" },
    craftSuccessMsg: { es: (name) => ({ es: `Has creado ${name}.`, en: `You crafted ${name}.` }) },
    craftFail: { es: "Fallo", en: "Failure" },
    craftFailMsg: { es: "Los ingredientes no producen nada.", en: "The ingredients don't produce anything." },
    saveSuccessTitle: { es: "Progreso Guardado", en: "Progress Saved" },
    saveSuccessMsg: { es: "¡Tu partida se ha guardado correctamente!", en: "Your game has been saved successfully!" },
    saveErrorTitle: { es: "Error al Guardar", en: "Save Error" },
    saveErrorMsg: { es: "No se pudo guardar la partida. El almacenamiento podría estar lleno.", en: "Could not save the game. Storage might be full." },
    saveVersionMismatchTitle: { es: "Partida Incompatible", en: "Incompatible Save" },
    saveVersionMismatchMsg: { es: "Tu partida guardada es de una versión anterior y ha sido eliminada para evitar errores. Se iniciará un nuevo juego.", en: "Your saved game is from an older version and has been deleted to prevent errors. A new game will be started." },
    welcomeBack: { es: "¡Bienvenida de nuevo!", en: "Welcome back!" },
    gameLoaded: { es: "Tu partida ha sido cargada.", en: "Your game has been loaded." },
    itemUsed: { es: "Objeto Usado", en: "Item Used" },
    itemUsedMsg: { es: (name) => ({ es: `Has usado ${name}.`, en: `You used ${name}.` }) },
    cannotEquip: { es: "No Equipable", en: "Cannot Equip" },
    cannotEquipMsg: { es: "Este objeto no se puede equipar.", en: "This item cannot be equipped." },

    // ---- Textos de Recompensas de Misión ----
    missionReturn: { es: "¡Ha vuelto de la misión!", en: "She has returned from the mission!" },
    missionReturnNothing: { es: "No encontró nada esta vez...", en: "She didn't find anything this time..." },
    missionGains: { es: "Ganancias", en: "Earnings" },
    missionItems: { es: "Objetos", en: "Items" },
    recipeDiscoveredTitle: { es: "¡Receta Descubierta!", en: "Recipe Discovered!" },
    recipeDiscoveredMsg: { es: (name) => ({ es: `Has encontrado la ${name}.`, en: `You found the ${name}.` }) },
};

// --- BASE DE DATOS DE OBJETOS (Simulada) ---
const masterItemList = {
    // ---- Ropa Interior ----
    'bra_1': { name: { es: 'Sujetador Básico', en: 'Basic Bra' }, type: 'bra', path: './img/bra/bra_1.png', requiredAffinity: 40 },
    'bra_2': { name: { es: 'Sujetador de Encaje', en: 'Lace Bra' }, type: 'bra', path: './img/bra/bra_2.png', requiredAffinity: 40 },
    'pantsus_1': { name: { es: 'Braguitas Básicas', en: 'Basic Panties' }, type: 'pantsus', path: './img/pantsus/pantsus_1.png', requiredAffinity: 40 },
    'pantsus_2': { name: { es: 'Braguitas de Lazo', en: 'Ribbon Panties' }, type: 'pantsus', path: './img/pantsus/pantsus_2.png', requiredAffinity: 40 },
    
    // ---- Ropa Casual ----
    'cheap_shirt': { name: { es: 'Camisa Barata', en: 'Cheap Shirt' }, type: 'top', path: './img/tops/cheap_shirt.png' },
    'good_shirt': { name: { es: 'Camisa Buena', en: 'Good Shirt' }, type: 'top', path: './img/tops/good_shirt.png' },
    'casual_top': { name: { es: 'Top Casual', en: 'Casual Top' }, type: 'top', path: './img/tops/casual_top.png' },
    'cheap_pants': { name: { es: 'Pantalones Baratos', en: 'Cheap Pants' }, type: 'bottom', path: './img/bottoms/cheap_pants.png' },
    'good_pants': { name: { es: 'Pantalones Buenos', en: 'Good Pants' }, type: 'bottom', path: './img/bottoms/good_pants.png' },
    'mini_skirt': { name: { es: 'Mini Falda', en: 'Mini Skirt' }, type: 'bottom', path: './img/bottoms/mini_skirt.png' },
    
    // ---- Trajes y Sets Temáticos ----
    'bunny_suit': { name: { es: 'Traje de Conejita', en: 'Bunny Suit' }, type: 'suit', path: './img/suits/bunny_suit.png', requiredAffinity: 70 },
    'bunny_ears': { name: { es: 'Orejas de Coneja', en: 'Bunny Ears' }, type: 'head', path: './img/head/bunny_ears.png', requiredAffinity: 70 },
    'bunny_stocks': { name: { es: 'Medias de Conejita', en: 'Bunny Stockings' }, type: 'stockings', path: './img/stocks/bunny_stocks.png', requiredAffinity: 70 },
    'east_suit': { name: { es: 'Atuendo Oriental', en: 'Eastern Outfit' }, type: 'suit', path: './img/suits/east_suit.png', requiredAffinity: 70 },
    'east_stocks': { name: { es: 'Medias Orientales', en: 'Eastern Stockings' }, type: 'stockings', path: './img/stocks/east_stocks.png', requiredAffinity: 70 },
    'leotard': { name: { es: 'Leotardo', en: 'Leotard' }, type: 'suit', path: './img/suits/leotard.png', requiredAffinity: 80 },
    'maid_diadema': { name: { es: 'Diadema de Doncella', en: 'Maid Diadem' }, type: 'head', path: './img/head/maid_diadema.png', requiredAffinity: 50 },
    'maid_top': { name: { es: 'Top de Doncella', en: 'Maid Top' }, type: 'top', path: './img/tops/maid_top.png', requiredAffinity: 50 },
    'maid_skirt': { name: { es: 'Falda de Doncella', en: 'Maid Skirt' }, type: 'bottom', path: './img/bottoms/maid_skirt.png', requiredAffinity: 50 },
    'maid_stocks': { name: { es: 'Medias de Doncella', en: 'Maid Stockings' }, type: 'stockings', path: './img/stocks/maid_stocks.png', requiredAffinity: 50 },
    'maid_guantelets': { name: { es: 'Guantes de Doncella', en: 'Maid Gauntlets' }, type: 'hands', path: './img/hands/maid_guantelets.png', requiredAffinity: 50 },
    'neko_ears': { name: { es: 'Orejas de Gato', en: 'Cat Ears' }, type: 'head', path: './img/head/neko_ears.png' },
    
    // ---- Equipamiento de Cuero (Crafteable) ----
    'leather_shirt': { name: { es: 'Coraza de Cuero', en: 'Leather Cuirass' }, type: 'top', path: './img/tops/leather_shirt.png' },
    'leather_skirt': { name: { es: 'Falda de Cuero', en: 'Leather Skirt' }, type: 'bottom', path: './img/bottoms/leather_skirt.png' },
    'leather_guantelets': { name: { es: 'Guanteletes de Cuero', en: 'Leather Gauntlets' }, type: 'hands', path: './img/hands/leather_guantelets.png' },
    'leather_stocks': { name: { es: 'Medias de Cuero', en: 'Leather Stockings' }, type: 'stockings', path: './img/stocks/leatherStocks.png' },

    // ---- Equipamiento de Acero (Crafteable) ----
    'steel_armor': { name: { es: 'Armadura de Acero', en: 'Steel Armor' }, type: 'top', path: './img/tops/steel_armor.png' },
    'steel_skirt': { name: { es: 'Falda de Acero', en: 'Steel Skirt' }, type: 'bottom', path: './img/bottoms/steel_skirt.png' },
    'steel_guantelets': { name: { es: 'Guanteletes de Acero', en: 'Steel Gauntlets' }, type: 'hands', path: './img/hands/steel_guantelets.png' },
    'steel_stocks': { name: { es: 'Mallas de Acero', en: 'Steel Stockings' }, type: 'stockings', path: './img/stocks/steel_stocks.png' },

    // ---- Equipamiento de Escamas (Crafteable) ----
    'scale_armor': { name: { es: 'Coraza de Escamas', en: 'Scale Cuirass' }, type: 'top', path: './img/tops/scale_armor.png' },
    'scale_skirt': { name: { es: 'Falda de Escamas', en: 'Scale Skirt' }, type: 'bottom', path: './img/bottoms/scale_skirt.png' },
    'scale_guantelets': { name: { es: 'Guanteletes de Escamas', en: 'Scale Gauntlets' }, type: 'hands', path: './img/hands/scale_guantelets.png' },
    'scale_stocks': { name: { es: 'Medias de Escamas', en: 'Scale Stockings' }, type: 'stockings', path: './img/stocks/scale_stocks.png' },

    // ---- Armas ----
    'wooden_sword': { name: { es: 'Espada de Madera', en: 'Wooden Sword' }, type: 'weapon', path: './img/items/sword_wood.png', effects: { missionBonus: { nothingChance: -0.05, itemChance: 0.05 } } },
    'iron_sword': { name: { es: 'Espada de Hierro', en: 'Iron Sword' }, type: 'weapon', path: './img/items/sword_iron.png', effects: { missionBonus: { nothingChance: -0.15, itemChance: 0.15 } } },
    'steel_sword': { name: { es: 'Espada de Acero', en: 'Steel Sword' }, type: 'weapon', path: './img/items/sword_steel.png', effects: { missionBonus: { nothingChance: -0.25, itemChance: 0.25 } } },
    
    // ---- Consumibles ----
    'energy_drink': { name: { es: 'Bebida Energética', en: 'Energy Drink' }, type: 'consumable', path: './img/items/energy_drink.png', effects: { energy: 25 } },
    
    // ---- Materiales ----
    'wood_plank': { name: { es: 'Tabla de Madera', en: 'Wood Plank' }, type: 'material', path: './img/items/wood.png' },
    'iron_ore': { name: { es: 'Mena de Hierro', en: 'Iron Ore' }, type: 'material', path: './img/items/iron.png' },
    'steel_ingot': { name: { es: 'Lingote de Acero', en: 'Steel Ingot' }, type: 'material', path: './img/items/steel.png' },

    // ---- Recetas ----
    'recipe_steel_sword': { name: { es: 'Receta: Espada de Acero', en: 'Recipe: Steel Sword' }, type: 'recipe', path: './img/items/recipe.png', recipeId: 'steel_sword_recipe' },
};

// --- BASE DE DATOS DE RECETAS ---
const recipes = {
    'steel_sword_recipe': {
        result: 'steel_sword',
        ingredients: [
            { id: 'steel_ingot', quantity: 3 },
            { id: 'wood_plank', quantity: 1 },
        ]
    },
    'wood_sword_recipe': {
        result: 'wood_sword',
        ingredients: [
            { id: 'wood_plank', quantity: 3 },
            { id: 'steel_ingot', quantity: 1 },
        ]
    },
    'leather_shirt_recipe': { 
        result: 'leather_shirt', 
        ingredients: [ 
            { id: 'wood_plank', quantity: 2 } 
        ] 
    },
    'leather_skirt_recipe': { 
        result: 'leather_skirt', 
        ingredients: 
        [ 
            { id: 'wood_plank', quantity: 2 } 
        ] 
    },
    // Aquí se podrían añadir más recetas...
};

// --- FUNCIÓN DE CÁLCULO DE PRECIOS ---
// Base: 100, Factor: 1.5. Nivel 1: 100, Nivel 2: ~183, Nivel 3: ~294
function calculatePrice(basePrice, level) {
    return Math.floor(basePrice * Math.log(level + 1) * 1.5);
}

// --- BASE DE DATOS DE LA TIENDA ---
const shopInventory = [];
Object.keys(masterItemList).forEach(id => {
    const item = masterItemList[id];
    // Asignar precios dinámicos a ropa y armas no crafteables
    if (item.type === 'top' || item.type === 'bottom' || item.type === 'weapon') {
        if (!Object.values(recipes).find(r => r.result === id)) {
            // Un "nivel" arbitrario para la fórmula de precios
            let itemLevel = 1;
            if (id.includes('good')) itemLevel = 3;
            if (id.includes('iron')) itemLevel = 5;
            item.buyPrice = calculatePrice(100, itemLevel);
            item.sellPrice = Math.floor(item.buyPrice / 3);
            shopInventory.push(id);
        }
    }
    // Añadir sets temáticos y otros objetos a la tienda manualmente
    if (['suit', 'head', 'stockings', 'consumable'].includes(item.type)) {
         // Precios fijos para estos
        if(item.buyPrice === undefined) {
          item.buyPrice = 500; 
          item.sellPrice = 150;
        }
        shopInventory.push(id);
    }
});

// --- REACCIONES POR AFINIDAD ---
const affinityReactions = [
    { level: 0, eyes: './img/expressions/eyes_angry.png', mouth: './img/expressions/mouth_angry.png', text: { es: "¡No me toques!", en: "Don't touch me!" } },
    { level: 25, eyes: './img/expressions/eyes_surprised.png', mouth: './img/expressions/mouth_surprised.png', text: { es: "¿Q-qué haces?", en: "W-what are you doing?" } },
    { level: 50, eyes: './img/expressions/eyes_blush.png', mouth: './img/expressions/mouth_blush.png', text: { es: "E-está bien...", en: "I-it's okay..." } },
    { level: 75, eyes: './img/expressions/eyes_happy.png', mouth: './img/expressions/mouth_happy.png', text: { es: "¡Me gusta que me acaricies!", en: "I like it when you pet me!" } }
];

// --- TABLAS DE LOOT DE MISIONES ---
const missionLoot = {
    materials: { 'wood_plank': 0.4, 'iron_ore': 0.1 }, // Probabilidad de encontrar cada material
    recipes: { 'recipe_steel_sword': 0.05 } // 5% de probabilidad de encontrar esta receta
};

// --- ESTADO DEL JUEGO ---
const GAME_VERSION = "0.0.1";
const gameState = {
    version: GAME_VERSION,
    language: 'en',
    affinity: 10,
    money: 100,
    energy: 100,
    satiety: 0,
    playerName: "Jefe",
    guildName: "Oniriums",
    hasCompletedIntro: false,
    inventory: [],
    equipped: {
        top: 'cheap_shirt',      // Equipada por defecto
        bottom: 'cheap_pants',   // Equipada por defecto
        suit: null,
        head: null,
        stockings: null,
        bra: 'bra_1',
        pantsus: 'pantsus_1',
        hands: null,
        weapon: null,
    },
    knownRecipes: [],
    expression: { eyes: './img/expressions/eyes_1.png', mouth: './img/expressions/mouth_1.png' },
    characterName: "Eleanora",
};

// --- GESTIÓN DE CRAFTEO ---
let craftingSlots = [null, null, null, null];

// --- CONSTANTES DE JUEGO ---
const MAX_INVENTORY_SLOTS = 20;
const MAX_STACK_SIZE = 10;
const MISSION_ENERGY_COST = 10;
const SAVE_KEY = 'tomodachiMusumeSave';
const ENERGY_RECOVERY_RATE = 1; // Puntos de energía a recuperar por tick
const ENERGY_RECOVERY_INTERVAL = 3000; // 3 segundos (100 puntos en 5 minutos)
const SATIETY_DECAY_RATE = 1; // Puntos de saciedad a perder por tick
const SATIETY_DECAY_INTERVAL = 3000; // 3 segundos (100 puntos en 5 minutos)
const FEED_SATIETY_COST = 20; // Cuánta "saciedad" cuesta alimentar
const FEED_ENERGY_GAIN = 5; // Cuánta energía da alimentar

// --- GESTIÓN DE TIMERS ---
let energyRecoveryTimerId = null;
let satietyDecayTimerId = null;

// --- ELEMENTOS DEL DOM ---
const characterContainer = document.getElementById("characterContainer");
const characterBody = document.getElementById("characterBody");
const characterBottom = document.getElementById("characterBottom");
const characterTop = document.getElementById("characterTop");
const characterEyes = document.getElementById("characterEyes");
const characterMouth = document.getElementById("characterMouth");
const characterStockings = document.getElementById("characterStockings");

const affinityDisplay = document.getElementById("affinityDisplay");
const moneyDisplay = document.getElementById("moneyDisplay");
const energyDisplay = document.getElementById("energyDisplay");

const talkModal = document.getElementById("talkModal");
const inventoryModal = document.getElementById("inventoryModal");
const interactModal = document.getElementById("interactModal");
const missionModal = document.getElementById("missionModal");
const notificationModal = document.getElementById("notificationModal");
const saveButton = document.getElementById("saveButton");
const satietyDisplay = document.getElementById("satietyDisplay");
const marketModal = document.getElementById("marketModal");
const buyModal = document.getElementById("buyModal");
const sellModal = document.getElementById("sellModal");
const sellConfirmationModal = document.getElementById("sellConfirmationModal");
const shopGrid = document.getElementById("shopGrid");
const sellGrid = document.getElementById("sellGrid");
const craftingModal = document.getElementById("craftingModal");
const recipeBookModal = document.getElementById("recipeBookModal");
const characterSuit = document.getElementById("characterSuit");
const characterHead = document.getElementById("characterHead");
const characterBra = document.getElementById("characterBra");
const characterPantsus = document.getElementById("characterPantsus");
const characterHands = document.getElementById("characterHands");
const reactionDialogue = document.getElementById("reactionDialogue");
const introModal = document.getElementById("introModal");
const introContent = document.getElementById("introContent");
const optionsModal = document.getElementById("optionsModal");
const languageSelect = document.getElementById("languageSelect");

// --- LÓGICA DE INVENTARIO ---
const inventoryGrid = document.getElementById("inventoryGrid");
const inventorySlotsDisplay = document.getElementById("inventorySlots");
const closeInventoryModalButton = document.getElementById("closeInventoryModal");

// --- FUNCIÓN HELPER PARA i18n (NUEVA) ---
function getText(key) {
    const source = UI_TEXTS[key];
    if (source && source[gameState.language]) {
        return source[gameState.language];
    }
    // Fallback al inglés si la traducción no existe
    return source ? source.en : key;
}

// --- LÓGICA DE INTRODUCCIÓN ---
function runIntroScene() {
    showModal(introModal);
    let step = 0;
    const steps = [
        { text: { es: `Selecciona un lenguaje: `, en: `Select a language:` }, prompt: 'language' },
        { text: { es: `Hola. Bienvenido a... bueno, a nuestro nuevo gremio, ${gameState.guildName}!`, en: `Uhm... hello. Welcome to... well, to our new guild, the "${gameState.guildName}"!` } },
        { text: { es: "Soy Eleanora. Supongo que trabajaremos juntos.", en: "I'm Eleanora. I guess we'll be working together from now on." } },
        { text: { es: "¿Cómo debería llamarte?", en: "By the way... I don't know your name yet. What should I call you?" }, prompt: 'playerName' },
        { text: (name) => ({ es: `¿${name}? Es un buen nombre.`, en: `${name}? That's a nice name.` }) },
        { text: { es: "Espero que nos llevemos bien.", en: "I hope we get along." } }
    ];

    const showNextStep = () => {
        // La lógica para salir de la intro se mueve al principio para mayor claridad
        if (step >= steps.length) {
            gameState.hasCompletedIntro = true;
            // Después de la intro, damos los objetos iniciales de una partida nueva
            addItemToInventory("cheap_shirt", 1);
            addItemToInventory("cheap_pants", 1);
            hideModal(introModal);
            initializeGame(); // Continuamos con la inicialización normal
            return;
        }

        const currentStep = steps[step];
        let stepText = currentStep.text;
        if (typeof stepText === 'function') stepText = stepText(gameState.playerName);
        
        // El texto se genera primero, usando el idioma ya establecido (o el default 'en')
        let contentHTML = `<p class="fade-in">${stepText[gameState.language]}</p>`;
        
        // --- SECCIÓN CLAVE DE LA CORRECCIÓN ---
        // Generamos el HTML de los botones según el tipo de prompt
        if (currentStep.prompt === 'language') {
            contentHTML += `
                <div class="my-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button class="lang-choice intro-button !w-auto !px-6" data-lang="es">Español</button>
                    <button class="lang-choice intro-button !w-auto !px-6" data-lang="en">English</button>
                </div>
            `;
        } else if (currentStep.prompt === 'playerName') {
            contentHTML += `
                <input type="text" id="nameInput" class="w-full max-w-sm p-2 rounded bg-amber-950 text-center my-4" placeholder="${getText('placeholder_name')}">
                <button id="confirmNameButton" class="intro-button !w-auto !px-6 mx-auto">${getText('confirm')}</button>
            `;
        } else {
            // Para cualquier otro paso que no tenga prompt, se crea el botón "Siguiente"
            contentHTML += `<button id="continueIntroButton" class="intro-button !w-auto !px-6 mx-auto mt-6">${getText('next')}</button>`;
        }
        
        introContent.innerHTML = contentHTML;
        
        // --- SECCIÓN CLAVE DE LOS LISTENERS ---
        // Ahora, asignamos el listener SOLO al botón que sabemos que existe en este paso
        if (currentStep.prompt === 'language') {
            document.querySelectorAll('.lang-choice').forEach(button => {
                button.onclick = (e) => {
                    gameState.language = e.target.dataset.lang;
                    step++;
                    showNextStep();
                };
            });
        } else if (currentStep.prompt === 'playerName') {
            document.getElementById('confirmNameButton').onclick = () => {
                const nameInput = document.getElementById('nameInput');
                if (nameInput.value.trim() !== "") {
                    gameState.playerName = nameInput.value.trim();
                    step++;
                    showNextStep();
                }
            };
        } else {
            document.getElementById('continueIntroButton').onclick = () => {
                step++;
                showNextStep();
            };
        }
    };
    showNextStep();
}

// --- LÓGICA DE CRAFTEO ---
function openCraftingModal() {
    craftingSlots = [null, null, null, null]; // Reseteamos las ranuras
    renderCraftingUI();
    showModal(craftingModal);
}

function renderCraftingUI() {
    renderCraftingSlots();
    renderCraftingMaterials();
}

function renderCraftingSlots() {
    const grid = document.getElementById('craftingSlotsGrid');
    grid.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'inventory-item h-24 flex items-center justify-center';
        if (craftingSlots[i]) {
            const item = masterItemList[craftingSlots[i]];
            slotDiv.innerHTML = `<img src="${item.path}" class="w-16 h-16" title="${item.name[gameState.language] || itemData.name['en']}">`;
            slotDiv.onclick = () => removeFromCraftingSlot(i);
        } else {
            slotDiv.innerHTML = `<span class="text-gray-500 text-xs">Vacío</span>`;
            slotDiv.onclick = null;
        }
        grid.appendChild(slotDiv);
    }
}

function renderCraftingMaterials() {
    const grid = document.getElementById('craftingMaterialsGrid');
    grid.innerHTML = '';
    const materialsInInventory = gameState.inventory.filter(item => masterItemList[item.id].type === 'material');
    
    if (materialsInInventory.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-400">No tienes materiales.</p>`;
        return;
    }

    materialsInInventory.forEach(item => {
        const itemData = masterItemList[item.id];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item text-center p-1 cursor-pointer';
        itemDiv.innerHTML = `
            <img src="${itemData.path}" class="w-12 h-12 mx-auto">
            <p class="text-xs">${itemData.name} (x${item.quantity})</p>
        `;
        itemDiv.onclick = () => addToCraftingSlot(item.id);
        grid.appendChild(itemDiv);
    });
}

function addToCraftingSlot(itemId) {
    const emptySlotIndex = craftingSlots.findIndex(slot => slot === null);
    if (emptySlotIndex === -1) {
        showNotification("Ranuras Llenas", "No hay más espacio en la mesa de trabajo.");
        return;
    }
    
    // Simulación simple: se añade uno a la ranura. Para una lógica real de cantidades se necesitaría más complejidad.
    craftingSlots[emptySlotIndex] = itemId;
    renderCraftingUI();
}

function removeFromCraftingSlot(slotIndex) {
    craftingSlots[slotIndex] = null;
    renderCraftingUI();
}

function attemptCraft() {
    const ingredientsInSlots = craftingSlots.filter(s => s !== null).reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
    }, {});
    
    let craftedItem = null;
    for (const recipeId in recipes) {
        const recipe = recipes[recipeId];
        const requiredIngredients = recipe.ingredients.reduce((acc, ing) => ({...acc, [ing.id]: ing.quantity }), {});

        // Comprobamos si los ingredientes coinciden
        const requiredKeys = Object.keys(requiredIngredients);
        const providedKeys = Object.keys(ingredientsInSlots);
        
        if (requiredKeys.length === providedKeys.length && requiredKeys.every(key => requiredIngredients[key] === ingredientsInSlots[key])) {
            craftedItem = recipe.result;
            break;
        }
    }

    if (craftedItem) {
        // Quitar ingredientes del inventario
        Object.entries(ingredientsInSlots).forEach(([itemId, quantity]) => {
            const itemInInv = gameState.inventory.find(i => i.id === itemId);
            itemInInv.quantity -= quantity;
        });
        gameState.inventory = gameState.inventory.filter(item => item.quantity > 0);

        // Añadir resultado
        addItemToInventory(craftedItem, 1);
        showNotification("¡Éxito!", `Has creado ${masterItemList[craftedItem].name}.`);
        
        // Aprender la receta si no la sabíamos
        if (!gameState.knownRecipes.includes(craftedItem.recipeId)) {
            gameState.knownRecipes.push(craftedItem.recipeId);
        }

    } else {
        showNotification("Fallo", "Los ingredientes no producen nada.");
    }
    
    // Limpiar mesa de trabajo
    craftingSlots = [null, null, null, null];
    renderCraftingUI();
    updateUI();
}

// --- LÓGICA DE RECUPERACIÓN DE ESTADÍSTICAS ---
function startEnergyRecovery() {
    // Si ya hay un timer corriendo, no hacemos nada.
    if (energyRecoveryTimerId) return;

    console.log("Iniciando recuperación de energía...");
    energyRecoveryTimerId = setInterval(() => {
        if (gameState.energy < 100) {
            gameState.energy += ENERGY_RECOVERY_RATE;
            updateUI();
        } else {
            // Cuando la energía llega a 100, detenemos el timer.
            console.log("Energía al máximo. Deteniendo recuperación.");
            clearInterval(energyRecoveryTimerId);
            energyRecoveryTimerId = null; // Reseteamos el ID.
        }
    }, ENERGY_RECOVERY_INTERVAL);
}

function startSatietyDecay() {
    // Si ya hay un timer corriendo, no hacemos nada.
    if (satietyDecayTimerId) return;

    console.log("Iniciando digestión (pérdida de saciedad)...");
    satietyDecayTimerId = setInterval(() => {
        if (gameState.satiety > 0) {
            gameState.satiety -= SATIETY_DECAY_RATE;
            updateUI();
        } else {
            // Cuando la saciedad llega a 0, detenemos el timer.
            console.log("Saciedad a cero. Deteniendo digestión.");
            clearInterval(satietyDecayTimerId);
            satietyDecayTimerId = null; // Reseteamos el ID.
        }
    }, SATIETY_DECAY_INTERVAL);
}

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
        const isEquipped = Object.values(gameState.equipped).includes(item.id);
        if (isEquipped) {
            itemDiv.classList.add("equipped");
        }
        
        const itemName = itemData.name[gameState.language] || itemData.name['en'];
        
        itemDiv.innerHTML = `
            <img src="${itemData.path}" alt="${itemName}" class="w-full h-auto object-contain" title="${itemName}">
            <span class="item-quantity">${item.quantity}</span>
        `;
        itemDiv.onclick = () => handleItemClick(item.id, index);
        inventoryGrid.appendChild(itemDiv);
    });
}

function handleItemClick(itemId) {
    const itemData = masterItemList[itemId];
    const itemType = itemData.type;
    
    // --- Lógica para tipos de objeto no equipables ---
    if (itemType === 'consumable') {
        useConsumable(itemId);
        return;
    }
    
    const EQUIPABLE_TYPES = ['top', 'bottom', 'suit', 'head', 'stockings', 'bra', 'pantsus', 'hands', 'weapon'];
    if (!EQUIPABLE_TYPES.includes(itemType)) {
        showNotification(getText('cannotEquip'), getText('cannotEquipMsg'));
        return;
    }

    // --- LÓGICA DE EQUIPAMIENTO ---

    const isCurrentlyEquipped = gameState.equipped[itemType] === itemId;
    const affinityReq = itemData.requiredAffinity || 0;

    if (isCurrentlyEquipped) {
        // --- INTENTO DE DESEQUIPAR ---

        // VALIDACIÓN ESPECIAL para 'bra' y 'pantsus'
        if ((itemType === 'bra' || itemType === 'pantsus') && gameState.affinity < affinityReq) {
            showNotification(
                getText('insufficientAffinity'), 
                // Mensaje personalizado para esta situación
                { es: `No se lo quiere quitar... (necesita ${affinityReq} de afinidad).`, en: `She doesn't want to take it off... (needs ${affinityReq} affinity).` }[gameState.language]
            );
            return; // Se detiene la acción
        }

        // Si pasa la validación (o no es ropa interior), se desequipa.
        gameState.equipped[itemType] = null;
        
    } else {
        // --- INTENTO DE EQUIPAR ---

        // VALIDACIÓN DE AFINIDAD (se salta para 'bra' y 'pantsus')
        if (itemType !== 'bra' && itemType !== 'pantsus' && gameState.affinity < affinityReq) {
            showNotification(getText('insufficientAffinity'), getText('insufficientAffinityMsg')(affinityReq));
            return;
        }

        // Si pasa la validación, se equipa.
        gameState.equipped[itemType] = itemId;

        // Reglas de conflicto
        if (itemType === 'suit') {
            gameState.equipped.top = null;
            gameState.equipped.bottom = null;
            gameState.equipped.bra = null;
            gameState.equipped.pantsus = null;
        } else if (['top', 'bottom', 'bra', 'pantsus'].includes(itemType)) {
            gameState.equipped.suit = null;
        }
    }
    
    updateUI();
    renderInventory();
}

// --- Lógica para Usar Consumibles (NUEVA) ---
function useConsumable(itemId) {
    const itemData = masterItemList[itemId];
    const itemInInventory = gameState.inventory.find(i => i.id === itemId);

    if (!itemInInventory) return; // No debería pasar, pero por seguridad

    // Aplicar efectos
    if (itemData.effects) {
        if (itemData.effects.energy) {
            gameState.energy += itemData.effects.energy;
            if (gameState.energy > 100) gameState.energy = 100;
        }
        // Aquí podrías añadir más efectos, como +afinidad, +vida, etc.
    }

    // Reducir cantidad o eliminar del inventario
    itemInInventory.quantity--;
    if (itemInInventory.quantity <= 0) {
        gameState.inventory = gameState.inventory.filter(i => i.id !== itemId);
    }

    showNotification(
        getText('itemUsed'), 
        getText('itemUsedMsg')(itemData.name[gameState.language])
    );
    
    updateUI();
    // Re-renderizar la vista de inventario si sigue abierta
    if (!inventoryModal.classList.contains('hidden')) {
        renderInventory();
    }
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

// Variable para controlar si hay una reacción en curso
let isReacting = false;

characterContainer.addEventListener("click", () => {
    // Si ya hay una reacción, no hacemos nada para evitar solapamientos
    if (isReacting) return;

    const currentReaction = affinityReactions
        .slice()
        .reverse()
        .find(reaction => gameState.affinity >= reaction.level);

    if (currentReaction) {
        isReacting = true; // Bloqueamos nuevas reacciones

        // Guardamos la expresión actual ANTES de cambiarla
        const previousEyes = characterEyes.src;
        const previousMouth = characterMouth.src;

        // Mostrar diálogo de reacción
        reactionDialogue.textContent = currentReaction.text[gameState.language]; // Usamos i18n
        reactionDialogue.classList.remove('opacity-0');

        // Cambiar expresión
        characterEyes.src = currentReaction.eyes;
        characterMouth.src = currentReaction.mouth;

        // Ocultar todo después de un tiempo
        setTimeout(() => {
            reactionDialogue.classList.add('opacity-0');
            // Volvemos a la expresión que había JUSTO ANTES del clic
            characterEyes.src = previousEyes;
            characterMouth.src = previousMouth;
            isReacting = false; // Desbloqueamos para futuras reacciones
        }, 1500);
    }
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
    startEnergyRecovery();
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
    let resultTextKey = 'missionReturn'; // Clave para i18n
    let moneyEarned = 0;
    let itemsFoundIds = [];

    // 1. Aplicar bonus de arma equipada
    let weaponBonus = { nothingChance: 0, itemChance: 0 };
    if (gameState.equipped.weapon) {
        weaponBonus = masterItemList[gameState.equipped.weapon].effects.missionBonus;
    }

    // 2. Calcular la probabilidad de no encontrar nada
    // El bonus es negativo, así que weaponBonus.nothingChance será, por ejemplo, -0.25
    // La fórmula se mantiene: 30 * (1 - 0.25) = 22.5
    const nothingChance = 30 * (1 + weaponBonus.nothingChance); 
    const rand = Math.random() * 100;

    // 3. Usar SWITCH para determinar la recompensa base (dinero o nada)
    switch (true) {
        case (rand < nothingChance): // 0 a (30 - bonus)
            resultTextKey = 'missionReturnNothing';
            break;
        case (rand < 50): // (30 - bonus) a 50
            moneyEarned = 10;
            break;
        case (rand < 60): // 50 a 60
            moneyEarned = 20;
            break;
        case (rand < 65): // 60 a 65
            moneyEarned = 100;
            break;
        case (rand < 75): // 65 a 75
            moneyEarned = 10;
            // Se añade la posibilidad de loot extra más adelante
            break;
        case (rand < 85): // 75 a 85
            moneyEarned = 20;
            break;
        case (rand < 90): // 85 a 90
            moneyEarned = 100;
            break;
        default: // 90 a 100
            // No se gana dinero base, pero sí hay posibilidad de objetos
            break;
    }

    // 4. Calcular el loot adicional (materiales y recetas) si la misión no fue un fracaso total
    if (rand >= nothingChance) {
        // Posibilidad de encontrar materiales
        Object.entries(missionLoot.materials).forEach(([materialId, chance]) => {
            if (Math.random() < chance + weaponBonus.itemChance) {
                itemsFoundIds.push(materialId);
            }
        });
        // Posibilidad de encontrar recetas
        Object.entries(missionLoot.recipes).forEach(([recipeId, chance]) => {
            const recipeData = masterItemList[recipeId];
            if (!gameState.knownRecipes.includes(recipeData.recipeId) && Math.random() < chance) {
                itemsFoundIds.push(recipeId);
                gameState.knownRecipes.push(recipeData.recipeId); // Aprender la receta
                // Notificación específica para recetas aprendidas
                showNotification(
                    getText('recipeDiscoveredTitle'), 
                    getText('recipeDiscoveredMsg')(getText(recipeId))
                );
            }
        });
    }

    // 5. Construir el mensaje final de resultados (usando i18n)
    let finalResultText = getText(resultTextKey) + '<br>';

    if (moneyEarned > 0) {
        gameState.money += moneyEarned;
        finalResultText += `${getText('missionGains')}: $${moneyEarned}<br>`;
    }

    if (itemsFoundIds.length > 0) {
        const itemNames = [];
        itemsFoundIds.forEach((itemId) => {
            addItemToInventory(itemId, 1);
            // Obtenemos el nombre traducido del objeto
            itemNames.push(getText(itemId)); 
        });
        finalResultText += `${getText('missionItems')}: ${itemNames.join(", ")}`;
    }

    missionResult.innerHTML = finalResultText;
}

closeMissionModalButton.addEventListener("click", () => hideModal(missionModal));

function renderShop() {
    shopGrid.innerHTML = "";
    shopInventory.forEach(itemId => {
        const item = masterItemList[itemId];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item p-2 flex flex-col justify-between';
        
        itemDiv.innerHTML = `
            <div>
                <img src="${item.path}" alt="${item.name[gameState.language] || itemData.name['en']}" class="w-16 h-16 mx-auto mb-2">
                <p class="text-sm font-semibold">${item.name[gameState.language]}</p>
                <p class="text-xs text-amber-300">$${item.buyPrice}</p>
            </div>
            <button class="action-button !text-sm !py-1 mt-2" onclick="buyItem('${itemId}')">Comprar</button>
        `;
        shopGrid.appendChild(itemDiv);
    });
}

function buyItem(itemId) {
    const item = masterItemList[itemId];
    if (gameState.money < item.buyPrice) {
        showNotification("Fondos Insuficientes", "No tienes suficiente dinero para comprar esto.");
        return;
    }

    // Comprobación de espacio en inventario
    const existingItem = gameState.inventory.find(i => i.id === itemId);
    if (!existingItem && gameState.inventory.length >= MAX_INVENTORY_SLOTS) {
        showNotification("Inventario Lleno", "No tienes espacio para un nuevo tipo de objeto.");
        return;
    }
    if (existingItem && existingItem.quantity >= MAX_STACK_SIZE) {
        showNotification("Pila Llena", `Ya tienes el máximo de ${item.name[gameState.language] || itemData.name['en']}.`);
        return;
    }
    
    gameState.money -= item.buyPrice;
    addItemToInventory(itemId, 1);
    showNotification("Compra Exitosa", `¡Has comprado ${item.name[gameState.language] || itemData.name['en']}!`);
    updateUI();
}

function renderSellableInventory() {
    sellGrid.innerHTML = "";
    if (gameState.inventory.length === 0) {
        sellGrid.innerHTML = `<p class="col-span-full text-center text-gray-400">No tienes nada que vender.</p>`;
        return;
    }
    gameState.inventory.forEach(item => {
        const itemData = masterItemList[item.id];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item p-2 flex flex-col justify-between';
        itemDiv.innerHTML = `
            <div>
                <img src="${itemData.path}" alt="${itemData.name}" class="w-16 h-16 mx-auto mb-2">
                <p class="text-sm font-semibold">${itemData.name} (x${item.quantity})</p>
                <p class="text-xs text-green-400">Vender por: $${itemData.sellPrice}</p>
            </div>
            <button class="action-button !text-sm !py-1 mt-2" onclick="openSellConfirmation('${item.id}')">Vender</button>
        `;
        sellGrid.appendChild(itemDiv);
    });
}

function openSellConfirmation(itemId) {
    const itemInInventory = gameState.inventory.find(i => i.id === itemId);
    const itemData = masterItemList[itemId];
    
    document.getElementById('sellItemName').textContent = `Vender ${itemData.name}`;
    const sellInput = document.getElementById('sellQuantityInput');
    
    let maxQuantity = itemInInventory.quantity;
    // VALIDACIÓN PARA NO VENDER EQUIPO PUESTO
    if (Object.values(gameState.equipped).includes(itemId)) {
        maxQuantity--;
    }

    if (maxQuantity < 1) {
        showNotification("No se puede vender", "No puedes vender la última unidad de un objeto que llevas equipado.");
        return;
    }

    sellInput.max = maxQuantity;
    sellInput.value = 1;

    const confirmButton = document.getElementById('confirmSellButton');
    confirmButton.onclick = () => confirmSell(itemId);

    showModal(sellConfirmationModal);
}

function confirmSell(itemId) {
    const quantityToSell = parseInt(document.getElementById('sellQuantityInput').value);
    const itemInInventory = gameState.inventory.find(i => i.id === itemId);

    if (isNaN(quantityToSell) || quantityToSell <= 0 || quantityToSell > itemInInventory.quantity) {
        showNotification("Cantidad Inválida", "Por favor, introduce una cantidad válida para vender.");
        return;
    }

    const itemData = masterItemList[itemId];
    const moneyGained = quantityToSell * itemData.sellPrice;
    
    gameState.money += moneyGained;
    itemInInventory.quantity -= quantityToSell;

    // Si vendimos toda la pila, eliminamos el objeto del inventario
    if (itemInInventory.quantity <= 0) {
        gameState.inventory = gameState.inventory.filter(i => i.id !== itemId);
    }
    
    showNotification("Venta Exitosa", `¡Has vendido ${quantityToSell}x ${itemData.name} por $${moneyGained}!`);
    hideModal(sellConfirmationModal);
    renderSellableInventory(); // Actualizamos la vista de venta
    updateUI();
}

// --- FUNCIONES GENERALES Y UI ---
function updateUI() {
    // ---- Actualizar Textos Fijos de la UI ----
    // Menú lateral
    document.querySelector('#menu-panel h2').textContent = getText('menuTitle');
    document.querySelector('#openOptionsButton').textContent = getText('options');
    document.querySelector('#saveButton').textContent = getText('save');
    document.querySelector('a.menu-item:nth-of-type(3)').textContent = getText('gallery');
    document.querySelector('a.menu-item:nth-of-type(4)').textContent = getText('exit');

    // Botones de acción (Escritorio) - Extraemos el texto del SVG
    document.getElementById('talkButton').lastChild.textContent = ' ' + getText('talk');
    document.getElementById('equipButton').lastChild.textContent = ' ' + getText('equip');
    document.getElementById('interactButton').lastChild.textContent = ' ' + getText('interact');
    document.getElementById('missionButton').lastChild.textContent = ' ' + getText('mission');
    document.getElementById('marketButton').lastChild.textContent = ' ' + getText('market');
    document.getElementById('craftingButton').lastChild.textContent = ' ' + getText('craft');

    // Títulos de modales y botones
    document.querySelector('#optionsModal h3').textContent = getText('optionsTitle');
    document.querySelector('#optionsModal label').textContent = getText('language');
    document.querySelector('#closeOptionsModal').textContent = getText('close');
    document.querySelector('#inventoryModal h3').textContent = `${getText('inventoryTitle')} (${gameState.inventory.length}/20)`;
    document.querySelector('#closeInventoryModal').textContent = getText('close');
    document.querySelector('#marketModal h3').textContent = getText('marketTitle');
    document.querySelector('#marketModal p').textContent = getText('marketPrompt');
    document.querySelector('#openBuyModalButton').textContent = getText('buy');
    document.querySelector('#openSellModalButton').textContent = getText('sell');
    document.querySelector('#closeMarketModal').textContent = getText('close');
    document.querySelector('#buyModal h3').textContent = getText('buyTitle');
    document.querySelector('#closeBuyModal').textContent = getText('back');
    document.querySelector('#sellModal h3').textContent = getText('sellTitle');
    document.querySelector('#closeSellModal').textContent = getText('back');
    document.querySelector('#sellConfirmationModal h3').textContent = getText('sellConfirmTitle');
    document.querySelector('#sellConfirmationModal p').textContent = getText('sellConfirmPrompt');
    document.querySelector('#confirmSellButton').textContent = getText('confirmSell');
    document.querySelector('#cancelSellButton').textContent = getText('cancel');
    document.querySelector('#interactModal h3').textContent = getText('interactTitle');
    document.querySelector('#feedButton').textContent = getText('feed');
    document.querySelector('#playMinigameButton').textContent = getText('playMinigame');
    document.querySelector('#closeInteractModal').textContent = getText('close');
    document.querySelector('#notificationModal #closeNotificationModal').textContent = getText('understood');
    document.querySelector('#craftingModal h3').textContent = getText('craftingTitle');
    document.querySelector('#craftingModal .flex-1:first-child h4').textContent = getText('craftingSlots');
    document.querySelector('#craftingModal .flex-1:last-child h4').textContent = getText('availableMaterials');
    document.querySelector('#attemptCraftButton').textContent = getText('craftItem');
    document.querySelector('#closeCraftingModal').textContent = getText('close');
    
    // ---- Actualizar Stats ----
    affinityDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('affinity')}: `;
    moneyDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('money')}: $`;
    energyDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('energy')}: ⚡`;
    satietyDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('satiety')}: 🧡`;
    affinityDisplay.textContent = gameState.affinity;
    moneyDisplay.textContent = gameState.money;
    energyDisplay.textContent = Math.floor(gameState.energy);
    satietyDisplay.textContent = Math.floor(gameState.satiety);

    // --- RENDERIZADO DE PERSONAJE ---
    const layersToUpdate = ['suit', 'top', 'bottom', 'head', 'stockings', 'bra', 'pantsus', 'hands'];
    layersToUpdate.forEach(type => {
        const element = document.getElementById(`character${type.charAt(0).toUpperCase() + type.slice(1)}`);
        if (gameState.equipped[type]) {
            // Lógica de conflicto para top/bottom
            if ((type === 'top' || type === 'bottom') && gameState.equipped.suit) {
                element.classList.add('hidden-item');
                return;
            }
            element.src = masterItemList[gameState.equipped[type]].path;
            element.classList.remove('hidden-item');
        } else {
            element.classList.add('hidden-item');
        }
    });

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
const dialogueText = document.getElementById("dialogueText");
const dialogueOptionsContainer = document.getElementById("dialogueOptions");
const characterNameElement = document.getElementById("characterName");

const dialogues = [{
    character: "Eleanora",
    text: () => ({
        es: `¿Cómo crees que me fue hoy en el entrenamiento, ${getPlayerNickname()}?`,
        en: `How do you think I did in training today, ${getPlayerNickname()}?`
    }),
    options: [
        { text: { es: "¡Seguro que genial! Eres muy fuerte.", en: "I'm sure you were great! You're so strong." }, affinityChange: 10 },
        { text: { es: "Espero que bien, debes esforzarte más.", en: "Hopefully well. You need to push yourself harder." }, affinityChange: -5 },
        { text: { es: "No lo sé, cuéntame más.", en: "I don't know, tell me more." }, affinityChange: 2 },
        { text: { es: "El entrenamiento es clave, ¡sigue así!", en: "Training is key, keep it up!" }, affinityChange: 3 },
    ],
}, {
    character: "Eleanora",
    text: () => ({
        es: `A veces me pregunto si todo este esfuerzo vale la pena, ${getPlayerNickname()}...`,
        en: `Sometimes I wonder if all this effort is worth it, ${getPlayerNickname()}...`
    }),
    options: [
        { text: { es: "¡Claro que sí! Estás protegiendo a muchos.", en: "Of course, it is! You're protecting so many people." }, affinityChange: 15 },
        { text: { es: "Si tienes dudas, quizás deberías reconsiderarlo.", en: "If you have doubts, maybe you should reconsider." }, affinityChange: -10 },
        { text: { es: "Todos tenemos dudas, es normal.", en: "Everyone has doubts, it's normal." }, affinityChange: 5 },
        { text: { es: "Tu esfuerzo inspira a otros.", en: "Your effort inspires others." }, affinityChange: 7 },
    ],
}, {
    character: "Eleanora",
    text: () => ({
        es: `Me gustaría tomar un descanso, ¿qué sugieres, ${getPlayerNickname()}?`,
        en: `I'd like to take a break. What do you suggest, ${getPlayerNickname()}?`
    }),
    options: [
        { text: { es: "Ver una película juntos.", en: "Let's watch a movie together." }, affinityChange: 8 },
        { text: { es: "Leer un buen libro.", en: "How about reading a good book?" }, affinityChange: 3 },
        { text: { es: "El deber llama. No hay tiempo.", en: "Duty calls. There's no time." }, affinityChange: -7 },
        { text: { es: "Podríamos dar un paseo.", en: "We could go for a walk." }, affinityChange: 5 },
    ],
}, ];

// NUEVA FUNCIÓN para obtener el apodo según la afinidad
function getPlayerNickname() {
    const nicknames = {
        es: { high: gameState.playerName, mid: "colegui", low: "jefe" },
        en: { high: gameState.playerName, mid: "partner", low: "boss" }
    };
    const langNicks = nicknames[gameState.language];
    if (gameState.affinity >= 90) return langNicks.high;
    if (gameState.affinity >= 40) return langNicks.mid;
    return langNicks.low;
}

function startDialogue() {
    const currentDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
    characterNameElement.textContent = currentDialogue.character || gameState.characterName;
    const dialogueTextContent = typeof currentDialogue.text === 'function' ? currentDialogue.text() : currentDialogue.text;
    dialogueText.textContent = dialogueTextContent[gameState.language];
    dialogueOptionsContainer.innerHTML = "";
    currentDialogue.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.text[gameState.language];
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

// <-- Función para guardar el juego
function saveGame() {
    try {
        gameState.version = GAME_VERSION; // Aseguramos que se guarda la versión actual
        localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
        showNotification(getText('saveSuccessTitle'), getText('saveSuccessMsg'));
    } catch (error) {
        console.error("Error al guardar la partida:", error);
        showNotification(getText('saveErrorTitle'), getText('saveErrorMsg'));
    }
}

// <-- Función para cargar el juego
function loadGame() {
    const savedData = localStorage.getItem(SAVE_KEY);
    if (!savedData) {
        return false;
    }

    try {
        const savedState = JSON.parse(savedData);
        
        // --- VERIFICACIÓN DE VERSIÓN ---
        if (savedState.version !== GAME_VERSION) {
            console.warn(`Partida guardada de una versión antigua (${savedState.version}) detectada. La versión actual es ${GAME_VERSION}. Reiniciando.`);
            localStorage.removeItem(SAVE_KEY);
            showNotification(getText('saveVersionMismatchTitle'), getText('saveVersionMismatchMsg'));
            return false; // Tratamos la partida como inválida
        }

        Object.assign(gameState, savedState);
        console.log("Partida cargada exitosamente.");
        return true;
    } catch (error) {
        console.error("Error al cargar datos guardados (posiblemente corruptos). Empezando de cero.", error);
        localStorage.removeItem(SAVE_KEY);
        return false;
    }
}

// --- LÓGICA DE INTERACCIÓN ---
const feedButton = document.getElementById("feedButton");
const playMinigameButton = document.getElementById("playMinigameButton");
const closeInteractModalButton = document.getElementById("closeInteractModal");

feedButton.addEventListener("click", () => {
    if (gameState.satiety >= 100) {
        showNotification("No tiene hambre", "Eleanora está totalmente llena ahora mismo.");
        hideModal(interactModal);
        return;
    }

    // Gana saciedad (se llena)
    gameState.satiety += FEED_ENERGY_GAIN;
    if (gameState.satiety > 100) gameState.satiety = 100;
    
    // Gana energía
    gameState.energy += FEED_ENERGY_GAIN;
    if (gameState.energy > 100) gameState.energy = 100;

    // Gana afinidad
    gameState.affinity += 5;
    if (gameState.affinity > 100) gameState.affinity = 100;

    startSatietyDecay();
    
    updateUI();
    showNotification("Alimentar", `¡Parece contenta! (+5 Afinidad, +${FEED_ENERGY_GAIN} Energía)`);
    hideModal(interactModal);
});


playMinigameButton.addEventListener("click", () => {
    showNotification("Minijuego", "Esta función estará disponible pronto. ¡Imagina que jugaron un divertido juego!");
    hideModal(interactModal);
});

closeInteractModalButton.addEventListener("click", () => hideModal(interactModal));


// --- INICIALIZACIÓN Y EVENTOS ---
document.getElementById("talkButton").addEventListener("click", startDialogue);
document.getElementById("equipButton").addEventListener("click", () => { renderInventory(); showModal(inventoryModal); });
document.getElementById("interactButton").addEventListener("click", () => showModal(interactModal));
document.getElementById("missionButton").addEventListener("click", startMission);
document.getElementById("marketButton").addEventListener("click", () => showModal(marketModal));
document.getElementById("craftingButton").addEventListener("click", openCraftingModal);

document.getElementById('openBuyModalButton').addEventListener('click', () => { hideModal(marketModal); renderShop(); showModal(buyModal); });
document.getElementById('openSellModalButton').addEventListener('click', () => { hideModal(marketModal); renderSellableInventory(); showModal(sellModal); });
document.getElementById('closeMarketModal').addEventListener('click', () => hideModal(marketModal));
document.getElementById('closeBuyModal').addEventListener('click', () => { hideModal(buyModal); showModal(marketModal); });
document.getElementById('closeSellModal').addEventListener('click', () => { hideModal(sellModal); showModal(marketModal); });
document.getElementById('cancelSellButton').addEventListener('click', () => hideModal(sellConfirmationModal));
document.getElementById('closeCraftingModal').addEventListener('click', () => hideModal(craftingModal));
document.getElementById('attemptCraftButton').addEventListener('click', attemptCraft);
document.getElementById('openOptionsButton').addEventListener('click', () => { languageSelect.value = gameState.language; showModal(optionsModal); });
document.getElementById('closeOptionsModal').addEventListener('click', () => hideModal(optionsModal));
languageSelect.addEventListener('change', (e) => {
    gameState.language = e.target.value;
    updateUI(); // Actualizamos toda la UI para reflejar el cambio de idioma
    showNotification("Idioma Cambiado", "El idioma se ha actualizado.");
});
// <-- Event listener para el botón de guardar
saveButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenimos que el link '#' nos lleve al tope de la página
    saveGame();
});

// --- INICIO DEL JUEGO ---
// <-- Función principal que se ejecuta al cargar la página
function startNewGame() {
    console.log("Iniciando una nueva partida.");
    addItemToInventory("cheap_shirt", 1);
    addItemToInventory("cheap_pants", 1);
    addItemToInventory("bra_1", 1);
    addItemToInventory("pantsus_1", 1);
}

function initializeGame() {
    // Si loadGame() devuelve true, es que se cargó una partida
    if (loadGame()) {
        showNotification(getText('welcomeBack'), getText('gameLoaded'));
        if (gameState.energy < 100) startEnergyRecovery();
        if (gameState.satiety > 0) startSatietyDecay();
    } else {
        // Si no hay partida guardada, o era inválida, se empieza una nueva.
        startNewGame();
    }
    
    saveButton.classList.remove('disabled-link');
    updateUI();
}

// PUNTO DE ENTRADA PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    // No llamamos a loadGame() aquí directamente, lo hará initializeGame
    const savedData = localStorage.getItem(SAVE_KEY);
    if (savedData) {
        const savedState = JSON.parse(savedData);
        if (savedState.hasCompletedIntro && savedState.version === GAME_VERSION) {
            // Si ya completó la intro Y la versión es compatible, inicializamos el juego normalmente
            initializeGame();
        } else {
            // Si la intro no está completa O la versión es antigua, reiniciamos.
            if(savedState.version !== GAME_VERSION) {
                showNotification(getText('saveVersionMismatchTitle'), getText('saveVersionMismatchMsg'));
            }
            localStorage.removeItem(SAVE_KEY);
            runIntroScene();
        }
    } else {
        // No hay datos guardados, es la primera vez que juega.
        runIntroScene();
    }
});