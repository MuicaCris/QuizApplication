const questions = [
    {
        question: "What is the capital of France?",
        optionA: "London",
        optionB: "Oslo",
        optionC: "Copenhagen",
        optionD: "Paris",
        correctOption: "optionD"
    },

    {
        question: "What is the chemical symbol for gold?",
        optionA: "Pb",
        optionB: "Au",
        optionC: "Mn",
        optionD: "Ag",
        correctOption: "optionB"
    },

    {
        question: "Which planet is known as the \"Red Planet\"?",
        optionA: "Jupiter",
        optionB: "Venus",
        optionC: "Saturn",
        optionD: "Mars",
        correctOption: "optionD"
    },

    {
        question: "What is the largest mammal on Earth?",
        optionA: "Elephant",
        optionB: "Lion",
        optionC: "Blue Whale",
        optionD: "Cat",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be found in a day?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "What is the longest river in the world?",
        optionA: "Nile River",
        optionB: "Long River",
        optionC: "Amazon River",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "Which famous scientist developed the theory of relativity?",
        optionA: "Nikola Tesla",
        optionB: "Alessandro Volta",
        optionC: "Albert Einstein",
        optionD: "Fritz Haber",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "South Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "What is the process by which liquid water turns into water vapor?",
        optionA: "Solidification",
        optionB: "Gasification",
        optionC: "Sublimation",
        optionD: "Evaporation",
        correctOption: "optionD"
    },

    {
        question: "What is the smallest planet in our solar system?",
        optionA: "Pluto",
        optionB: "Earth",
        optionC: "Venus",
        optionD: "Mercury",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "Who painted the Mona Lisa?",
        optionA: "Leonardo da Vinci",
        optionB: "Michelangelo",
        optionC: "Rembrandt",
        optionD: "Vermeer",
        correctOption: "optionA"
    },


    {
        question: "In which year did the Titanic sink after hitting an iceberg?",
        optionA: "1930",
        optionB: "1912",
        optionC: "1900",
        optionD: "1952",
        correctOption: "optionB"
    },

    {
        question: "What is the largest organ in the human body?",
        optionA: "Liver",
        optionB: "Kidney",
        optionC: "Intestin",
        optionD: "Skin",
        correctOption: "optionD"
    },

    {
        question: "Which gas do plants use for photosynthesis?",
        optionA: "CO2",
        optionB: "H2CO3",
        optionC: "HCl",
        optionD: "NH3",
        correctOption: "optionA"
    },

    {
        question: "What is the largest ocean on Earth?",
        optionA: "Arctic Ocean",
        optionB: "Atlantic Ocean",
        optionC: "Pacific Ocean",
        optionD: "Indian Ocean",
        correctOption: "optionC"
    },

    {
        question: "What is the tallest mountain in the world?",
        optionA: "Mount Everest",
        optionB: "K2",
        optionC: "Kangchenjunga",
        optionD: "Lhotse",
        correctOption: "optionA"
    },

    {
        question: "Which planet in our solar system has the most moons?",
        optionA: "Saturn",
        optionB: "Mars",
        optionC: "Jupiter",
        optionD: "Uranus",
        correctOption: "optionC"
    },

    {
        question: "What is the largest species of shark?",
        optionA: "Tiger Shark",
        optionB: "Bull Shark",
        optionC: "Whale Shark",
        optionD: "White Shark",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "Which natural disaster is measured using the Richter scale?",
        optionA: "Tsunami",
        optionB: "Tornado",
        optionC: "Earthquake",
        optionD: "Inundations",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [];

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++;
            indexNumber++;

            setTimeout(() => {
                questionNumber++
            }, 1000);
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++;
            indexNumber++;

            setTimeout(() => {
                questionNumber++
            }, 1000);
        }
    })
}

function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();

    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber);
        }
        else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    });
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null;
    let remarkColor = null;

    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing.";
        remarkColor = "red";
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better.";
        remarkColor = "orange";
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going.";
        remarkColor = "green";
    }
    const playerGrade = (playerScore / 10) * 100;

    document.getElementById('remarks').innerHTML = remark;
    document.getElementById('remarks').style.color = remarkColor;
    document.getElementById('grade-percentage').innerHTML = playerGrade;
    document.getElementById('wrong-answers').innerHTML = wrongAttempt;
    document.getElementById('right-answers').innerHTML = playerScore;
    document.getElementById('score-modal').style.display = "flex";

}

function closeScoreModal() {
    questionNumber = 1;
    playerScore = 0;
    wrongAttempt = 0;
    indexNumber = 0;
    shuffledQuestions = [];
    NextQuestion(indexNumber);
    document.getElementById('score-modal').style.display = "none";
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none";
}