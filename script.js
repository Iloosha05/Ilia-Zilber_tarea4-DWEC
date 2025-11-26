let defaultGameState = { /** Datos del heroe */
    player: {
        name: "Arden",
        health: 120,
        strength: 15,
        strengthBonus: 3,
        defense: 10,
        defenseBonus: 2,
        currentRoom: 1,
        gold: 50,
        potions: 2 },

    map: { /** Aquí duardamos todas las listas de salas y enemigos */
        rooms: [ /** Lista de salas */
        {
            id: 1,
            monsterProb: 0,
            isShop: false,
            name: "El patio de bloque",
            description: "Un lugar caótico, rodeado de edificios altos.",
            north: 0,
            south: 0,
            east: 0,
            west: 0,
            img: "patio.png"},

        {
            id: 2,
            monsterProb: 0.7,
            isShop: false,
            name: "Garajes",
            description: "Un laberinto de garajes soviéticos",
            north: 0,
            south: 1,
            east: 0,
            west: 0,
            img: "garajes.png"},
            
        {
            id: 3,
            monsterProb: 0.7,
            isShop: true,
            name: "Tienda universal",
            description: "Una tienda dónde se puede encontrar todo",
            north: 1,
            south: 0,
            east: 1,
            west: 0,
            img: "tienda.png"},
            
        {
            id: 4,
            monsterProb: 0.7,
            isShop: false,
            name: "Portal",
            description: "Nadie sabe que está pasando aquí",
            north: 0,
            south: 0,
            east: 0,
            west: 1,
            img: "portal.png"},
            
        {
            id: 5,
            monsterProb: 0.7,
            isShop: false,
            name: "Zona infantil",
            description: "Aquí me crié.",
            north: 1,
            south: 0,
            east: 0,
            west: 0,
            img: "infantil.png"},
            
        {
            id: 6,
            monsterProb: 1,
            isShop: false,
            name: "En el portal",
            description: "Nadie aquí.. o...",
            north: 0,
            south: 0,
            east: 0,
            west: 2,
            img: "en_portal.png"}
        ],
        
        enemies: [ /** Lista de enemigos */
        {
            name: "Gopnik",
            isBoss: false,
            description: "Una perona deportista y agresiva.",
            health: 40,
            strength: 8,
            defence: 3,
            img: "gopnik.webp"},
            
        {
            name: "Cliente enfadado",
            isBoss: false,
            description: "Furioso y hambriento.",
            health: 55,
            strength: 10,
            defence: 5,
            img: "cliente.webp"},

        {
            name: "Bandido",
            isBoss: true,
            description: "Tiene una pistola de aire",
            health: 120,
            strength: 18,
            defence: 12,
            img: "bandido.webp"}
    ]
  }
};

function mostrarHeroe() { /** Funccion para mostrar los datos del heroe */
    let heroDiv = document.getElementById("hero-info"); /** La variable para el elemento por dónde vamos a exportar la información */

    heroDiv.innerHTML = /** Mostramos todo en el fichero .html */
    '<h3>' + defaultGameState.player.name + '</h3>' +
    '<p>Salud: ' + defaultGameState.player.health + '</p>' +
    '<p>Fuerza: ' + defaultGameState.player.strength +
    ' (+' + defaultGameState.player.strengthBonus + ')</p>' +
    '<p>Defensa: ' + defaultGameState.player.defense +
    ' (+' + defaultGameState.player.defenseBonus + ')</p>' +
    '<p>Oro: ' + defaultGameState.player.gold + '</p>' +
    '<p>Pociones: ' + defaultGameState.player.potions + '</p>';
}

function mostrarSala() { /** Funccion para mostrar la sala */
    let salaDiv = document.getElementById("room-info"); /** La variable para el elemento por dónde vamos a exportar la información */
    let rooms = defaultGameState.map.rooms; /** Consultamos con el array de salas */

    let randomRoom = rooms[Math.floor(Math.random() * rooms.length)]; /** Obtenemos una sala aleatoria */

    salaDiv.innerHTML = /** Mostramos todo en el fichero .html */
    "<h3>" + randomRoom.name + "</h3>" +
    "<img src='img/" + randomRoom.img + "' >" +
    "<p>" + randomRoom.description + "</p>" +
    "<p>Tienda? " + (randomRoom.isShop ? "Sí" : "No") + "</p>" +
    "<p>Probabilidad de monstruos: " + randomRoom.monsterProb + "</p>";
}

function mostrarEnemigo() { /** Funccion para mostrar el enemigo */
    let enemigoDiv = document.getElementById("enemy-info"); /** La variable para el elemento por dónde vamos a exportar la información */
    let enemies = defaultGameState.map.enemies; /** Consultamos con el array de enemigos */

    let randomEnemy = enemies[Math.floor(Math.random() * enemies.length)]; /** Obtenemos un enemigo aleatorio */

    enemigoDiv.innerHTML = /** Mostramos todo en el fichero .html */
    "<h3>" + randomEnemy.name + " " + (randomEnemy.isBoss ? "(Jefe)" : "") + "</h3>" +
    "<img src='img/" + randomEnemy.img + "' >" +
    "<p>Jefe? " + (randomEnemy.isBoss ? "Sí" : "No") + "</p>" +
    "<p>" + randomEnemy.description + "</p>" +
    "<p>Salud: " + randomEnemy.health + "</p>" +
    "<p>Fuerza: " + randomEnemy.strength + "</p>" +
    "<p>Defensa: " + randomEnemy.defence + "</p>";
}
