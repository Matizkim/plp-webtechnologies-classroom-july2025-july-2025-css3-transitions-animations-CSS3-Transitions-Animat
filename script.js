/* ----------------------------------------
 PART 2: JavaScript Functions
---------------------------------------- */

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function demonstrating local vs global scope
let globalCounter = 0; // Global variable

function incrementCounter() {
    let localIncrement = 5; // Local variable
    globalCounter += localIncrement;
    return globalCounter;
}

// Event listener for "Calculate Random Number" button
const calculateBtn = document.getElementById("calculateBtn");
const resultDisplay = document.getElementById("resultDisplay");

calculateBtn.addEventListener("click", () => {
    const randomNum = getRandomNumber(1, 100); // Using function with parameters
    const newCounter = incrementCounter(); // Using function demonstrating scope
    resultDisplay.textContent = `Random: ${randomNum}, Counter: ${newCounter}`;
});

/* ----------------------------------------
 PART 3: JS-triggered CSS Animations
---------------------------------------- */

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

// Function to trigger bounce animation
function triggerBounce(element, duration = 1000) {
    element.style.animation = `bounce ${duration / 1000}s ease`;
    
    // Remove animation after it completes to allow retriggering
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

animateBtn.addEventListener("click", () => {
    triggerBounce(jsBox, 1000);
});
