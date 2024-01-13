// let currentQuestionIndex = 0;
// let questions = [];
// let categories = [];
// let correctAnswers = 0;

// function startQuiz() {
//   const numQuestions = document.getElementById('num-questions').value;
//   const selectedCategory = document.getElementById('category').value;
//   const selectedDifficulty = document.getElementById('difficulty').value;
//   const selectedType = document.getElementById('question-type').value;

//   const apiUrl = `https://opentdb.com/api.php?amount=${numQuestions}&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=${selectedType}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       questions = data.results;
//       displayQuestion();
//     })
//   .catch(error => console.error('Error fetching questions:', error));
// }

// function populateCategories() {
//   fetch("https://opentdb.com/api_category.php")
//   .then(response => response.json())
//   .then(data => {
//     categories = data.trivia_categories;
//     const categorySelect = document.getElementById('category');
//     categories.forEach(category => {
//       const option = document.createElement('option');
//       option.value = category.id;
//       option.innerText = category.name;
//       categorySelect.appendChild(option);
//     });
//   })
//   .catch(error => console.error('Error fetching categories:', error));
// }

// function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     document.getElementById('question').innerText = currentQuestion.question;

//     const optionsContainer = document.getElementById('options-container');
//     optionsContainer.innerHTML = '';

//     currentQuestion.incorrect_answers.forEach((option, index) => {
//         optionsContainer.innerHTML += `<div class="option" onclick="checkAnswer(${index})">${option}</div>`;
//     });

//     optionsContainer.innerHTML += `<div class="option" onclick="checkAnswer('correct')">${currentQuestion.correct_answer}</div>`;
// }

// function checkAnswer(selectedOption) {
//     const currentQuestion = questions[currentQuestionIndex];
//     const optionsContainer = document.getElementById('options-container');
//     const options = optionsContainer.getElementsByClassName('option');

//     if (selectedOption === 'correct') {
//         correctAnswers++;
//         optionsContainer.innerHTML = `<div class="option correct-option">${currentQuestion.correct_answer}</div>`;
//     } else {
//         const selectedOptionIndex = parseInt(selectedOption);
//         options[selectedOptionIndex].classList.add('wrong-option');
//         optionsContainer.querySelector('.option:last-child').classList.add('correct-option');
//     }

//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         setTimeout(() => {
//             displayQuestion();
//         }, 1000); // Wait for 1 second before displaying the next question
//     } else {
//         showFinalScore();
//     }
// }

// function showFinalScore() {
//     const finalScoreContainer = document.getElementById('final-score');
//     finalScoreContainer.innerText = `Your Final Score: ${correctAnswers} out of ${questions.length}`;
// }

// function resetQuiz() {
//     currentQuestionIndex = 0;
//     questions = [];
//     correctAnswers = 0;
//     document.getElementById('question').innerText = '';
//     document.getElementById('options-container').innerHTML = '';
//     document.getElementById('final-score').innerText = '';
// }

// populateCategories();

let questions = [];
let categories = [];

function startQuiz() {
  const numQuestions = document.getElementById('num-questions').value;
  const selectedCategory = document.getElementById('category').value;
  const selectedDifficulty = document.getElementById('difficulty').value;
  const selectedType = document.getElementById('question-type').value;

  const apiUrl = `https://opentdb.com/api.php?amount=${numQuestions}&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=${selectedType}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      questions = data.results;
      // Redirect to the question page
      window.location.href = "page2.html";
    })
    .catch(error => console.error('Error fetching questions:', error));
}

function populateCategories() {
  fetch("https://opentdb.com/api_category.php")
    .then(response => response.json())
    .then(data => {
      categories = data.trivia_categories;
      const categorySelect = document.getElementById('category');
      categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.innerText = category.name;
        categorySelect.appendChild(option);
      });
    })
    .catch(error => console.error('Error fetching categories:', error));
}

populateCategories();






