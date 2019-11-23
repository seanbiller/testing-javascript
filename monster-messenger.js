const monsters = require('./christmas-monsters.json')
var randomArrayIndex = require('random-array-index')


function getRandomMessage () {
    const monsterIdx = randomArrayIndex(monsters)
    const monster = monsters[monsterIdx]
    const statement = monster.scaryStatement[0]
    console.log(statement)
    return statement
}


module.exports = {
    getRandomMessage,
    monsters
}