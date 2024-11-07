/*Подключить файл в проект через тег script
Выполнить упражнения: Напсать функции, которые выполняют следующее:
Сложить два числа
Вернуть наиболшее из 3х числел
Вернуть самую длинную строку
Является ли слова палиндромом?
Сумма элементов массива
Отфильтровать массив чисел
Отфильтровать массив объектов (младше 50 лет) [{ name: "Bob", age: 50}, { name: "Jane", age: 64}, { name: "Jack", age: 25}]
Склонировать объект { name: "Bob", age: 50, children: [ { name: "Marie", age: 16}, { name: "Jame", age: 12} ] }
*/

function sum_two_numbers(a,b) {
    return a+b;
  }

  const a1 = 45;
  const b1 = 45;

  console.log(sum_two_numbers(a1, b1));

function max_of_three_numbers(a,b,c) {
    let res=a;
    if (b>res) {
        res=b
    }
    if (c>res) {
        res=c
    }

    return res
  }

  const c1=300

  console.log(max_of_three_numbers(a1, b1,c1));
  
  function sum_two_numbers(a,b) {
    return a+b;
  }

  function getLongestString() {
    // Запрашиваем у пользователя, сколько строк он хочет ввести
    let numberOfStrings = prompt("Введите количество строк (максимум 10):");

    // Проверка на целое число и на допустимый диапазон от 1 до 10
    if (!Number.isInteger(Number(numberOfStrings)) || numberOfStrings <= 0 || numberOfStrings > 10) {
        alert("Ошибка ввода! Пожалуйста, введите целое число от 1 до 10.");
        return;
    }

    let strings = [];

      // Запрашиваем строки у пользователя
      for (let i = 0; i < numberOfStrings; i++) {
        let userInput = prompt(`Введите строку ${i + 1}:`);
        strings.push(userInput);
    }

    // Поиск самой длинной строки простым способом
    let longestString = ""; // Начинаем с пустой строки

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
            longestString = strings[i]; // Обновляем, если нашли более длинную строку
        }
    }

    alert(`Самая длинная строка: ${longestString}`);
    return longestString;
  }   

 console.log('!!');
 getLongestString()


function checkPalindrome() {
    // Запрашиваем у пользователя слово для проверки
    let inputWord = prompt("Введите слово для проверки, является ли оно палиндромом:");
    
    // Приводим слово к нижнему регистру, чтобы игнорировать разницу между заглавными и строчными буквами
    let word = inputWord.toLowerCase();
    
    // Разворачиваем слово и сравниваем его с исходным
    let reversedWord = word.split('').reverse().join('');
    
    // Проверяем, является ли слово палиндромом и выводим результат
    if (word === reversedWord) {
        alert(`${inputWord} является палиндромом!`);
    } else {
        alert(`${inputWord} не является палиндромом.`);
    }
}

// Вызов функции для проверки
checkPalindrome();

function sumArrayElements(array) {
    let sum = 0; // Инициализируем переменную для хранения суммы

    // Перебираем каждый элемент массива и добавляем его к сумме
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum; // Возвращаем сумму
}

// Пример использования
let numbers = [1, 2, 3, 4, 5];
let totalSum = sumArrayElements(numbers);
console.log(`Сумма элементов массива ${numbers}: ${totalSum}`);

function filterNumbersGreaterThanTen(array) {
    let filteredArray = []; // Инициализируем пустой массив для хранения отфильтрованных чисел

    // Перебираем каждый элемент массива
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) { // Условие: число должно быть больше 10
            filteredArray.push(array[i]); // Добавляем число в filteredArray, если условие выполнено
        }
    }

    return filteredArray; // Возвращаем отфильтрованный массив
}

let numbers1 = [1, 5, 10, 15, 20];
let filteredNumbers = filterNumbersGreaterThanTen(numbers1);
console.log(`Отфильтрованный массив ${numbers1}: ${filteredNumbers}`);

function filterYoungerThanFifty(people) {
    let filteredPeople = []; // Инициализируем пустой массив для хранения отфильтрованных объектов

    // Перебираем каждый объект в массиве
    for (let i = 0; i < people.length; i++) {
        if (people[i].age < 50) { // Условие: возраст должен быть меньше 50
            filteredPeople.push(people[i]); // Добавляем объект в filteredPeople, если условие выполнено
        }
    }

    return filteredPeople; // Возвращаем отфильтрованный массив
}

// Пример использования
let people = [
    { name: "Bob", age: 50 },
    { name: "Jane", age: 64 },
    { name: "Jack", age: 25 }
];

let youngerThanFifty = filterYoungerThanFifty(people);
console.log(people,youngerThanFifty);

function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
//Не клонирует функции и сложные объекты аля даты
// Пример использования
let originalObject = {
    name: "Bob",
    age: 50,
    children: [
        { name: "Marie", age: 16 },
        { name: "Jame", age: 12 }
    ]
};

let clonedObject = cloneObject(originalObject);

console.log(originalObject);
console.log(clonedObject);