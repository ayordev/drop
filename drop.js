
const actionButton = document.getElementById('action-button');
const dropBox = document.getElementById('drop-box');
const navButton = document.getElementById('nav-button');

const down = document.getElementById('down');
const up = document.getElementById('up');
const right = document.getElementById('right');
const left = document.getElementById('left');

const colorButtons = document.querySelectorAll('.color');

let initialState = false;
let color = localStorage.getItem('key');
window.onload = () => {
  if (!color) {
    actionButton.innerText = 'purple dropdown';
  }
};

function dropDown() {
  let color = localStorage.getItem('key');
  down.setAttribute('style', `background-color: ${color}; color: white`);
  up.removeAttribute('style');
  right.removeAttribute('style');
  left.removeAttribute('style');
  dropBox.setAttribute(
    'style',
    'position: absolute; top: 95%; left: 43%; transform: translate(-50%, -50%)',
  );
  actionButton.innerText = `${color} dropdown`;

  if (!color) {
    actionButton.innerText = 'purple dropdown';
  }

  toggleDropBox();
  defaultDropBox();
}

dropDown();

function dropUp() {
  let color = localStorage.getItem('key');
  up.setAttribute('style', `background-color: ${color}; color: white`);
  if (!color) {
    up.style.color = 'white';
    up.style.backgroundColor = 'purple';
  }
  down.removeAttribute('style');
  down.style.backgroundColor = 'white';
  down.style.color = 'black';
  right.removeAttribute('style');
  left.removeAttribute('style');
  dropBox.setAttribute(
    'style',
    'position: absolute; top: -13%; left: 43%; transform: translate(-50%, -50%)',
  );
  actionButton.innerText = `${color} dropup`;

  if (!color) {
    actionButton.innerText = 'purple dropup';
  }
  toggleDropBox();
  defaultDropBox();
}

function dropRight() {
  let color = localStorage.getItem('key');
  right.setAttribute('style', `background-color: ${color}; color: white`);
  if (!color) {
    right.style.color = 'white';
    right.style.backgroundColor = 'purple';
  }
  up.removeAttribute('style');
  down.removeAttribute('style');
  down.style.backgroundColor = 'white';
  down.style.color = 'black';
  left.removeAttribute('style');
  dropBox.setAttribute(
    'style',
    'position: absolute; top: 46.5%; right: 28%; transform: translate(-50%, -50%)',
  );
  actionButton.innerText = `${color} dropright`;

  if (!color) {
    actionButton.innerText = 'purple dropright';
  }
  toggleDropBox();
  defaultDropBox();
}

function dropLeft() {
  let color = localStorage.getItem('key');
  left.setAttribute('style', `background-color: ${color}; color: white`);
  if (!color) {
    left.style.color = 'white';
    left.style.backgroundColor = 'purple';
  }
  up.removeAttribute('style');
  right.removeAttribute('style');
  down.removeAttribute('style');
  down.style.backgroundColor = 'white';
  down.style.color = 'black';
  dropBox.setAttribute(
    'style',
    'position: absolute; top: 46.5%; left: 27.5%; transform: translate(-50%, -50%)',
  );
  actionButton.innerText = `${color} dropleft`;

  if (!color) {
    actionButton.innerText = 'purple dropleft';
  }
  toggleDropBox();
  defaultDropBox();
}

function toggleDropBox() {
  if (!initialState && dropBox.style.visibility == 'hidden') {
    initialState = true;
    dropBox.style.visibility = 'visible';
  } else {
    initialState = false;
    dropBox.style.visibility = 'hidden';
  }
}

function displayDropBox(e) {
  if (!initialState) {
    initialState = true;
    dropBox.style.visibility = 'visible';
  } else {
    initialState = false;
    dropBox.style.visibility = 'hidden';
  }
  console.log(e);
}

function defaultDropBox() {
  let color = localStorage.getItem('key');
  dropBox.style.backgroundColor = color;
}

function getColor() {
  let color = localStorage.getItem('key');
  actionButton.style.backgroundColor = color;
  actionButton.innerText = `${color} dropdown`;
}

getColor();

function saveColor(accessKey) {
  localStorage.setItem('key', accessKey);
}

function pickColor(e) {
  saveColor(e.target.accessKey);
  if (left.style.backgroundColor && left.innerText) {
    left.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropleft`;
  } else if (up.style.backgroundColor && up.innerText) {
    up.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropup`;
  } else if (right.style.backgroundColor && right.innerText) {
    right.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropright`;
  } else {
    down.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropdown`;
  }

  actionButton.style.backgroundColor = e.target.accessKey;
  dropBox.style.backgroundColor = e.target.accessKey;
}

colorButtons.forEach((button) => button.addEventListener('click', pickColor));

down.addEventListener('click', dropDown);
up.addEventListener('click', dropUp);
right.addEventListener('click', dropRight);
left.addEventListener('click', dropLeft);

actionButton.addEventListener('click', displayDropBox);
