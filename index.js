
document.querySelector(".roll").addEventListener("click", function() {
    let audio = new Audio
    ("dice-roll_sound-effect.mp3");
    audio.play();

    setTimeout(() => {
        rollDice();
    }, 500);



// Left Dice 
// Step 1: Generate a random number between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6)+ 1; // 1-6
// console.log(randomNumber1);

// Explanation- 
// 1. Math.random():- generates a random number between 0 and 1
// 2. Multiplying it by 6 gives a number between 0 and just under 6
// 3. Maths.floor():- rounds down to the nearest integer, so it will give a number between 0 and 5
// 4. Adding 1 shifts the range to 1 through 6, which simulates a dice roll

// Step 2: Create the Dice Image Name
let randomDiceImage = "dice" + randomNumber1 + ".png";
// Explanation- concatenate the string "dice" with the random number to form filenames


// Step 3: Create the Full Path to the Image
let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png


// Step 4: Select the First <img> Element
let image1 = document.querySelectorAll("img")[0];
// Explanation- This line selects the first <img> element in  HTML document so that you can later change its src attribute to display a different dice image

// Step 5: Set the New Image Source
image1.setAttribute("src", randomImageSource);
// Explanation- This line sets the src attribute of the selected <img> element to the newly created file path, effectively changing the image displayed on the page.



// Right Dice 
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




if (randomNumber1 > randomNumber2) {
    document.querySelector("#message").innerHTML = "Player 1 Wins! 🏆"; 
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("#message").innerHTML = "Player 2 Wins!🏆";
}
else {
    document.querySelector("#message").innerHTML = "Draw!";
}
})