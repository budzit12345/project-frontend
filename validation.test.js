import { validateTask } from './validation.js';

describe('validateTask', () => {
  test('Poprawne zadanie', () => {
    expect(validateTask('Zrób zadanie')).toBe(true);
  });

  test('Puste zadanie', () => {
    expect(validateTask('   ')).toBe(false);
  });

  test('Zawiera wulgaryzm', () => {
    expect(validateTask('dupa')).toBe(false);
  });

  test('Zawiera zakazane słowo', () => {
    expect(validateTask('Co za cholera!')).toBe(false);
  });

  test('Inne poprawne zadanie', () => {
    expect(validateTask('Wynieś śmieci')).toBe(true);
  });
});
