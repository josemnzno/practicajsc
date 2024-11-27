// Ejercicio 1: Detectar años bisiestos

function detectarAniosBisiestos() {
    const anios = [1992, 2000, 1900, 2024];
    for (const anio of anios) {
        if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
            console.log(`${anio} es un año bisiesto.`);
        } else {
            console.log(`${anio} no es un año bisiesto.`);
        }
    }
}



// Ejercicio 2: Producto de números con un valor centinela
function productoNumeros() {
    const numeros = [2, 3, 4, -1];
    let producto = 1;
    for (const numero of numeros) {
        if (numero === -1) break;
        if (numero > 0) producto *= numero;
        else console.log("Por favor, asegúrate de que los números sean positivos.");
    }
    console.log(`El producto total es: ${producto}`);
}

// Ejercicio 3: Raíz cuadrada de números positivos
function raizCuadradaNumeros() {
    const numeros = [4, 16, 25, -1];
    for (const numero of numeros) {
        if (numero === -1) break;
        if (numero >= 0) {
            console.log(`La raíz cuadrada de ${numero} es ${Math.sqrt(numero)}`);
        } else {
            console.log("Por favor, asegúrate de que los números sean positivos.");
        }
    }
}

// Ejercicio 4: Adivinar un número aleatorio
function adivinarNumero() {
    const intentos = [5, 3, 7, 1];
    const aleatorio = 7;
    for (const intento of intentos) {
        if (intento === aleatorio) {
            console.log(`¡Correcto! El número era ${aleatorio}.`);
            break;
        } else {
            console.log(`Intento ${intento} es incorrecto. Intenta nuevamente.`);
        }
    }
}

// Ejercicio 5: Suma de recíprocos
function sumaReciprocales() {
    const n = 5;
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += 1 / i;
    }
    console.log(`La suma de los recíprocos de los primeros ${n} números es: ${suma}`);
}

// Ejercicio 6: Generar suma de dos números aleatorios
function sumaNumerosAleatorios() {
    const pares = [
        { num1: 3, num2: 5, respuesta: 8 },
        { num1: 2, num2: 4, respuesta: 6 },
        { num1: 1, num2: 9, respuesta: 10 }
    ];
    for (const { num1, num2, respuesta } of pares) {
        if (respuesta === num1 + num2) {
            console.log(`Correcto: ${num1} + ${num2} = ${respuesta}`);
        } else {
            console.log(`Incorrecto: ${num1} + ${num2} no es ${respuesta}`);
        }
    }
}

// Ejercicio 7: Números pares/impares hasta detenerse con "stop"
function paresImpares() {
    const entradas = [2, 3, 4, "stop"];
    let pares = 0;
    for (const entrada of entradas) {
        if (entrada === "stop") break;
        const numero = parseInt(entrada);
        if (numero % 2 === 0) {
            console.log(`${numero} es Par`);
            pares++;
        } else {
            console.log(`${numero} es Impar`);
        }
    }
    console.log(`Ingresaste ${pares} números pares.`);
}

// Ejercicio 8: Operaciones con arreglos de meses
function diasEnMes() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const mesIngresado = "Marzo";
    const indice = meses.indexOf(mesIngresado);
    if (indice !== -1) {
        console.log(`El mes de ${mesIngresado} tiene ${dias[indice]} días.`);
    } else {
        console.log("Mes no válido.");
    }
}

// Ejercicio 9: Suma de dos matrices
function sumaMatrices() {
    const arrOfEvens = [2, 4, 6, 8, 10];
    const arrOfOdds = [1, 3, 5, 7, 9];
    const sumaArrays = arrOfEvens.map((num, index) => num + arrOfOdds[index]);
    console.log(sumaArrays); // [3, 7, 11, 15, 19]
}

// Ejercicio 10: Operaciones con daysOfWeek
function operacionesDaysOfWeek() {
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    daysOfWeek.shift();
    daysOfWeek.pop();
    console.log(daysOfWeek); // ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']
    daysOfWeek.push('Sat', 'Sun');
    console.log(daysOfWeek); // ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
}

// Llamar a las funciones
console.log('-----------ejercicio 1-----------')
detectarAniosBisiestos();
console.log('-----------ejercicio 2-----------')
productoNumeros();
console.log('-----------ejercicio 3-----------')
raizCuadradaNumeros();
console.log('-----------ejercicio 4-----------')
adivinarNumero();
console.log('-----------ejercicio 5-----------')
sumaReciprocales();
console.log('-----------ejercicio 6-----------')
sumaNumerosAleatorios();
console.log('-----------ejercicio 7-----------')
paresImpares();
console.log('-----------ejercicio 8-----------')
diasEnMes();
console.log('-----------ejercicio 9-----------')
sumaMatrices();
console.log('-----------ejercicio 10-----------')
operacionesDaysOfWeek();
