// =================================================================================
// SERVICE: I18nService
// Responsabilidad: Gestionar los textos de la interfaz en diferentes idiomas.
// =================================================================================

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

function getText(key) {
    const source = UI_TEXTS[key];
    if (source && source[gameState.language]) {
        return source[gameState.language];
    }
    return source ? source.en : key;
}

// =================================================================================
// SERVICE: DatabaseService
// Responsabilidad: Contener los datos maestros de objetos, recetas, tienda, etc.
// En Angular, esto podría ser un servicio que carga estos datos desde archivos JSON.
// =================================================================================

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
};

const shopInventory = [];
Object.keys(masterItemList).forEach(id => {
    const item = masterItemList[id];
    if (item.type === 'top' || item.type === 'bottom' || item.type === 'weapon') {
        if (!Object.values(recipes).find(r => r.result === id)) {
            let itemLevel = 1;
            if (id.includes('good')) itemLevel = 3;
            if (id.includes('iron')) itemLevel = 5;
            item.buyPrice = Math.floor(100 * Math.log(itemLevel + 1) * 1.5);
            item.sellPrice = Math.floor(item.buyPrice / 3);
            shopInventory.push(id);
        }
    }
    if (['suit', 'head', 'stockings', 'consumable'].includes(item.type)) {
        if(item.buyPrice === undefined) {
          item.buyPrice = 500; 
          item.sellPrice = 150;
        }
        shopInventory.push(id);
    }
});

const affinityReactions = [
    { level: 0, eyes: './img/expressions/eyes_angry.png', mouth: './img/expressions/mouth_angry.png', text: { es: "¡No me toques!", en: "Don't touch me!" } },
    { level: 25, eyes: './img/expressions/eyes_surprised.png', mouth: './img/expressions/mouth_surprised.png', text: { es: "¿Q-qué haces?", en: "W-what are you doing?" } },
    { level: 50, eyes: './img/expressions/eyes_blush.png', mouth: './img/expressions/mouth_blush.png', text: { es: "E-está bien...", en: "I-it's okay..." } },
    { level: 75, eyes: './img/expressions/eyes_happy.png', mouth: './img/expressions/mouth_happy.png', text: { es: "¡Me gusta que me acaricies!", en: "I like it when you pet me!" } }
];

const missionLoot = {
    materials: { 'wood_plank': 0.4, 'iron_ore': 0.1 },
    recipes: { 'recipe_steel_sword': 0.05 }
};

const dialogues = [
    // ... (contenido de diálogos sin cambios)
];

// =================================================================================
// SERVICE: GameStateService
// Responsabilidad: Mantener el estado actual del juego (dinero, afinidad, etc.)
// y las constantes de configuración del juego.
// =================================================================================

const GAME_VERSION = "0.0.1";
const MAX_INVENTORY_SLOTS = 20;
const MAX_STACK_SIZE = 10;
const MISSION_ENERGY_COST = 10;
const ENERGY_RECOVERY_RATE = 1;
const ENERGY_RECOVERY_INTERVAL = 3000;
const SATIETY_DECAY_RATE = 1;
const SATIETY_DECAY_INTERVAL = 3000;
const FEED_SATIETY_COST = 20;
const FEED_ENERGY_GAIN = 5;

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
        top: 'cheap_shirt',
        bottom: 'cheap_pants',
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

// =================================================================================
// SERVICE: GameLoopService / StatsService
// Responsabilidad: Gestionar los procesos que ocurren a lo largo del tiempo,
// como la recuperación de energía y la pérdida de saciedad.
// =================================================================================

let energyRecoveryTimerId = null;
let satietyDecayTimerId = null;

function startEnergyRecovery() {
    if (energyRecoveryTimerId) return;
    energyRecoveryTimerId = setInterval(() => {
        if (gameState.energy < 100) {
            gameState.energy += ENERGY_RECOVERY_RATE;
            updateUI();
        } else {
            clearInterval(energyRecoveryTimerId);
            energyRecoveryTimerId = null;
        }
    }, ENERGY_RECOVERY_INTERVAL);
}

function startSatietyDecay() {
    if (satietyDecayTimerId) return;
    satietyDecayTimerId = setInterval(() => {
        if (gameState.satiety > 0) {
            gameState.satiety -= SATIETY_DECAY_RATE;
            updateUI();
        } else {
            clearInterval(satietyDecayTimerId);
            satietyDecayTimerId = null;
        }
    }, SATIETY_DECAY_INTERVAL);
}

