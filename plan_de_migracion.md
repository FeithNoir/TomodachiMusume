# Plan de Migración a Angular: Tomodachi Musume

¡Hola, colegui! Este documento detalla el plan estratégico para migrar el proyecto "Tomodachi Musume" desde JavaScript puro a un proyecto moderno, escalable y mantenible con Angular (versión 16+).

## 1. Objetivo Principal

El objetivo es refactorizar la base del código actual a una arquitectura Angular robusta, aprovechando sus características más modernas como **Signals**, la nueva reactividad y una estructura modular que facilite el crecimiento futuro del juego.

## 2. Preparación y Setup Inicial

Antes de empezar a migrar, necesitamos la base del proyecto en Angular.

1.  **Instalar Angular CLI:** Si no lo tienes, es el primer paso.
    ```bash
    npm install -g @angular/cli
    ```
2.  **Crear el nuevo proyecto:**
    ```bash
    ng new tomodachi-musume --style=scss --routing
    ```
    *   `--style=scss`: Usaremos SCSS para tener más potencia con los estilos.
    *   `--routing`: Angular nos creará un módulo de rutas inicial, esencial para navegar entre las `pages`.
3.  **Limpieza inicial:** Eliminar el contenido de `app.component.html` y `app.component.css` para empezar de cero.

## 3. Estructura de Carpetas Propuesta

Siguiendo tus preferencias, la estructura dentro de `src/app/` será la siguiente:

```
src/app/
├── core/
│   ├── interfaces/  # Definiciones de tipos (Item, Character, Recipe...)
│   ├── services/    # Lógica de negocio y estado (GameState, Inventory...)
│   ├── pipes/       # Pipes personalizados (filterItems, translate...)
│   ├── guards/      # Guards para las rutas (canEnterDungeon...)
│   └── constants/   # Constantes de la aplicación (item-types, game-events...)
│
├── pages/           # Vistas/Pantallas principales del juego
│   ├── main-game/   # La pantalla principal de vestir al personaje
│   ├── inventory/   # Vista para gestionar el inventario
│   ├── crafting/    # Vista para el sistema de crafteo
│   ├── events/      # Vista para eventos especiales
│   └── configuration/ # Vista para la configuración del juego
│
├── share/           # Componentes reutilizables
│   ├── components/
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   └── character-display/ # Componente para renderizar al personaje
│   └── layout/
│       └── main-layout/ # Layout principal que une header, sidebar, etc.
│
└── assets/
    └── img/         # Aquí moveremos todas las imágenes actuales del juego
```

## 4. Arquitectura de Servicios (Principios SOLID)

Crearemos servicios con responsabilidades únicas para mantener el código limpio y testeable.

*   **`GameStateService`**:
    *   **Responsabilidad:** Manejar el estado global del juego (ej: pantalla actual, día/noche, estado del jugador como energía o dinero).
    *   **Uso de Signals:** `currentScreen = signal('main')`, `playerEnergy = signal(100)`.

*   **`CharacterService`**:
    *   **Responsabilidad:** Gestionar el estado visual del personaje. Qué ropa y accesorios lleva puestos.
    *   **Uso de Signals:** `equippedTop = signal<Item | null>(null)`, `equippedBottom = signal<Item | null>(null)`, etc. Esto permitirá que la UI reaccione instantáneamente a los cambios.

*   **`InventoryService`**:
    *   **Responsabilidad:** Gestionar el inventario del jugador (ropa, materiales, objetos). Lógica para añadir, eliminar y consultar objetos.
    *   **Uso de Signals:** `items = signal<Item[]>([])`. Un `computed` signal podría derivar de aquí para saber la cantidad de un material específico.

*   **`CraftingService`**:
    *   **Responsabilidad:** Contener la lógica de crafteo. Recibe una lista de materiales y devuelve un resultado si la receta es válida. No manejará estado, solo lógica pura.

