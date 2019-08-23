const circuitApi = require('./models/circuits.js')
const scoresApi = require('./models/scores.js')
const playersApi = require('./model/players.js')

const getPlayerScores = (scores, player) => {
    player.totalScore = 
        scores
            .filter(score => score.p1 === playerId || score.p2 === playerId)
            .reduce((t, score) => t + score.score, 0)
}

//const foo = (a) => a+1

const getTotalCircuitScores = (circuitId) => {
    circuitApi.getCircuitById(circuitId).then(circuit =>
    scoresApi.getScoresByCircuitId(circuitId).then(scores =>
    Promise.all(circuit.playerIds.map(playerApi.getPlayerById)).then(allPlayers =>
        allPlayers.map(p => getPlayerScores(scores, p))
    )))
}