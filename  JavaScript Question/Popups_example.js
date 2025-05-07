// Alert example
alert("Welcome to the site!");

// Confirm example
if (confirm("Do you want to continue?")) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// Prompt example
let userInput = prompt("Enter your favorite color:", "Blue");
console.log(userInput ? `You chose: ${userInput}` : "User canceled");