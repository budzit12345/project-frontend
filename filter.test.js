import { filterTasks } from './filter.js';

describe('filterTasks', () => {
  const tasks = {
    1: { text: 'Zadanie 1', done: false },
    2: { text: 'Zadanie 2', done: true },
    3: { text: 'Zadanie 3', done: false }
  };

  test('filtruje zadania wykonane', () => {
    const result = filterTasks(tasks, true);
    expect(result).toEqual({ 2: { text: 'Zadanie 2', done: true } });
  });

  test('filtruje zadania niewykonane', () => {
    const result = filterTasks(tasks, false);
    expect(result).toEqual({
      1: { text: 'Zadanie 1', done: false },
      3: { text: 'Zadanie 3', done: false }
    });
  });
});
