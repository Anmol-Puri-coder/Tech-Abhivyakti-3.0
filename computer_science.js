const quizData = [
    {
      question: "1. Who is considered the 'father of computer science' and proposed the concept of a universal machine?",
      options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Tim Berners-Lee"],
      correct: 1,
    },
    {
      question: "2. When was the first version of HTML officially released?",
      options: ["1989", "1991", "1995", "2000"],
      correct: 1,
    },
    {
      question:
      "3. What was the name of the first programmable digital computer, built during World War II?",
      options: ["ENIAC","Colossus","UNIVAC","Z3"],
      correct: 1,
      },
   {
      question:
         "4. When was CSS3 officially released?",
      options: ["1999","2001","2011","2017"],
      correct: 2,
      },
   {
      question:
            "5. Who is the creator of the C programming language, developed in 1972 at Bell Labs?",
      options: ["Dennis Ritchie","Ken Thompson","Brian Kernighan","Bjarne Stroustrup"],
      correct: 0,
            },
   {
      question:
         "6. What AI technique, inspired by the human brain, involves layers of artificial neurons and is widely used in machine learning?",
      options: ["Genetic Algorithms","Decision Trees","Bayesian Networks","Neural Networks"],
      correct: 3,
         },
   {
      question:
         "7. What was the name of the first graphical web browser, developed in 1993?",
      options: ["Internet Explorer","Netscape","Mosaic","Opera"],
      correct: 2,
         },
   {
      question:
         "8. Which British mathematician cracked the Nazi Enigma code during World War II, significantly contributing to computer science?",
      options: ["Alan Turing","John von Neumann","Konrad Zuse","Charles Babbage"],
      correct: 0,
            },    
   {
      question:
         '9. In what year was the first artificial intelligence program, the "Logic Theorist," written by Allen Newell and Herbert A. Simon?',
      options: ["1945","1956","1960","1972"],
      correct: 1,
            },     
   {
      question:
         "10. What computer system, developed by IBM in 1964, became a major success in commercial computing?",
      options: ["IBM PC","System/360","PDP-11","Altair 8800"],
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
    window.location.href = "results_cs.html"; // Redirect to results page
    }
  });
  
  // Load the first quiz question
  loadQuiz();