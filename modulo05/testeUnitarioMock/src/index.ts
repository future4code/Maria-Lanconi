//interface 

export interface Character {
    name:string
    life:number
    strength: number
    defense: number
}

//função de validação 

export const ValidateCharacter = (input:Character) => {
    if(!input.name || 
        (input.life === undefined || input.life <= 0)  ||
        (input.strength === undefined || input.strength <= 0 )||
        (input.defense === undefined || input.defense <= 0 ) ){
            return false
    } else {
        return true
    }
}

//função performar ataque 

const performAttack = (attacker:Character, defender:Character) => {
    if( !ValidateCharacter(attacker) || !ValidateCharacter(defender)){
        throw new Error('Invalid Character')
    }

    if(attacker.strength > defender.defense){
        defender.life -= (attacker.strength - defender.defense)
    }
}

//funçao de teste ataque

export const performAttackTest = (
    attacker:Character, 
    defender:Character,
    validator:(input:Character) => boolean ) => {

    if(!validator(attacker) || !validator(defender)){
        throw new Error('Invalid Character')
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }

    return defender
}

// 3-) c. A segunda implementação usa uma simulação de resultados para que o teste seja unitário. 

// 4-) a. performAttack precisa que o teste seja feito com mock, pois caso contrário o teste é integrado.
// b.