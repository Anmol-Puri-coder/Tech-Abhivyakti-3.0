const quizData = [
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: 2,
    },
    {
      question: "Which country is home to the city of Marrakech?",
      options: ["Egypt", "Morocco", "Algeria", "Tunisia"],
      correct: 1,
    },
    {
      question:
      "In which city would you find the famous landmark, the Colosseum?",
      options: ["Athens","Paris","Rome","Istanbul"],
      correct: 2,
      },
   {
      question:
         "Which is the largest country by land area?",
      options: ["United States","China","Canada","Russia"],
      correct: 3,
      },
   {
      question:
            "What is the capital of Brazil?",
      options: ["Rio de Janeiro","Brasília","São Paulo","Salvador"],
      correct: 1,
            },
   {
      question:
         "Which country is known as the 'Land of the Rising Sun'?",
      options: ["South Korea","China","Canada","Japan"],
      correct: 3,
         },
   {
      question:
         "Which European country is famous for its fjords",
      options: ["Sweden","Finland","Norway","Denmark"],
      correct: 2,
         },
   {
      question:
         "The city of Cape Town is located in which country?",
      options: ["South Africa","Namibia","Botswana","Zimbabwe"],
      correct: 0,
            },    
   {
      question:
         "Which of the following countries does NOT border France?",
      options: ["Italy","Spain","Switzerland","Poland"],
      correct: 3,
            },     
   {
      question:
         "The Great Barrier Reef is located off the coast of which country?",
      options: ["New Zealand","Australia","Fiji","Indonesia"],
      correct: 1,
            }
  ];
  
  const questionElm = document.querySelector("#question");
  const optionsElms = Array.from(document.querySelectorAll("label"));
  const answersElms = Array.from(document.querySelectorAll(".answer"));
  const submitBtn = document.querySelector("#submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    questionElm.innerText = question;
  
    options.forEach((option, index) => {
      optionsElms[index].innerText = option;
      answersElms[index].checked = false; // Reset selection
    });
  };
  
  const getSelectedOption = () => {
    return answersElms.findIndex((elem) => elem.checked);
  };
  
  submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
  
    if (selectedOptionIndex === -1) {
      alert("Please select an option before proceeding!");
      return;
    }
  
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
      score++;
    }
  
    currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      localStorage.setItem("score", score); // Store score in localStorage
    localStorage.setItem("totalQuestions", quizData.length); // Store total questions
    window.location.href = "results_geography.html"; // Redirect to results page
    }
  });
  
  // Load the first quiz question
  loadQuiz();