const quizData = [
   {
     question: "Who was the first President of the United States?",
     options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
     correct: 2,
   },
   {
     question: "In what year did the Titanic sink?",
     options: ["1912", "1905", "1898", "1920"],
     correct: 0,
   },
   {
     question:
     "Which empire was ruled by Julius Caesar?",
     options: ["Greek Empire","Roman Empire","Persian Empire","Ottoman Empire"],
     correct: 1,
     },
  {
     question:
        "Who was the British Prime Minister during World War II?",
     options: ["Neville Chamberlain","Winston Churchill","Margaret Thatcher","David Lloyd George"],
     correct: 1,
     },
  {
     question:
           "Which country gifted the Statue of Liberty to the United States?",
     options: ["Spain","Germany","France","Italy"],
     correct: 2,
           },
  {
     question:
        "Which city was the capital of the Byzantine Empire?",
     options: ["Rome","Constantinople","Athens","Alexandria"],
     correct: 1,
        },
  {
     question:
        "What event started World War I?",
     options: ["The invasion of Poland","The assassination of Archduke Franz Ferdinand","The sinking of the Lusitania","The Treaty of Versailles"],
     correct: 1,
        },
  {
     question:
        "Who was the first emperor of China?",
     options: ["Liu Bang","Qin Shi Huang","Sun Yat-sen","Kangxi Emperor"],
     correct: 1,
           },    
  {
     question:
        "Which revolution led to the establishment of the Soviet Union?",
     options: ["French Revolution","Industrial Revolution","Russian Revolution","Cuban Revolution"],
     correct: 2,
           },     
  {
     question:
        "Who discovered the sea route to India around the Cape of Good Hope?",
     options: ["Christopher Columbus","Ferdinand Magellan","Vasco da Gama","Hernán Cortés"],
     correct: 2,
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
   window.location.href = "results.html"; // Redirect to results page
   }
 });
 
 // Load the first quiz question
 loadQuiz();
 