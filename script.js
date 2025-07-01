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
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Usuń';
    deleteBtn.style.marginLeft = '10px';

    deleteBtn.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
  }
});
