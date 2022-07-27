// Método Map ---------
const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array))
  }
  return newArray
}

console.log(map(arrayMap, callbackMap));

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  return element > 2 && index && array.length > 2
}

function filter(array, callback) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      arr.push(array[i])
    }
  }
  return arr
}

console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
  let resultado = initialValue
  for(let i = 0; i < array.length;i++){
    resultado = callback(resultado , array[i])
  }
  return resultado
}
console.log(reduce(arrayReduce, callbackReduce)); 
console.log(reduce(arrayReduce, callbackReduce, 50)); 
