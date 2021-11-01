'use strict'
const messageArray = [];
const form = document.getElementById('root-form');
const lists = document.getElementById('lists');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const {target: {textInput}} = e;
  const inputValue = textInput.value.trim();
  if (inputValue) {
    messageArray.push(textInput.value.trim());
    const newLi = document.createElement('li');
    newLi.append(document.createTextNode(inputValue));
    lists.append(newLi);
    e.target.reset();
  }
})
