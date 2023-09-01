/** function */

function sayHeloo (name) {
    console.log (`Ola ${name}. amigo. Bem vindo a minha pagina`);
}

sayHeloo("Marcos"); 
sayHeloo("Paulo");
sayHeloo("João");


/**Retorno */

function sum (n1, n2) {
    const result = n1 + n2 

    return result 
}

console.log(sum(3,1)); 

/*arguments*/ 

function number() {
    let res= 0 

    for (const n of arguments) {
        res += n 
    }
    return res 
}

console.log (number(1, 2, 3, 4));


/* Valor x Referencia */ 

function soma (so) {
    let res = so 
    res += so 
    return res 
}
let so = 10
console.log(soma(so));

function mul (mult) {
    mult.value *= mult.value 
    return mult
}

const obj = {value:2}
console.log (mul(obj));