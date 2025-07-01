const nav = document.getElementById('main-nav');
nav.innerHTML = `
  <ul style="display:flex; gap:15px; list-style:none; padding:0;">
    <li><a href="index.html">Strona główna</a></li>
    <li><a href="about.html">O projekcie</a></li>
    <li><a href="contact.html">Kontakt</a></li>
  </ul>
`;

document.getElementById('todo-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        li.style.textDecoration = 'line-through';
      } else {
        li.style.textDecoration = 'none';
      }
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Usuń';
    deleteBtn.style.marginLeft = '10px';

    deleteBtn.addEventListener('click', function () {
      console.log('Usuwam zadanie:', li.textContent);
      li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
  }
});

