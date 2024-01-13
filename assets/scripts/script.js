const startBtn = document.getElementById('start-quiz')

let questions = [];
let categories = [];

function startQuiz() {
  const numQuestions = document.getElementById('num-questions').value;
  const selectedCategory = document.getElementById('category').value;
  const selectedDifficulty = document.getElementById('difficulty').value;
  const selectedType = document.getElementById('question-type').value;

  //constructing the url
  const queryParams = new URLSearchParams({
    amount: numQuestions || 5,
    category: selectedCategory,
    difficulty: selectedDifficulty,
    type: selectedType,
  })

  const apiUrl = `https://opentdb.com/api.php?${queryParams.toString()}`;
  window.location.href = `page2.html?${queryParams.toString()}`;
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

//calling the start quiz function
startBtn.onclick = () => startQuiz()
