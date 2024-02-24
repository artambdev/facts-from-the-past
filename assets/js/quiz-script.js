
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    let questions = populateQuestions();
    questions = shuffleArray(questions);
})

/** 
 * Creates the list of questions to use throughout the quiz
 */
function populateQuestions() {
    let questionsArray = [];
    questionsArray = addQuestion(questionsArray,
        "Who is pictured in the oldest photograph of a US president?",
        ["John Quincy Adams", "James Madison", "Andrew Jackson", "Abraham Lincoln"]
    );

    return questionsArray;
}

/** 
 * Returns the questions list with one question appended 
 * The first answer is the "correct" one, the rest are incorrect
 */
function addQuestion(list, questionText, questionAnswers) {
    let newQuestion = {text:questionText, answers:questionAnswers, correct: questionAnswers[0]};
    list.push(newQuestion);
    return list;
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