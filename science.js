const quizData = [
    {
      question: "1. Which physicist is credited with developing the theory that led to the invention of the laser?",
      options: ["Nicola Tesla", "Albert Einstein", "Niels Bohr", "Theodore Maiman"],
      correct: 1,
    },
    {
      question: "2. What is the name of the largest artery in the human body?",
      options: ["Pulmonary artery", "Coronary artery", "Aorta artery", "Carotid artery"],
      correct: 2,
    },
    {
      question:
      "3. What is the second most abundant element in the Earth's crust?",
      options: ["Oxygen","Silicon","Aluminum","Iron"],
      correct: 1,
      },
   {
      question:
         "4. Which type of electromagnetic radiation has the shortest wavelength?",
      options: ["Ultraviolet","X-rays","Gamma rays","Radio waves"],
      correct: 2,
      },
   {
      question:
            "5. What principle states that energy cannot be created or destroyed, only transformed?",
      options: ["Heisenberg’s Uncertainty Principle","Conservation of Mass","Conservation of Energy","Archimedes’ Principle"],
      correct: 2,
            },
   {
      question:
         "6. What type of bond involves the sharing of electron pairs between atoms?",
      options: ["Ionic bond","Covalent bond","Hydrogen bond","Van der Waals force"],
      correct: 1,
         },
   {
      question:
         "7. What is the term for a substance that speeds up a chemical reaction without being consumed by it?",
      options: ["Enzyme","Catalyst","Reactant","Solvent"],
      correct: 1,
         },
   {
      question:
         "8. In which layer of the Earth's atmosphere does the ozone layer lie?",
      options: ["Troposphere","Stratosphere","Mesosphere","Thermosphere"],
      correct: 1,
            },    
   {
      question:
         "9. What is the most common isotope of carbon, containing 6 protons and 6 neutrons?",
      options: ["Carbon-12","Carbon-14","Carbon-13","Carbon-11"],
      correct: 0,
            },     
   {
      question:
         "10. Which subatomic is the heaviest among these?",
      options: ["Proton","Electron","Neutron","Positron"],
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
    window.location.href = "results_science.html"; // Redirect to results page
    }
  });
  
  // Load the first quiz question
  loadQuiz();