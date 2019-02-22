# etch-a-sketch
Similar to an etch-a-sketch using eventListeners and colored divs

Hovering makes a div turn black, or when the color button is pressed, makes the
div a random color upon hovering. The color persists after the div (pixel) is
hovered over.

Plan:
Variables needed:

gridContainer - to select container so elements can be appended

clearButton - to select the html button element

colorButton - to select the html button element

gridPixel - render a div element and allow it to be appended to the grid container

gridSize - user inputs size they want the grid to be

Functions needed:

1. Take user input for grid size and make the number of divs required to populate that gridSize and append them to the parent gridContainer
  - will need a loop for sure

2. colorMode function when clicked makes items change color on hover to a random #HEX value (getting 10% darker each pass, 10 passes make them black)

3. clear function that listens to clear button and when pressed empties all current divs/gridPixels

4. hover function that detects when a div is hovered over and applies the proper styling to make the div black or colored
