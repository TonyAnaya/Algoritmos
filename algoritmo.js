//Algorithm
//aabbccdd -> 2a2b2c2d
//abcd -> 1a1b1c1d
//zhhhsssy -> 1z3h3s1y
//aaba -> 2a1b1a

const string = "aaadggnnrrrkkscccc"
const abc = (string) =>{
    if(string.length == 0){
        return "Error de entrada"
    }
    let contador = 1
    let letra = string[0]
    let salida = ""
    for (let i = 1; i < string.length; i++) {
        string[i];
        if (string[i]==letra){
            contador = contador + 1
        }else{
            salida = salida + contador + letra
            letra = string[i]
            contador = 1
        }
    }
    salida = salida + contador + letra
    return salida
}

console.log("Ejercicio número 1")
console.log(abc(string));

//Algorithm
//Inversos a 100
//[20,80,58,90,55,51,13,13] -> target (20)
//20 -> [1]
//42 -> [2]
//10 -> [3]
//87 -> [6,7]
//43 -> [] | "no encontré el número"

const array = [20,80,58,90,55,51,13,13,12,65,11,87,56,42,98,67,48,23,09]
const target = 87
const rev = (array,target) => {
    let res = []
    //se checa si el arreglo existe
    if(!array[0]){
        return "El arreglo esta vacioooo, lo ves? no hay datos aqui"
    }
    //Se genera el número objetivo
    let tegrat = 100 - target
    //Se recorre el arreglo
    for (let i = 0; i < array.length; i++) {
        //Se verifica que el numero objetivo se encuentre en la posicion del arreglo
        if(tegrat === array[i]){
            //Se añade la posicion acrual al arreglo de resultados
           res.push(i);
        }
    }
    if(!res[0]){
        res = "No encontré el resultado en el arreglo :("
    }
    return res
}
console.log("Ejercicio número 2")
console.log(rev(array,target))
//Algorithm
//Busqueda Binaria
//3000//9000//1000000
//[48,53,57,58,60,70,75,80,81,99,100]
//regresa la posicion de la persona que pesa el objetivo
//Target 80 = 7
//f(80,[48,53,57,58,60,70,75,80,81,99,100]) = 7
let numeGran = 1024
let arreGran = [1]
for (let j = 1; j < (numeGran); j++) {
    arreGran.push(arreGran[j-1] + 1 + Math.floor(Math.random() * 9));
}
//console.log(arreGran)
console.log("Ejercicio número 3")
//          0  1  2  3  4  5  6  7   8   9  10  11  12  13  14  15  16
let temp = [22,42,62,73,84,86,88,123,234,237]
let encontrado = false;
//lenght 17
let arre = arreGran;
let targ = 242;
let izquierda = 0;
let derecha = arre.length - 1
let com = 0
let indi =  (izquierda + derecha) / 2;
indi = indi - (indi % 2)
console.log(arreGran)
console.time('loop');
do{
    if(arre[indi] == targ){
        encontrado=true
        console.log("El numero " + targ + " esta en la posicion " + indi)
    }
    if(arre[indi] < targ){
        izquierda = indi + 1
    }
    if(arre[indi] > targ){
        derecha = indi - 1
    }
    indi = (izquierda + derecha)/2
    if(izquierda == derecha){
        indi = izquierda
    }
    if (!Number.isInteger(indi)){
        indi = indi - 0.5
    } 
    if(izquierda > indi){
        encontrado=true
        console.log("No se encontro el número")
    }
    if(derecha < indi){
        encontrado=true
        console.log("No se encontro el número")
    }
}while(encontrado != true) 
console.timeEnd('loop');

