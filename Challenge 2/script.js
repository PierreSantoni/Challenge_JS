/* Exercice 1 :

let bernardTaille = 1.88;
let bernardPoids = 95;

let marcelTaille = 1.76;
let marcelPoids = 85;

let bernardHigherIMC;

function IMC(poids, taille)
{
    return poids/(taille*taille);
}

if(IMC(bernardPoids, bernardTaille)>IMC(marcelPoids, marcelTaille)) {
    bernardHigherIMC = true;
} else {
    bernardHigherIMC = false;
}

console.log(bernardHigherIMC);


Exercice 2 :

let bernardTaille = 1.88;
let bernardPoids = 95;

let marcelTaille = 1.76;
let marcelPoids = 85;

function IMC(poids, taille)
{
    return poids/(taille*taille);
}

if(IMC(bernardPoids, bernardTaille)>IMC(marcelPoids, marcelTaille)) {
    console.log("l'IMC de Benard est plus grand que celui de Marcel, en effet Bernard a un IMC de " , IMC(bernardPoids, bernardTaille) , " et celui de Marcel est de " , IMC(marcelPoids, marcelTaille) , ".");
} else {
    console.log("l'IMC de Benard est plus petit que celui de Marcel, en effet Bernard a un IMC de " , IMC(bernardPoids, bernardTaille) , " et celui de Marcel est de " , IMC(marcelPoids, marcelTaille) , ".");
}
*/

//Exercice 3 :

let bernardTaille = 1.88;
let bernardPoids = 95;

let marcelTaille = 1.76;
let marcelPoids = 85;

let valueIMC;

function IMC(poids, taille)
{
    return valueIMC = poids/(taille*taille);
}

IMC(bernardPoids, bernardTaille);
console.log("IMC de Bernard : " , valueIMC);

switch(true){
    case valueIMC<21:
        console.log("Bernard est en insuffisance pondérale.");
        break;
    case valueIMC<26:
        console.log("Bernard a un poids normal.");
        break;
    case valueIMC<31:
        console.log("Bernard est en surpoids.");
        break;
    case valueIMC<41:
        console.log("Bernard est obèse.");
        break;
    case valueIMC>41:
        console.log("Bernard est obèse morbide.");
        break;
    default:
        console.log("Un problème est survenu...");
        break;
}

IMC(marcelPoids, marcelTaille);
console.log("IMC de Marcel : " , valueIMC);

switch(true){
    case valueIMC<21:
        console.log("Marcel est en insuffisance pondérale.");
        break;
    case valueIMC<26:
        console.log("Marcel a un poids normal.");
        break;
    case valueIMC<31:
        console.log("Marcel est en surpoids.");
        break;
    case valueIMC<41:
        console.log("Marcel est obèse.");
        break;
    case valueIMC>41:
        console.log("Marcel est obèse morbide.");
        break;
    default:
        console.log("Un problème est survenu...");
        break;
}