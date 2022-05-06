# odin-etch-a-sketch


####################################

ASSIGNMENT:

1. Create a webpage with a 16x16 grid of square divs.
  a. Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
  b. It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
  c. There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
    - float/clear
    - inline-block
    - flexbox
    - CSS Grid
  d. Be careful with borders and margins, as they can adjust the size of the squares!
  e. “OMG, why isn’t my grid being created???”
    - Did you link your CSS stylesheet?
    - Open your browser’s developer tools.
    - Check if there are any errors in the JavaScript console.
    - Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
  f. Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
  a. Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
  b. There are multiple ways to change the color of the divs, including:
    - adding a new class to the div.
    - changing the div’s background color using JavaScript.

3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
  a. Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
  b. Also check out prompts.
  c. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

4. (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

5. Push your project to GitHub!

####################################

GOALS:

#HTML:

- Create a basic HTML file linked to a CSS and JS files;

#CSS:

- Make the divs appear as a grid;

#JAVASCRIPT:

- Create a button on the top of the page;
- Create a 16x16 grid of divs;
- Make the top button prompt the user to input a new value to the grid size. (Limit the squares per side to 100);

###################################

JAVASCRIPT - PSEUDOCODE:

Function that creates a button on the top of the screen;
  - let gridButton = document.createElement('button');
  - gridButton.innerHTML = "Change grid size";
  - gridButton.onClick = console.log('LOG: Grid button clicked!');
  - document.body.appendChild(gridButton);

Function that creates a 16x16 div grid;
  - let containerGrid = document.createElement('div');
  - containerGrid.className = 'container';
  - document.body.appendChild(containerGrid);
  - For loop that creates 16 div rows;
    - let rowDiv = document.createElement('div');
    - rowDiv.className = 'row';
    - For loop that creates 16 divs for each row;
      - let pixelDiv = document.createElement('div');
      - pixelDiv.className = 'pixel';
      - rowDiv.appendChild(pixelDiv);
    - containerGrid.appendChild('rowDiv');

Function that initializes the page;