const defaultGameState = { /** Datos del heroe */
    player: {
        name: "Arden",
        health: 120,
        strength: 15,
        strengthBonus: 3,
        defense: 10,
        defenseBonus: 2,
        currentRoom: 1,
        gold: 50,
        potions: 2
    },

    map: { /** Lista de salas */
        rooms: [
        {
            id: 1,
            monsterProb: 0.3,
            isShop: false,
            name: "Entrada del Bosque",
            description: "Un sendero oscuro lleno de árboles retorcidos.",
            north: 2,
            south: 0,
            east: 0,
            west: 0,
            img: "entrada_bosque.png"
        },
        {
            id: 2,
            monsterProb: 0.5,
            isShop: false,
            name: "Claro Sombrío",
            description: "La luz apenas llega al centro del claro.",
            north: 3,
            south: 1,
            east: 6,
            west: 0,
            img: "claro_sombrio.png"
        },
        {
            id: 3,
            monsterProb: 0.2,
            isShop: true,
            name: "Tienda del Viejo Mago",
            description: "Una tienda llena de pociones y artefactos curiosos.",
            north: 0,
            south: 2,
            east: 0,
            west: 4,
            img: "tienda_mago.png"
        },
        {
            id: 4,
            monsterProb: 0.6,
            isShop: false,
            name: "Caverna Húmeda",
            description: "Las paredes gotean agua y huele a moho.",
            north: 0,
            south: 0,
            east: 3,
            west: 5,
            img: "caverna_humeda.png"
        },
        {
            id: 5,
            monsterProb: 0.8,
            isShop: false,
            name: "Santuario Perdido",
            description: "Ruinas antiguas con símbolos brillantes.",
            north: 0,
            south: 0,
            east: 4,
            west: 0,
            img: "santuario_perdido.png"
        },
        {
            id: 6,
            monsterProb: 0.4,
            isShop: false,
            name: "Ribera del Río",
            description: "El sonido del agua te acompaña.",
            north: 0,
            south: 0,
            east: 0,
            west: 2,
            img: "ribera_rio.png"
        }
        ],

    }
}