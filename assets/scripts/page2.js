let currentQuestionIndex = 0;
let correctAnswers = 0;
let question = [];

function fetchQuestions() {
  // Make a request to the API to fetch the questions
  fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => {
      questions = data.results;
      displayQuestion();
    })
    .catch(error => console.error('Error fetching questions:', error));
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').innerText = currentQuestion.question;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  currentQuestion.incorrect_answers.forEach((option, index) => {
    optionsContainer.innerHTML += `<div class="option" onclick="checkAnswer(${index})">${option}</div>`;
  });

  optionsContainer.innerHTML += `<div class="option" onclick="checkAnswer('correct')">${currentQuestion.correct_answer}</div>`;
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const optionsContainer = document.getElementById('options-container');
  const options = optionsContainer.getElementsByClassName('option');

  if (selectedOption === 'correct') {
    correctAnswers++;
    optionsContainer.innerHTML = `<div class="option correct-option">${currentQuestion.correct_answer}</div>`;
  } else {
    const selectedOptionIndex = parseInt(selectedOption);
    options[selectedOptionIndex].classList.add('wrong-option');
    optionsContainer.querySelector('.option:last-child').classList.add('correct-option');
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      displayQuestion();
    }, 1000); // Wait for 1 second before displaying the next question
  } else {
    // Redirect to the final score page
    window.location.href = "page3.html";
  }
}

fetchQuestions();
