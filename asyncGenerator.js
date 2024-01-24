// asyncGenerator
// Створіть функцію-генератор asyncGenerator, яка отримуватиме на вході масив промісів і повертатиме результати виконання цих промісів у міру їхнього завершення.

async function* asyncGenerator(promises) {
    let indexedPromises = promises.map((p, index) => p.then(result => ({ index, result })));
    const results = new Array(promises.length);

    while (indexedPromises.length > 0) {
        const { index, result } = await Promise.race(indexedPromises);
        yield result;

        indexedPromises = indexedPromises.filter((_, i) => i !== index);
        results[index] = result;
    }

    return results;
}

const delay = (ms, result) => new Promise(resolve => setTimeout(() => resolve(result), ms));

const promises = [
    delay(300, 'First'),
    delay(200, 'Second'),
    delay(100, 'Third')
];

(async () => {
    const gen = asyncGenerator(promises);

    for await (const result of gen) {
        console.log(result);
    }
})();

// Third
// Second
// First