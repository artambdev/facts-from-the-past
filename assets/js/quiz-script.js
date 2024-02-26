let quizQuestionData = {}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("ans-button");

    let questions = populateQuestions();
    // Shuffle the questions into a random order
    shuffleArray(questions);
    // Store the question list in the question content div
    quizQuestionData = {
        questionIndex:0,
        questionList:questions,
        correctAnswers:0,
        completed:false,
    }

    // For each button, add the code for checking if the answer is correct or not
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (quizQuestionData["completed"] === true) {
                return;
            }
            // Get the correct answer (remember: question index has already incremented to the next question by this point)
            let correctAnswer = quizQuestionData["questionList"][quizQuestionData["questionIndex"] - 1]["correct"];
            // Display the correct alert depending on if the answer stored in the button is a match
            if (button.getAttribute("data-answer") === correctAnswer) {
                doCorrectAnswer();
            } else {
                doIncorrectAnswer(correctAnswer);
            }
            // Show the quiz completion popup after answering question 10
            if (quizQuestionData["questionIndex"] >= 2) {
                completeQuiz();
            } else {
                // Move onto the next question
                setupNewQuestion();
            }
        })
    }

    // Trigger the very first question to be set up
    setupNewQuestion();
})

/**
 * Sets up the next question (the first and those afterwards), including changing text and updating the buttons
 */
function setupNewQuestion() {
    // Get our new question
    let newQuestion = quizQuestionData["questionList"][quizQuestionData["questionIndex"]]
    // Increment how many questions we've done
    quizQuestionData["questionIndex"]++;

    // Get all the buttons, and shuffle them so we assign answers in a random order
    let buttons = document.getElementsByClassName("ans-button");
    shuffleArray(buttons);

    // Change the question number
    document.getElementById("question-index").innerHTML = "Question " + quizQuestionData["questionIndex"];

    // Display the question itself
    document.getElementById("question-text").innerHTML = newQuestion["text"];

    // Clone the list of answers so we're not actually changing it
    let answerList = newQuestion["answers"].slice();
    // Assign an answer to each button
    for (let button of buttons) {
        let ans = answerList.shift();
        // Prepend the letter on the answer
        button.innerHTML = button.getAttribute("data-option") + ". " + ans;
        // Store the answer itself to check when we click it
        button.setAttribute("data-answer", ans);
    }
}

/**
 * Run when an answer was picked correctly. Display an alert, and increment the score.
 */
function doCorrectAnswer() {
    // At this point, the question index has already incremented, so check one back
    alert("Correct! Good job! " + quizQuestionData["questionList"][quizQuestionData["questionIndex"] - 1]["factoid"]);
    quizQuestionData["correctAnswers"]++;
    updateScoreCounter();
}

/**
 * Run when an answer was picked incorrectly. Display an alert, and explain the answer.
 */
function doIncorrectAnswer(correctAnswer) {
    let factoid = quizQuestionData["questionList"][quizQuestionData["questionIndex"] - 1]["factoid"];
    alert(`Sadly, your answer was incorrect. The answer was: ${correctAnswer}. ${factoid}`);
    updateScoreCounter();
}

/**
 * Pop up the message box for completing the quiz and give it the correct data
 */
function completeQuiz() {
    let correctAnswers = quizQuestionData["correctAnswers"];
    quizQuestionData["completed"] = true;
    let totalQuestionsAnswered = correctAnswers + (quizQuestionData["questionIndex"] - correctAnswers);
    let extraComment = "Great job!"
    if (correctAnswers === totalQuestionsAnswered) {
        extraComment = "Flawless! You're a history master!"
    } else if (correctAnswers === 0) {
        extraComment = "That's very unfortunate. Maybe try again with the knowledge you've gained?"
    } else if (correctAnswers / totalQuestionsAnswered <= 0.5) {
        extraComment = "Consider trying the quiz again and using what you've learned!"
    }

    let popup = document.getElementById("completed-popup");
    popup.style.display = "flex";
    popup.children[1].innerHTML = `Congratulations! You got ${correctAnswers} of the ${totalQuestionsAnswered} questions correct. ${extraComment}`
}

/**
 * Updates the score counter based on how many questions we've answered correctly of the ones we've done
 */
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
        ["John Quincy Adams", "James Madison", "Andrew Jackson", "Abraham Lincoln"],
        "A photo of John Quincy Adams dates back to 1843."
    );
    addQuestion(questionsArray,
        "What was the name of the first dog to be launched into orbit by the Soviet Union?",
        ["Laika", "Tsygan", "Dezik", "Yuri"],
        "Laika was the first dog in orbit, though Tsygan and Dezik were launched together into sub-orbit before her."
    );
    addQuestion(questionsArray,
        "Alexander the Great was the king of which Ancient Greek kingdom?",
        ["Macedonia", "Illyria", "Paeonia", "Thrace"],
        "Alexander III was the king of Macedonia - the other listed kingdoms were its neighbours."
    );
    addQuestion(questionsArray,
        "Which of the following was NOT the code-name of a beach at the 1944 Normandy Landings during World War II?",
        ["Idaho", "Utah", "Gold", "Sword"],
        "The five beaches at Normandy were Utah, Omaha, Gold, Sword and Juno."
    );
    addQuestion(questionsArray,
        "Which of these ancient civilisations was the last to fall?",
        ["Aztec Empire", "Roman Empire", "Byzantine Empire", "Western Xia Empire"],
        "The Aztec Empire fell to Spanish conquistadors (soldier-explorers) in 1521."
    );
    addQuestion(questionsArray,
        "How old was Queen Elizabeth II when she was crowned?",
        ["27", "24", "31", "29"],
        "The late queen was 27 when she she was crowned in 1952."
    );
    addQuestion(questionsArray,
        "Which of these countries has the most castles?",
        ["Italy", "Ireland", "France", "Germany"],
        "Italy has the most castles of any country, with over 45,000!"
    );
    addQuestion(questionsArray,
        "Which Ancient Greek deity was the temple known as the Parthenon dedicated to?",
        ["Athena", "Zeus", "Poseidon", "Demeter"],
        "The Parthenon was built in thanksgiving to Athena, the war goddess, after a victory against the Persians."
    );
    addQuestion(questionsArray,
        "What type of fabric did Ancient China invent?",
        ["Silk", "Velvet", "Satin", "Lace"],
        "Silk was first produced by Ancient China in the 4th millenium BC, and would only be exported via the Silk Road 3 millenia later."
    );
    addQuestion(questionsArray,
        "Which of these businesses did George Washington establish after his term as president?",
        ["Distillery", "Antique Store", "Law Firm", "Lumberyard"],
        "To supplement the dwindling profits from his plantations, George Washington set up a distillery to make whiskey."
    );
    return questionsArray;
}

/** 
 * Returns the questions list with one question appended 
 * The first answer should be the "correct" one, the rest are incorrect
 */
function addQuestion(list, questionText, questionAnswers, questionFactoid) {
    let newQuestion = {text:questionText, answers:questionAnswers, correct:questionAnswers[0], factoid:questionFactoid};
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