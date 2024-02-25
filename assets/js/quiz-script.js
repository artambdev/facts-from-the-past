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
        correctAnswers:0,
    }

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let correctAnswer = quizQuestionData["questionList"][quizQuestionData["questionIndex"] - 1]["correct"];
            console.log(correctAnswer)
            if (button.getAttribute("data-answer") === correctAnswer) {
                console.log("Test");
                doCorrectAnswer();
            } else {
                console.log("Test 3");
                doIncorrectAnswer(correctAnswer);
            }
            console.log("Test2");
            setupNewQuestion();
        })
    }

    setupNewQuestion();
})

function setupNewQuestion() {
    let newQuestion = quizQuestionData["questionList"][quizQuestionData["questionIndex"]]
    quizQuestionData["questionIndex"]++;

    let buttons = document.getElementsByTagName("button");
    shuffleArray(buttons);

    document.getElementById("question-index").innerHTML = "Question " + quizQuestionData["questionIndex"];

    document.getElementById("question-text").innerHTML = newQuestion["text"];

    // Clone the list of answers so we're not actually changing it
    let answerList = newQuestion["answers"].slice();
    // Assign an answer to each button
    for (let button of buttons) {
        let ans = answerList.shift();
        button.innerHTML = button.getAttribute("data-option") + ". " + ans;
        button.setAttribute("data-answer", ans);
    }
}

function doCorrectAnswer() {
    alert("Correct! Good job!");
    quizQuestionData["correctAnswers"]++;
    updateScoreCounter();
}

function doIncorrectAnswer(correctAnswer) {
    alert(`Sadly, your answer was incorrect. The answer was: ${correctAnswer}`);
    updateScoreCounter();
}

function updateScoreCounter() {
    let correctAnswers = quizQuestionData["correctAnswers"];
    let totalQuestionsAnswered = correctAnswers + (quizQuestionData["questionIndex"] - correctAnswers);
    document.getElementById("score-text").innerHTML = `Your score: ${correctAnswers} / ${totalQuestionsAnswered}`
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
        "What was the name of the first dog to be launched into orbit by the Soviet Union?",
        ["Laika", "Tsygan", "Dezik", "Yuri"]
    );
    addQuestion(questionsArray,
        "Alexander the Great was the king of which Ancient Greek kingdom?",
        ["Macedonia", "Illyria", "Paeonia", "Thrace"]
    );
    addQuestion(questionsArray,
        "Which of the following was NOT the code-name of a beach at the Normandy Landings during World War II?",
        ["Idaho", "Utah", "Gold", "Sword"]
    );
    addQuestion(questionsArray,
        "Which of these ancient civilisations was the last to fall?",
        ["Aztec Empire", "Roman Empire", "Byzantine Empire", "Western Xia Empire"]
    );
    console.log(questionsArray);
    return questionsArray;
}

/** 
 * Returns the questions list with one question appended 
 * The first answer should be the "correct" one, the rest are incorrect
 */
function addQuestion(list, questionText, questionAnswers) {
    let newQuestion = {text:questionText, answers:questionAnswers, correct:questionAnswers[0]};
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