*   **`AssetService`**:
    *   **Responsabilidad:** Centralizar la gestión de rutas a los assets (imágenes). Tendrá métodos como `getImagePath(item: Item)` para abstraer la estructura de carpetas. Esto facilita si en el futuro las rutas cambian.

## 5. Migración Paso a Paso

1.  **Migrar Assets:** Copiar la carpeta `img` actual a `src/assets/img`.
2.  **Definir Interfaces (`/core/interfaces`):** Crear los "contratos" de nuestros datos.
    *   `item.interface.ts`: `id`, `name`, `type` ('top', 'bottom', 'material'), `imagePath`.
    *   `character.interface.ts`: `expression`, `equippedItems`.
    *   `recipe.interface.ts`: `id`, `ingredients` (array de `Item` y cantidad), `result` (`Item`).
3.  **Implementar Servicios (`/core/services`):** Desarrollar la lógica de cada servicio usando las interfaces y **Signals** para el estado reactivo.
4.  **Crear Componentes Reutilizables (`/share/components`):**
    *   `CharacterDisplayComponent`: Será el componente más importante. Recibirá como `@Input` las señales del `CharacterService` y renderizará las capas de imágenes (`base.png`, `top.png`, etc.) una encima de otra.
5.  **Crear Páginas (`/pages`):**
    *   `MainGameComponent`: Contendrá el `CharacterDisplayComponent` y los menús para cambiar de ropa, interactuando con el `CharacterService` y el `InventoryService`.
6.  **Configurar Rutas (`app.routes.ts`):** Definir las rutas para que `pages/main-game` sea la vista principal, y se pueda navegar a `/inventory` o `/crafting`.
7.  **Refactorizar Lógica de `main.js`:** Mover toda la lógica del `main.js` original a los servicios y componentes correspondientes. Por ejemplo, la lógica de "poner una camiseta" irá en un método del `MainGameComponent` que llamará a `characterService.equipItem(newItem)`.

## 6. Ideas de Ampliación y Nuevas Características

Aprovechando la nueva arquitectura, podemos llevar el juego mucho más lejos.

#### Ampliar Características Actuales:

*   **Sistema de Crafteo Avanzado:**
    *   **Niveles de Recetas:** Implementar los `recipe_tier_X.png` para que haya recetas raras o difíciles.
    *   **Descubrimiento:** Que el jugador pueda descubrir recetas experimentando con materiales.
*   **Inventario Mejorado:**
    *   **Categorías y Filtros:** Añadir pestañas (Ropa, Materiales, Consumibles) y un buscador.
    *   **Stacks de Items:** Agrupar materiales idénticos en lugar de tenerlos por separado.
*   **Personalización del Personaje:**
    *   **Más Slots:** Añadir capas para accesorios, calcetines, guantes, etc. (¡ya tienes los assets!).
    *   **Stats por Ropa:** La ropa podría dar stats (ej: `steel_armor` da +10 defensa) que sirvan para futuras mecánicas.

#### Nuevas Características Potenciales:

*   **Sistema de Misiones/Logros:** "Viste un conjunto deportivo completo", "Craftea tu primera espada de acero".
*   **Tienda:** Un lugar para comprar y vender ropa y materiales.
*   **Sistema de Energía/Ciclo Día-Noche:** Que las acciones cuesten energía y se recupere al "dormir". Esto crea un bucle de juego.
*   **Minijuegos:** Pequeños juegos (de ritmo, de puzzles) para conseguir materiales raros o dinero.
*   **Persistencia de Datos:** Usar `localStorage` para guardar el progreso del jugador entre sesiones. ¡Es muy fácil de implementar en un servicio!
*   **Internacionalización (i18n):** Preparar la app para múltiples idiomas usando las herramientas de Angular.

Este plan te dará una hoja de ruta clara para construir una aplicación robusta y preparada para el futuro. ¡Mucho éxito con la migración, colegui!