//Algorithm
//Bubble Sort
//[99,53,100,75,58,70,81,60,57,80,48] => [48,53,57,58,60,70,75,80,81,99,100]
let arry =[99,53,100,75,58,70,81,60,57,80,48]
function bubbleSort(array) {
    let swapped = true;
    do {
        swapped = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(array)
    return array;
}
bubbleSort(arry)

//FizzBuzz 
// Fizz => (n % 3) = 0
// Buzz => (n % 5) = 0
// FizzBuzz => (n % 3) = 0 && (n % 5) = 0
function fizzBuzz(n) {
    // Write your code here
    
    for(let i = 1; i < n+1; i++){
        if(i%3 === 0 && i%5 != 0){
            console.log("Fizz")
        }
        if(i%5 == 0 && i%3 != 0){
            console.log("Buzz")
        }
        if(i%5 == 0 && i%3 === 0){
            console.log("FizBuzz")
        }
        if(i%3 != 0 && i%5 !=0){
            console.log(i)
        }
    }
}
fizzBuzz(15)


//print index values of a for inside a for
function forFor(n) {
    console.log("i : j")
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i + " : " + j)
        }
    }
}
forFor(5)

//Search the 3 top suggestions deppending on the input
function searchSuggestions(repository, customerQuery) {
    let response =[]
    let result =[]
    if(customerQuery.length > 1){
        for (let i = 0; i < repository.length; i++) {
            if (repository[i].includes(customerQuery)){
                response.push(repository[i])
                response.sort()
            }
        }
    }
    if (response.length > 3){
        result[0] = response[0]
        result[1] = response[1]
        result[2] = response[2]
    }else{
        result=response
    }
    console.log(result)
}
let repositorio = ["mobile","mouse","moneypot","monitor","mousepad"]
let query = "mo"
let query2 = "mou"
let query3 = "mous"
let query4 = "mouse"
searchSuggestions(repositorio,query4)


//Look if a shopping cart array contains an specific sub-array
function promo(shoppingCart, patron) {
    let patron_temp = patron
    if(patron.includes("anything")){
        comodin = patron.indexOf("anything")
    }
    for (let i = 0; i < (shoppingCart.length-patron.length + 1); i++) {
        let temp = []
        for (let j = i; j < (patron.length + i); j++) {
            temp.push(shoppingCart[j])
        }
        patron_temp[comodin] = temp[comodin]
        if (JSON.stringify(temp) == JSON.stringify(patron_temp)) {
            console.log("Se encontro la coincidencia para aplicar promocion " + temp)
        }
    }
}
let compra= ["apple", "carrot", "water", "pineapple", "watermelon", "banana", "banana", "apple", "carrot", "water"]
let patron = ["banana", "banana", "apple", "anything", "water"]
promo(compra,patron)

//Find the missing munber in an unsorted array 
function MissingNumber(missing) {
    missing = missing.sort(function(a, b){return a - b})
    let encontrado = false
    let indice = 0
    let n = missing.length + 1
    for (let i = 0; i < missing.length; i++) {
        if(missing[i] != (i+1)){
            if(!encontrado){
                encontrado = true
                indice = i + 1
            }
        }
    }
    console.log("n = " + n + " missing number = " + indice)
}
let missingNum=[6,1,7,4,3,5,10,8,2,9]
MissingNumber(missingNum)


//Determine if the sum of two integers is equal to the given value

function suma(val, conjunto) {
    let result = []
    let subRes = []
    for (let i = 0; i < conjunto.length; i++) {
        for (let j = i; j < conjunto.length; j++) {
            if(i != j){
                let sumita = conjunto[i] + conjunto[j]
                if(sumita === val){
                    subRes = [conjunto[i],conjunto[j]]
                    result.push(subRes)
                }
            }
        }
    }
    for (let k = 0; k < result.length; k++) {
        console.log(val + " = " + result[k][0] + " + " + result[k][1])
    }
    if(!subRes[0]){
        console.log("No hay valores que sumen " + val)
    }
}
let valor = 10
let conjun = [5,7,1,2,8,4,3]
suma(valor, conjun)

//Merge 2 sorted arrays into one sorted array
function sortArray(arre1, arre2) {
    let result = []
    let indi1 = 0
    let indi2 = 0
    for (let i = 0; i < (arre1.length + arre2.length + 1); i++) {
        if(arre1[indi1] < arre2[indi2]){
            result.push(arre1[indi1])
            indi1 = indi1 + 1
        }
        if(arre1[indi1] > arre2[indi2]){
            result.push(arre2[indi2])
            indi2 = indi2 + 1
        }
        if(!arre1[indi1] && arre2[indi2]){
            result.push(arre2[indi2])
            indi2 = indi2 + 1
        }
        if(!arre2[indi2] && arre1[indi1]){
            result.push(arre1[indi1])
            indi1 = indi1 + 1
        }
    }
    console.log(result)
}
let conjunto1 = [1, 2, 4, 8, 15, 19]
let conjunto2 = [7, 9, 10, 16, 29]
sortArray(conjunto1, conjunto2)

