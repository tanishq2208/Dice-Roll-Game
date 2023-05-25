function rand(){
    return Math.floor(Math.random() * 6) + 1;
}

function getRolls(n){
    return Array.from({length: n}, () => rand());
}

function sum(arr){
    return arr.reduce((prev, curr) => prev + curr, 0);
}

export {getRolls, sum, rand};