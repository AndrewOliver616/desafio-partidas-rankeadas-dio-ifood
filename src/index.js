let usarName = "AndreFeraJS"
let lostMatches = 22
let winningMatches = 110
let levelInGame = championLevel(winningMatches, lostMatches)
let finalRanked = rankedVictories (levelInGame)


function championLevel(wMatches, lMatches) {
    return wMatches - lMatches 
}

function rankedVictories(levelInGame) {
    if (levelInGame <10) {
        levelPlayer = "Iron"
    } else if (levelInGame<= 20) {
        levelPlayer = "Bronze"
    }else if (levelInGame<= 50) {
        levelPlayer = "Silver"
    }else if (levelInGame<= 80) {
        levelPlayer = "Gold"
    }else if (levelInGame<= 90) {
        levelPlayer = "Diamond"
    }else if (levelInGame<= 100) {
        levelPlayer = "Legend"
    }else if (levelInGame <= 101) {
        levelPlayer = "Immortal"
    }

    return levelPlayer

    
}

console.log(`O Herói tem de saldo de ${levelInGame} e está no nível ${finalRanked}`)


