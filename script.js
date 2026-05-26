const button = document.querySelector("#calculateBtn");
const message = document.querySelector("#message");

function calculateScore(testOne, testTwo) {
    const total = testOne + testTwo;
    return total;
}

function showResult(name, score) {
    message.textContent = `${name}, your total score is ${score}.`;
}

button.addEventListener("click", function () {
    const studentName = prompt("What is your name?");
    const firstScore = Number(prompt("Enter first score"));
    const secondScore = Number(prompt("Enter second score"));

    const finalScore = calculateScore(firstScore, secondScore);
    showResult(studentName, finalScore);
})