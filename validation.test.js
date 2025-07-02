import { validateTask } from './validation.js';

function runTests() {
  let passed = 0;
  let failed = 0;

  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log(`Zaliczone: ${testName}`);
      passed++;
    } else {
      console.error(`Niezaliczone: ${testName}\n   Oczekiwano: ${expected}\n   Otrzymano: ${actual}`);
      failed++;
    }
  }


  assertEqual(validateTask('Zrób zadanie'), true, 'Poprawne zadanie');
  assertEqual(validateTask('   '), false, 'Puste zadanie');
  assertEqual(validateTask('dupa'), false, 'Zawiera wulgaryzm');
  assertEqual(validateTask('Co za cholera!'), false, 'Zawiera zakazane słowo');
  assertEqual(validateTask('Wynieś śmieci'), true, 'Inne poprawne zadanie');

  console.log(`\nTesty zakończone: ${passed} zdanych, ${failed} niezdanych`);
}

runTests();
