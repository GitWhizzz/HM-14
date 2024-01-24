// flatten
// Напишіть функцію-генератор flatten, яка приймає масив, що містить вкладені масиви, і повертає генератор для ітерації по всіх елементах вкладених масивів. Зверніть увагу, що ваш генератор повинен обробляти різні рівні вкладеності та повертати всі елементи в одновимірному порядку.

function* flatten(array) {
    for (const element of array) {
        if (Array.isArray(element)) {
            yield* flatten(element);
        } else {
            yield element;
        }
    }
}

const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);
// [1, 2, 3, 4, 5, 6, 7]