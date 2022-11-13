const actionButton = document.getElementById('action-button');
const dropBox = document.getElementById('drop-box');
const navButton = document.getElementById('nav-button');

const down = document.getElementById('down');
const up = document.getElementById('up');
const right = document.getElementById('right');
const left = document.getElementById('left');

const colorButtons = document.querySelectorAll('.color');

let initialState = false;

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
  toggleDropBox();
  defaultDropBox();
}

dropDown();

function dropUp() {
  let color = localStorage.getItem('key');
  up.setAttribute('style', `background-color: ${color}; color: white`);
  down.removeAttribute('style');
  right.removeAttribute('style');
  left.removeAttribute('style');
  dropBox.setAttribute(
    'style',
    'position: absolute; top: -13%; left: 43%; transform: translate(-50%, -50%)',
  );
  actionButton.innerText = `${color} dropup`;
  toggleDropBox();
  defaultDropBox();
}

function dropRight() {
  let color = localStorage.getItem('key');
  right.setAttribute('style', `background-color: ${color}; color: white`);
  up.removeAttribute('style');
  down.removeAttribute('style');
  left.removeAttribute('style');
  dropBox.setAttribute(
    'style',
    'position: absolute; top: 46.5%; right: 28%; transform: translate(-50%, -50%)',
  );
  actionButton.innerText = `${color} dropright`;
  toggleDropBox();
  defaultDropBox();
}

function dropLeft() {
  let color = localStorage.getItem('key');
  left.setAttribute('style', `background-color: ${color}; color: white`);
  up.removeAttribute('style');
  right.removeAttribute('style');
  down.removeAttribute('style');
  dropBox.setAttribute(
    'style',
    'position: absolute; top: 46.5%; left: 27.5%; transform: translate(-50%, -50%)',
  );
  actionButton.innerText = `${color} dropleft`;
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

function displayDropBox() {
  if (!initialState) {
    initialState = true;
    dropBox.style.visibility = 'visible';
  } else {
    initialState = false;
    dropBox.style.visibility = 'hidden';
  }
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
  if (down.style.backgroundColor && down.innerText) {
    down.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropdown`;
  } else if (up.style.backgroundColor && up.innerText) {
    up.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropup`;
  } else if (right.style.backgroundColor && right.innerText) {
    right.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropright`;
  } else {
    left.style.backgroundColor = e.target.accessKey;
    actionButton.innerText = `${e.target.accessKey} dropleft`;
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
