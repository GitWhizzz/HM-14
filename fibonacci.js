// fibonacci
// Напишіть функцію-генератор fibonacci, яка повертає наступне число Фібоначчі при кожному виклику. Генератор повинен зупинитися після досягнення заданої межі n.

// Виведе 0 console.log(fibGen.next().value);
// Виведе 1 console.log(fibGen.next().value);
// Виведе 1 console.log(fibGen.next().value);
// Виведе 2 console.log(fibGen.next().value);
// Виведе 3 console.log(fibGen.next().value);
// ... і так далі, поки не досягне або перевищить число 10

function* fibonacci(limit) {
    let [prev, current] = [0, 1];

    while (prev <= limit) {
        yield prev;
        [prev, current] = [current, prev + current];
    }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value); // 8
console.log(fibGen.next().value); // undefined