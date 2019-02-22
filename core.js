// VARIABLES

const createClearBtn = document.querySelector('#create-clear')
const colorBtn = document.querySelector('#color')
const gridContainer = document.querySelector('.grid-container')

// EVENT LISTENERS

createClearBtn.addEventListener('click', createGrid)

// FUNCTIONS

function createGrid () {
  let i
  let gridPixel
  let gridSize = prompt('Enter the size of grid you want!')

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

  for (i = 0; i < (gridSize ** 2); i++) {
    gridPixel = document.createElement('div')
    gridPixel.style.height = (600 / gridSize).toString() + 'px'
    gridPixel.classList.add('pixel')
    gridContainer.appendChild(gridPixel)
  }
}