// =================================================================================
// SERVICE: InventoryService
// Responsabilidad: Gestionar el inventario del jugador, incluyendo añadir,
// usar y equipar objetos.
// =================================================================================

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
        } else {
            showNotification("Inventario", `¡No puedes llevar más ${masterItemList[itemId].name[gameState.language]}! (Pila llena)`);
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

function handleItemClick(itemId) {
    const itemData = masterItemList[itemId];
    const itemType = itemData.type;
    
    if (itemType === 'consumable') {
        useConsumable(itemId);
        return;
    }
    
    const EQUIPABLE_TYPES = ['top', 'bottom', 'suit', 'head', 'stockings', 'bra', 'pantsus', 'hands', 'weapon'];
    if (!EQUIPABLE_TYPES.includes(itemType)) {
        showNotification(getText('cannotEquip'), getText('cannotEquipMsg'));
        return;
    }

    const isCurrentlyEquipped = gameState.equipped[itemType] === itemId;
    const affinityReq = itemData.requiredAffinity || 0;

    if (isCurrentlyEquipped) {
        if ((itemType === 'bra' || itemType === 'pantsus') && gameState.affinity < affinityReq) {
            showNotification(
                getText('insufficientAffinity'), 
                { es: `No se lo quiere quitar... (necesita ${affinityReq} de afinidad).`, en: `She doesn't want to take it off... (needs ${affinityReq} affinity).` }[gameState.language]
            );
            return;
        }
        gameState.equipped[itemType] = null;
    } else {
        if (itemType !== 'bra' && itemType !== 'pantsus' && gameState.affinity < affinityReq) {
            showNotification(getText('insufficientAffinity'), getText('insufficientAffinityMsg')(affinityReq));
            return;
        }
        gameState.equipped[itemType] = itemId;
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
    renderInventory(); // Se llama desde InventoryModalComponent
}

function useConsumable(itemId) {
    const itemData = masterItemList[itemId];
    const itemInInventory = gameState.inventory.find(i => i.id === itemId);
    if (!itemInInventory) return;

    if (itemData.effects) {
        if (itemData.effects.energy) {
            gameState.energy = Math.min(100, gameState.energy + itemData.effects.energy);
        }
    }

    itemInInventory.quantity--;
    if (itemInInventory.quantity <= 0) {
        gameState.inventory = gameState.inventory.filter(i => i.id !== itemId);
    }

    showNotification(getText('itemUsed'), getText('itemUsedMsg')(itemData.name[gameState.language]));
    updateUI();
    if (!inventoryModal.classList.contains('hidden')) {
        renderInventory();
    }
}

// =================================================================================
// SERVICE: CraftingService
// Responsabilidad: Gestionar la lógica de la mesa de trabajo, incluyendo la
// combinación de objetos y la creación de nuevos.
// =================================================================================

let craftingSlots = [null, null, null, null];

function attemptCraft() {
    const ingredientsInSlots = craftingSlots.filter(s => s !== null).reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
    }, {});
    
    let craftedItem = null;
    for (const recipeId in recipes) {
        const recipe = recipes[recipeId];
        const requiredIngredients = recipe.ingredients.reduce((acc, ing) => ({...acc, [ing.id]: ing.quantity }), {});
        const requiredKeys = Object.keys(requiredIngredients);
        const providedKeys = Object.keys(ingredientsInSlots);
        
        if (requiredKeys.length === providedKeys.length && requiredKeys.every(key => requiredIngredients[key] === ingredientsInSlots[key])) {
            craftedItem = recipe.result;
            break;
        }
    }

    if (craftedItem) {
        Object.entries(ingredientsInSlots).forEach(([itemId, quantity]) => {
            const itemInInv = gameState.inventory.find(i => i.id === itemId);
            itemInInv.quantity -= quantity;
        });
        gameState.inventory = gameState.inventory.filter(item => item.quantity > 0);
        addItemToInventory(craftedItem, 1);
        showNotification(getText('craftSuccess'), getText('craftSuccessMsg')(masterItemList[craftedItem].name[gameState.language]));
        
        if (!gameState.knownRecipes.includes(craftedItem.recipeId)) {
            gameState.knownRecipes.push(craftedItem.recipeId);
        }
    } else {
        showNotification(getText('craftFail'), getText('craftFailMsg'));
    }
    
    craftingSlots = [null, null, null, null];
    renderCraftingUI(); // Se llama desde CraftingModalComponent
    updateUI();
}

