'use strict';

const { log } = console;

class Shape {
  constructor(name, colour) {
    this._name = name;
    this._colour = colour;
  }
  
  get name() {
    return this._name;
  }
  
  get colour() {
    return this._colour;
  }
  
  getInfo() {
    return `Shape: ${this.name}, Colour: ${this.colour}`;
  }
}

const colourMapping = {
  Red: "#FF0000",
  Blue: "#0000FF",
  Green: "#00FF00",
  Yellow: "#FFFF00",
  Purple: "#800080"
};

const shapes = [];
const createBtn = document.getElementById('createBtn');
const shapeInput = document.querySelector('.type');
const colourInput = document.querySelector('.color');
const container = document.querySelector('.container');

function createShape() {
    const shapeVal = shapeInput.value.trim();
    const colourVal = colourInput.value.trim();
    
    if (!shapeVal || !colourVal) {
      alert("Please enter both shape type and colour.");
      return;
    }
    
    const newShape = new Shape(shapeVal, colourVal);
    shapes.push(newShape);
    
    const div = document.createElement('div');
    div.classList.add('box');
    if (shapeVal.toLowerCase() === 'circle') {
      div.classList.add('circle');
    }
    
    const bgColor = colourMapping[colourVal] || colourVal;
    div.style.backgroundColor = bgColor;

    div.setAttribute('data-index', shapes.length - 1);
    
    div.addEventListener('click', function() {
      const idx = this.getAttribute('data-index');
      alert(shapes[idx].getInfo());
    });
    
    container.appendChild(div);
  }
  
  createBtn.addEventListener('click', createShape);