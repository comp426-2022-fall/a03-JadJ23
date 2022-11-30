export function roll(sides, dice, rolls){
    let final_vars = [];

    for (let i = 0; i < rolls; i++){
        let sum = 0;
        for (let e = 0; e < dice; e++){
            sum+= Math.floor(1+Math.random()*sides);
        }
        final_vars.push(sum);
    }
    
    return {sides: sides,
            dice: dice,
            rolls: rolls,
            results: final_vars};
}