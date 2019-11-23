var mocha = require('mocha')
var expect = require('chai').expect
var { describe, it } = mocha

const messenger = require('../monster-messenger')

// TDD - Test driven development
describe('Monster test message generator',  () => {
    it('it generates a scary text for all monsters',  () => {
        let message = messenger.getRandomMessage()
        let statementFound = false

        messenger.monsters.forEach( (monster) => {
           const monsterMatches = monster.scaryStatement.filter( (statement) => {
                return statement === message
            })

            if (monsterMatches.length > 0) {
                statementFound = true
            }
        })
        expect(statementFound).to.equal(true)
    })

    xit('does not send more than one text per hour', () => {

    })

    xit('does not send message from blacklisted monsters',  () => {

    })
})
 