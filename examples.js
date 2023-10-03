//forEach

    //array de valores
    const arrayForEach = [1, 2, 3, 4, 5];
    arrayForEach.forEach(item => {
    console.log(item);
    });

    //array de objetos
    const students = [
        { name: 'Juan', age: 25 },
        { name: 'María', age: 22 },
        { name: 'Pedro', age: 28 }
    ];
    
    students.forEach(student => {
        console.log(`${student.name} tiene ${student.age} años.`);
    });

//for of

    //array de valores
    const arrayForOf = [1, 2, 3, 4, 5];
    for (const item of arrayForOf) {
    console.log(item);
    }

    //array de objetos
    const students = [
        { name: 'Juan', age: 25 },
        { name: 'María', age: 22 },
        { name: 'Pedro', age: 28 }
    ];
    
    for (const student of students) {
        console.log(`${student.name} tiene ${student.age} años.`);
    }

//for in

    //array de valores
    const arrayForIn = [1, 2, 3, 4, 5];
    for (const index in arrayForIn) {
    console.log(arrayForIn[index]);
    }

    //array de objetos


//map
    //array de valores
    const arrayMap = [1, 2, 3, 4, 5];
    const newArrayMap = arrayMap.map(item => item * 2);
    console.log(newArrayMap)
    const students = [
        { name: 'Juan', grade: 90 },
        { name: 'María', grade: 88 },
        { name: 'Pedro', grade: 75 }
      ];
      
      const topStudents = students.map(student => console.log(student));


//filter
    //array de valores
    const arrayFilter = [1, 2, 3, 4, 5];
    const filteredArray = arrayFilter.filter(item => item > 2);
    console.log(filteredArray)

    //array de objetos
    const students = [
        { name: 'Juan', grade: 90 },
        { name: 'María', grade: 88 },
        { name: 'Pedro', grade: 75 }
    ];
  
    const topStudents = students.filter(student => student.grade >= 90);

//find
const arrayFind = [1, 2, 3, 4, 5];
const foundItem = arrayFind.find(item => item === 3);
console.log(foundItem)

//some
const arraySome = [1, 2, 3, 4, 5];
const hasEvenNumber = arraySome.some(item => item % 2 === 0);
console.log(hasEvenNumber)

//every
const arrayEvery = [1, 2, 3, 4, 5];
const allPositive = arrayEvery.every(item => item > 0);
console.log(allPositive)


//Template literals
//Permite crear cadenas de texto multilinea y interpolación de variables.
const name = "Juan";
const greeting = `Hola, ${name}!`;

//Arrow Functions
//Descripción: Sintaxis más corta para definir funciones anónimas-> función sin nombre, solo la necesitamos acá
//con ES6
const add = (a, b) => a + b;

//antes
function add(a, b) {
    return a + b;
  }

//let/const y async/await
//let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque. 
//const declara un valor que no se puede modificar

//spread operator
//Permite descomponer un array en elementos individuales o combinar varios arrays en uno solo.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

//Destructuring
//array: Permite extraer valores de un array y asignarlos a variables individuales de manera más concisa.
const [first, second, third] = [1, 2, 3];
//objetos: Permite extraer propiedades de un objeto y asignarlas a variables con el mismo nombre.
const person = { name: 'Juan', age: 30 };
const { name, age } = person;