// =================================================================================
// SERVICE: SaveGameService
// Responsabilidad: Guardar y cargar el progreso del juego en el LocalStorage.
// =================================================================================

const SAVE_KEY = 'tomodachiMusumeSave';

function saveGame() {
    try {
        gameState.version = GAME_VERSION;
        localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
        showNotification(getText('saveSuccessTitle'), getText('saveSuccessMsg'));
    } catch (error) {
        console.error("Error al guardar la partida:", error);
        showNotification(getText('saveErrorTitle'), getText('saveErrorMsg'));
    }
}

function loadGame() {
    const savedData = localStorage.getItem(SAVE_KEY);
    if (!savedData) return false;

    try {
        const savedState = JSON.parse(savedData);
        if (savedState.version !== GAME_VERSION) {
            console.warn(`Partida guardada de una versión antigua (${savedState.version}). La actual es ${GAME_VERSION}.`);
            localStorage.removeItem(SAVE_KEY);
            showNotification(getText('saveVersionMismatchTitle'), getText('saveVersionMismatchMsg'));
            return false;
        }
        Object.assign(gameState, savedState);
        return true;
    } catch (error) {
        console.error("Error al cargar datos guardados.", error);
        localStorage.removeItem(SAVE_KEY);
        return false;
    }
}

// =================================================================================
// COMPONENT: DOM Elements
// Responsabilidad: Centralizar las referencias a los elementos del DOM.
// En Angular, esto se gestionaría con @ViewChild o bindings en las plantillas.
// =================================================================================

const characterContainer = document.getElementById("characterContainer");
const characterBody = document.getElementById("characterBody");
const characterBottom = document.getElementById("characterBottom");
const characterTop = document.getElementById("characterTop");
const characterEyes = document.getElementById("characterEyes");
const characterMouth = document.getElementById("characterMouth");
const characterStockings = document.getElementById("characterStockings");
const characterSuit = document.getElementById("characterSuit");
const characterHead = document.getElementById("characterHead");
const characterBra = document.getElementById("characterBra");
const characterPantsus = document.getElementById("characterPantsus");
const characterHands = document.getElementById("characterHands");
const reactionDialogue = document.getElementById("reactionDialogue");

const affinityDisplay = document.getElementById("affinityDisplay");
const moneyDisplay = document.getElementById("moneyDisplay");
const energyDisplay = document.getElementById("energyDisplay");
const satietyDisplay = document.getElementById("satietyDisplay");

const saveButton = document.getElementById("saveButton");
const hamburgerButton = document.getElementById("hamburgerButton");
const menuPanel = document.getElementById("menu-panel");

// Modals
const introModal = document.getElementById("introModal");
const talkModal = document.getElementById("talkModal");
const inventoryModal = document.getElementById("inventoryModal");
const interactModal = document.getElementById("interactModal");
const missionModal = document.getElementById("missionModal");
const notificationModal = document.getElementById("notificationModal");
const marketModal = document.getElementById("marketModal");
const buyModal = document.getElementById("buyModal");
const sellModal = document.getElementById("sellModal");
const sellConfirmationModal = document.getElementById("sellConfirmationModal");
const craftingModal = document.getElementById("craftingModal");
const recipeBookModal = document.getElementById("recipeBookModal");
const optionsModal = document.getElementById("optionsModal");

// =================================================================================
// COMPONENT: CharacterComponent
// Responsabilidad: Gestionar la visualización y las interacciones directas
// con el personaje en pantalla.
// =================================================================================

let isReacting = false;

