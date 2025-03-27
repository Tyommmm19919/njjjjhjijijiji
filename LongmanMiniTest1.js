function checkAnswers() {
    const correctAnswers = {
        q1: "accepted",
        q2: "confirm",
        q3: "Bones",
        q4: "Agreement",
        q5: "Low sea levels",
        q6: "Submerged",
        q7: "Appropriate for",
        q8: "Stone Age inhabitants",
        q9: "Mobile",
        q10: "Unexpected",
        q11: "C",
        q12: "Difficult"
    };;
    let correctCount = 0;

    for (const question in correctAnswers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            correctCount++;
        }
    }
    const reading = document.getElementById("reading")
    // document.getElementById("result").innerText = `You got ${correctCount} out of 12 correct answers!`;
    reading.style.display = "none"
    document.getElementById("result").innerText = `You got ${correctCount} out of 12 correct answers!`;
    const result = document.getElementById("result")
    result.style.display = "block"
    result.style.textAlign = "center"
    result.style.fontSize = "30px"
    result.style.marginTop = "150px"
    result.style.fontWeight = "600"
}