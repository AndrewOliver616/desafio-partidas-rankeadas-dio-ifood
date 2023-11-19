let usarName = "AndreFeraJS"
let lostMatches = 22
let winningMatches = 110
let levelInGame = championLevel(winningMatches,lostMatches)
//console de teste
console.log("vitorias " + levelInGame)

function championLevel(wMatches, lMatches) {
    return wMatches - lMatches 
}




