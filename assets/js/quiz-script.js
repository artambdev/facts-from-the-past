let quizQuestionData = {}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    let questions = populateQuestions();
    // Shuffle the questions into a random order
    shuffleArray(questions);
    // Store the question list in the question content div
    quizQuestionData = {
        questionIndex:0,
        questionList:questions,
    }

    setupNewQuestion();
})

function setupNewQuestion() {
    let newQuestion = quizQuestionData["questionList"][quizQuestionData["questionIndex"]]
    quizQuestionData["questionIndex"]++;

    let buttons = document.getElementsByTagName("button");
    shuffleArray(buttons);

    document.getElementById("question-text").innerHTML = newQuestion["text"];

    // Clone the list of answers so we're not actually changing it
    let answerList = newQuestion["answers"].slice();
    // Assign an answer to each button
    for (let button of buttons) {
        let ans = answerList.shift();
        button.innerHTML = button.getAttribute("data-option") + ". " + ans;
    }
}

/** 
 * Creates the list of questions to use throughout the quiz
 */
function populateQuestions() {
    let questionsArray = [];
    addQuestion(questionsArray,
        "Who is pictured in the oldest photograph of a US president?",
        ["John Quincy Adams", "James Madison", "Andrew Jackson", "Abraham Lincoln"]
    );
    addQuestion(questionsArray,
        "Another question",
        ["John Quincy Adams", "James Madison", "Andrew Jackson", "Abraham Lincoln"]
    );
    return questionsArray;
}

/** 
 * Returns the questions list with one question appended 
 * The first answer should be the "correct" one, the rest are incorrect
 */
function addQuestion(list, questionText, questionAnswers) {
    let newQuestion = {text:questionText, answers:questionAnswers, correct: questionAnswers[0]};
    newQuestion["answers"] = shuffleArray(newQuestion["answers"]);
    list.push(newQuestion);
}

/**
 * Fisher-Yates algorithm for sorting an array randomly
 * Randomly shuffles elements starting from the back of
 * the array with unshuffled elements
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}