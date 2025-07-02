import { validateTask } from './validation.js';

const nav = document.getElementById('main-nav');
nav.innerHTML = `
  <ul style="display:flex; gap:15px; list-style:none; padding:0;">
    <li><a href="index.html">Strona główna</a></li>
    <li><a href="about.html">O projekcie</a></li>
    <li><a href="contact.html">Kontakt</a></li>
  </ul>
`;

let taskId = 0;
const tasks = {};

document.getElementById('todo-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();

  if (!validateTask(taskText)) {
    alert('Niepoprawne zadanie! Nie może być puste ani zawierać zakazanych słów.');
    return;
  }

  taskId++;
  tasks[taskId] = { text: taskText, done: false };

  const li = document.createElement('li');
  li.dataset.id = taskId;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '10px';

  checkbox.addEventListener('change', function () {
    tasks[taskId].done = checkbox.checked;
    li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(taskText));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Usuń';
  deleteBtn.style.marginLeft = '10px';

  deleteBtn.addEventListener('click', function () {
    console.log('Usuwam zadanie:', taskText);
    delete tasks[taskId];
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById('todo-list').appendChild(li);
  input.value = '';
});
