let correctAnswers = 0;

function showFinalScore() {
    const finalScoreContainer = document.getElementById('final-score');
    finalScoreContainer.innerHTML = `Your Final Score: ${correctAnswers} out of ${questions.length}`;
}

showFinalScore();

//   function resetQuiz() {
//     currentQuestionIndex = 0;
//     questions = [];
//     correctAnswers = 0;
//     document.getElementById('question').innerText = '';
//     document.getElementById('options-container').innerHTML = '';
//     document.getElementById('final-score').innerText = '';
//   }