//Reverse words in a sentence
function reverse(sentence) {
    let result = ""
    let arre = (sentence.split(" "))
    arre.reverse()
    for (let i = 0; i< arre.length; i++) {
      result = result + " " + arre[i]
    }
    console.log(result)
}
let sentence = "Hola mi nombre es Tony y soy muy sexy"
reverse(sentence)


//How many ways can you make change with coins and a total amount
let denom = [1,2,5]
let cant = 7
function cambio(denominations, amount) {
    let solution = [];
    for (let i = 0; i < amount + 1; i++) {
      solution[i] = 0;
    }
    solution[0] = 1;
    for (let j = 0; j < denominations.length; j++) {
      for (let i = denominations[j]; i < amount + 1; i++) {
        solution[i] += solution[i - denominations[j]];
      }
    }
    console.log(solution[solution.length - 1])
    console.log("solveCoinChange([" + String(denominations) + '], ' + String(amount) + ') = ' + solution[solution.length - 1])
}
cambio(denom, cant)

//Find Kth permutation

let factorial = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

let find_kth_permutation = function(v, k, result) {
    if (!v || v.length === 0) {
        return;
    }

    let n = v.length;
    // count is number of permutations starting with first digit
    let count = factorial(n - 1);
    let selected = Math.floor((k - 1) / count);
    result[0] += '' + v[selected];
    v.splice(selected, 1);
    k = k - (count * selected);

    find_kth_permutation(v, k, result);
};

let get_permutation = function(n, k) {
    let v = [];
    for (let i = 0; i < n; i++) {
        v.push(i + 1);
    }
    let result = [''];
    find_kth_permutation(v, k, result);
    return result[0];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Kth Permutation");
console.log("---------------------------------------");
let x = 3;
let n = factorial(x);
for (let i = 1; i <= n; i++) {
    let temp = get_permutation(x, i);
    console.log(i + "th permutation = ", temp);
}


let ratings = [4,3,5,4,3]
function countDecreasingRatings(ratings) {
    let result = []
    let temp = []
    for (let i = 0; i < ratings.length; i++) {
        result.push(ratings[i])
        for (let j = i; j < ratings.length; j++) {
            if(ratings[j] != ratings[j+1]+1){
                if(temp.length > 1){
                    result.push(temp)
                }
                temp=[]
            }
            if(!result.includes(temp)){
                
                temp.push(ratings[j])
            }

            if(ratings[j] === ratings[j+1]+1){
                temp.push(ratings[j+1])
            }
        }
    }
    console.log(result)
    console.log(result.length)
    console.log("")
    console.log("")
    console.log("")
}
countDecreasingRatings(ratings)

/*
if(ratings[i] === (ratings[i-1]-1) || !ratings[i-1]){
    temp.push(ratings[i])
    console.log(i + " - " + temp)
}
if(ratings[i] ===(ratings[i-1]-1) && ratings[i] === ratings[i+1]+1){

    temp.push(ratings[i])
}

if(ratings[i] != ratings[i-1]-1 && !result.includes(temp)){
    result.push(temp)
    temp = []
}
if (i== ratings.length -1){
    result.push(temp)
}*/


let password = "test"
function strength(pass) {
    let res = 0
    for (let i = 0; i <= pass.length; i++) {
        for (let j = i; j <= pass.length; j++) {
            let temp = pass
            temp = temp.slice(i,j)
            if(temp){
                let letras = ""
                for(let l = 0; l < temp.length; l++){
                    if(!letras.includes(temp[l])){
                        letras = letras + temp[l]
                    }
                }
                res = res + letras.length
            }
        }
        
    }
    console.log(res)
}
strength(password)