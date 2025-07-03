const { filterTasks } = require('./filter.js');

function runTests() {
  let passed = 0;
  let failed = 0;

  function assertEqual(actual, expected, testName) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr === expectedStr) {
      console.log(`Zaliczone: ${testName}`);
      passed++;
    } else {
      console.error(`Niezaliczone: ${testName}`);
      console.error(`Oczekiwano: ${expectedStr}`);
      console.error(`Otrzymano:  ${actualStr}`);
      failed++;
    }
  }

  const tasks = {
    1: { text: 'Zadanie 1', done: false },
    2: { text: 'Zadanie 2', done: true },
    3: { text: 'Zadanie 3', done: false }
  };

  assertEqual(
    filterTasks(tasks, true),
    { 2: { text: 'Zadanie 2', done: true } },
    'Filtruj zadania wykonane'
  );

  assertEqual(
    filterTasks(tasks, false),
    {
      1: { text: 'Zadanie 1', done: false },
      3: { text: 'Zadanie 3', done: false }
    },
    'Filtruj zadania niewykonane'
  );

  console.log(`\n Testy zakończone: ${passed} zdanych, ${failed} niezdanych`);
}

runTests();