function initializeCharacterComponent() {
    characterContainer.addEventListener("click", () => {
        if (isReacting) return;
        const currentReaction = affinityReactions.slice().reverse().find(r => gameState.affinity >= r.level);
        if (currentReaction) {
            isReacting = true;
            const previousEyes = characterEyes.src;
            const previousMouth = characterMouth.src;
            reactionDialogue.textContent = currentReaction.text[gameState.language];
            reactionDialogue.classList.remove('opacity-0');
            characterEyes.src = currentReaction.eyes;
            characterMouth.src = currentReaction.mouth;
            setTimeout(() => {
                reactionDialogue.classList.add('opacity-0');
                characterEyes.src = previousEyes;
                characterMouth.src = previousMouth;
                isReacting = false;
            }, 1500);
        }
    });
}

function renderCharacter() {
    const layersToUpdate = ['suit', 'top', 'bottom', 'head', 'stockings', 'bra', 'pantsus', 'hands'];
    layersToUpdate.forEach(type => {
        const element = document.getElementById(`character${type.charAt(0).toUpperCase() + type.slice(1)}`);
        if (gameState.equipped[type]) {
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
    characterEyes.src = gameState.expression.eyes;
    characterMouth.src = gameState.expression.mouth;
}

// =================================================================================
// COMPONENT: PlayerStatsComponent
// Responsabilidad: Mostrar las estadísticas del jugador (dinero, energía, etc.).
// =================================================================================

function renderPlayerStats() {
    affinityDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('affinity')}: `;
    moneyDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('money')}: $`;
    energyDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('energy')}: ⚡`;
    satietyDisplay.parentElement.querySelector('.font-semibold').textContent = `${getText('satiety')}: 🧡`;
    affinityDisplay.textContent = gameState.affinity;
    moneyDisplay.textContent = gameState.money;
    energyDisplay.textContent = Math.floor(gameState.energy);
    satietyDisplay.textContent = Math.floor(gameState.satiety);
}

// =================================================================================
// COMPONENT: ModalsManager & Individual Modal Components
// Responsabilidad: Gestionar la visibilidad y la lógica interna de todos los modales.
// =================================================================================

function showModal(modal) {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
}

function hideModal(modal) {
    modal.classList.add("opacity-0");
    setTimeout(() => modal.classList.add("hidden"), 300);
}

// --- IntroModalComponent ---
function runIntroScene() {
    // ... (lógica de la intro sin cambios, ya que es autocontenida)
}

// --- InventoryModalComponent ---
function renderInventory() {
    const inventoryGrid = document.getElementById("inventoryGrid");
    inventoryGrid.innerHTML = "";
    document.getElementById("inventorySlots").textContent = gameState.inventory.length;
    gameState.inventory.forEach((item, index) => {
        const itemData = masterItemList[item.id];
        const itemDiv = document.createElement("div");
        itemDiv.className = "inventory-item";
        if (Object.values(gameState.equipped).includes(item.id)) {
            itemDiv.classList.add("equipped");
        }
        const itemName = itemData.name[gameState.language] || itemData.name['en'];
        itemDiv.innerHTML = `<img src="${itemData.path}" alt="${itemName}" title="${itemName}"><span class="item-quantity">${item.quantity}</span>`;
        itemDiv.onclick = () => handleItemClick(item.id, index); // Llama a InventoryService
        inventoryGrid.appendChild(itemDiv);
    });
}

// --- MarketModals (Buy/Sell) ---
function renderShop() { /* ... */ }
function buyItem(itemId) { /* ... */ }
function renderSellableInventory() { /* ... */ }
function openSellConfirmation(itemId) { /* ... */ }
function confirmSell(itemId) { /* ... */ }

// --- CraftingModalComponent ---
function openCraftingModal() {
    craftingSlots = [null, null, null, null];
    renderCraftingUI();
    showModal(craftingModal);
}
function renderCraftingUI() {
    renderCraftingSlots();
    renderCraftingMaterials();
}
function renderCraftingSlots() { /* ... */ }
function renderCraftingMaterials() { /* ... */ }
function addToCraftingSlot(itemId) { /* ... */ }
function removeFromCraftingSlot(slotIndex) { /* ... */ }

// --- MissionModalComponent ---
function startMission() { /* ... */ }
function calculateMissionRewards() { /* ... */ }

// --- NotificationModalComponent ---
function showNotification(title, message) {
    document.getElementById("notificationTitle").textContent = title;
    document.getElementById("notificationMessage").textContent = message;
    showModal(notificationModal);
}

// --- TalkModalComponent ---
function startDialogue() { /* ... */ }
function getPlayerNickname() { /* ... */ }

// --- InteractModalComponent ---
function initializeInteractModal() {
    document.getElementById("feedButton").addEventListener("click", () => {
        if (gameState.satiety >= 100) {
            showNotification("No tiene hambre", "Eleanora está totalmente llena ahora mismo.");
            hideModal(interactModal);
            return;
        }
        gameState.satiety = Math.min(100, gameState.satiety + FEED_ENERGY_GAIN);
        gameState.energy = Math.min(100, gameState.energy + FEED_ENERGY_GAIN);
        gameState.affinity = Math.min(100, gameState.affinity + 5);
        startSatietyDecay();
        updateUI();
        showNotification("Alimentar", `¡Parece contenta! (+5 Afinidad, +${FEED_ENERGY_GAIN} Energía)`);
        hideModal(interactModal);
    });
}

// =================================================================================
// COMPONENT: UIManager
// Responsabilidad: Orquestar la actualización de todos los componentes visuales.
// En Angular, esto se manejaría automáticamente por el data binding.
// =================================================================================

function updateUI() {
    // Actualizar textos generales (botones, títulos, etc.)
    // ... (toda la lógica de document.querySelector...textContent = getText(...))
    
    // Renderizar componentes específicos
    renderPlayerStats();
    renderCharacter();
}

// =================================================================================
// COMPONENT: MainAppComponent / GameInitializer
// Responsabilidad: Punto de entrada del juego. Gestiona la inicialización,
// el flujo principal (nueva partida vs cargar) y los event listeners globales.
// =================================================================================

function initializeEventListeners() {
    // Botones de acción principales
    document.getElementById("talkButton").addEventListener("click", startDialogue);
    document.getElementById("equipButton").addEventListener("click", () => { renderInventory(); showModal(inventoryModal); });
    document.getElementById("interactButton").addEventListener("click", () => showModal(interactModal));
    document.getElementById("missionButton").addEventListener("click", startMission);
    document.getElementById("marketButton").addEventListener("click", () => showModal(marketModal));
    document.getElementById("craftingButton").addEventListener("click", openCraftingModal);

    // Listeners de modales y menú
    document.getElementById('closeInventoryModal').addEventListener("click", () => hideModal(inventoryModal));
    document.getElementById('closeNotificationModal').addEventListener("click", () => hideModal(notificationModal));
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
    document.getElementById('closeInteractModal').addEventListener("click", () => hideModal(interactModal));
    document.getElementById('closeMissionModal').addEventListener("click", () => hideModal(missionModal));

    languageSelect.addEventListener('change', (e) => {
        gameState.language = e.target.value;
        updateUI();
        showNotification("Idioma Cambiado", "El idioma se ha actualizado.");
    });
    
    saveButton.addEventListener('click', (e) => { e.preventDefault(); saveGame(); });
    hamburgerButton.addEventListener("click", () => menuPanel.classList.toggle("-translate-x-full"));

    // Componentes específicos
    initializeCharacterComponent();
    initializeInteractModal();
}

function startNewGame() {
    console.log("Iniciando una nueva partida.");
    addItemToInventory("cheap_shirt", 1);
    addItemToInventory("cheap_pants", 1);
    addItemToInventory("bra_1", 1);
    addItemToInventory("pantsus_1", 1);
}

function initializeGame() {
    if (loadGame()) { // Llama a SaveGameService
        showNotification(getText('welcomeBack'), getText('gameLoaded'));
        if (gameState.energy < 100) startEnergyRecovery(); // Llama a GameLoopService
        if (gameState.satiety > 0) startSatietyDecay(); // Llama a GameLoopService
    } else {
        startNewGame();
    }
    saveButton.classList.remove('disabled-link');
    updateUI();
}

// --- PUNTO DE ENTRADA ---
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();

    const savedData = localStorage.getItem(SAVE_KEY);
    if (savedData) {
        const savedState = JSON.parse(savedData);
        if (savedState.hasCompletedIntro && savedState.version === GAME_VERSION) {
            initializeGame();
        } else {
            if(savedState.version !== GAME_VERSION) {
                showNotification(getText('saveVersionMismatchTitle'), getText('saveVersionMismatchMsg'));
            }
            localStorage.removeItem(SAVE_KEY);
            runIntroScene();
        }
    } else {
        runIntroScene();
    }
});
