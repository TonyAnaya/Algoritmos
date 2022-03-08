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




function fizzBuzz(n) {
    // Write your code here
    
    for(let i = 1; i < n+1; i++){
        if(i%3 === 0 && i%5 != 0){
            console.log("fizz")
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

function forFor(n) {
    console.log("i : j")
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i + " : " + j)
        }
    }
}
forFor(5)


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