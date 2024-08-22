var number = prompt("Please enter a number:");
if (!isNaN(number)) {
    number = parseInt(number);
    if (number % 2 === 0) {
        alert("The number is even.");
    }
    else {
        alert("The number is odd.");
    }
}
else {
    alert("Please enter a valid number.");
}
