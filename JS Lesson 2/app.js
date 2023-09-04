

// object

// (from zelda)

// defining the app

const playerModel = {
    name: 'Link',
    hearts: 3,
    inventory: [],
    sword: null,
    shield: null,
    tunic: {
        name: 'Kokori Tunic',
        damage: 2
    },
    boots: {
        name: 'Kokori Boots',
        damage: 2
    },
    hat: {
        name: 'Kokori Hat',
        damage: 2
    },
}

const playerFactory = function (player = playerModel) {
    return { ...playerModel, ...player }
}

const listPlayers = (players) => {
    console.table(players)
}

const game = (players) => {
    listPlayers(players)
    players.forEach((player) => console.log(`Hello, ${player.name}`))
}


// starting the app

const playerOne = playerFactory({
    name: 'Dan'
})

const playerTwo = playerFactory({
    name: 'Ili',
    inventory: [
        {
            name: 'Korok Seed',
            qty: 1
        }
    ],
    tunic: {
        name: 'Kokori Tunic',
        damage: 6
    },
    hat: {
        name: 'Kokori Hat',
        damage: 6
    }
})

const players = [
    playerOne,
    playerTwo
]


// "MAIN OPERATION/EXECUTABLE/PROCESSS"

game(players)

console.log(JSON.stringify(players, null, 2))