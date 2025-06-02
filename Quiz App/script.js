const questions = [
    {
        question: "Which is the oldest religion in the world?",
        answers: [
            { text: "Sanatan Dharma", correct: true },
            { text: "Christianity", correct: false },
            { text: "Buddhism", correct: false },
            { text: "Judaism", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "What is the holy book of Sanatan Dharma?",
        answers: [
            { text: "Bhagavad Gita", correct: true },
            { text: "Bible", correct: false },
            { text: "Quran", correct: false },
            { text: "Tripitaka", correct: false },
        ]
    },
    {
        question: "Which mountain is considered sacred in Hinduism?",
        answers: [
            { text: "Mount Everest", correct: false },
            { text: "Mount Kailash", correct: true },
            { text: "Kanchenjunga", correct: false },
            { text: "Nanda Devi", correct: false },
        ]
    },
    {
        question: "Who is the creator god in Hinduism?",
        answers: [
            { text: "Vishnu", correct: false },
            { text: "Indra", correct: false },
            { text: "Brahma", correct: true },
            { text: "Shiva", correct: false },
        ]
    },
    {
        question: "What is the ultimate goal in Hinduism?",
        answers: [
            { text: "Reincarnation", correct: false },
            { text: "Heaven", correct: false },
            { text: "Moksha", correct: true },
            { text: "Karma", correct: false },
        ]
    },
    {
        question: "Which river is considered the most sacred in Hinduism?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Godavari", correct: false },
            { text: "Kaveri", correct: false },
            { text: "Ganga (Ganges)", correct: true },
        ]
    },
    {
        question: "What is the Sanskrit word for 'duty' in Hinduism?",
        answers: [
            { text: "Artha", correct: false },
            { text: "Karma", correct: false },
            { text: "Dharma", correct: true },
            { text: "Moksha", correct: false },
        ]
    },
    {
        question: "Which festival is known as the 'Festival of Lights' in Hinduism?",
        answers: [
            { text: "Navratri", correct: false },
            { text: "Raksha Bandhan", correct: false },
            { text: "Holi", correct: false },
            { text: "Diwali", correct: true },
        ]
    },
    {
        question: "Who is the consort of Lord Shiva?",
        answers: [
            { text: "Radha", correct: false },
            { text: "Lakshmi", correct: false },
            { text: "Parvati", correct: true },
            { text: "Saraswati", correct: false },
        ]
    },
    {
        question: "Which Hindu scripture is a dialogue between Lord Krishna and Arjuna?",
        answers: [
            { text: "Mahabharata", correct: false },
            { text: "Bhagavad Gita", correct: true },
            { text: "Ramayana", correct: false },
            { text: "Vedas", correct: false },
        ]
    },
    {
        question: "What is the symbolic meaning of the Om symbol in Hinduism?",
        answers: [
            { text: "The sound of fire", correct: false },
            { text: "The sound of the universe", correct: true },
            { text: "The sound of air", correct: false },
            { text: "The sound of water", correct: false },
        ]
    },
    {
        question: "Which epic describes the story of Lord Rama and Sita?",
        answers: [
            { text: "Bhagavad Gita", correct: false },
            { text: "Mahabharata", correct: false },
            { text: "Ramayana", correct: true },
            { text: "Upanishads", correct: false },
        ]
    },
    {
        question: "Which mantra is considered the most sacred in Hinduism?",
        answers: [
            { text: "Gayatri Mantra", correct: true },
            { text: "Mahamrityunjaya Mantra", correct: false },
            { text: "Shanti Mantra", correct: false },
            { text: "Vishnu Sahasranama", correct: false },
        ]
    },
    {
        question: "Who is the preserver god in Hinduism?",
        answers: [
            { text: "Shiva", correct: false },
            { text: "Vishnu", correct: true },
            { text: "Brahma", correct: false },
            { text: "Indra", correct: false },
        ]
    },
    {
        question: "Which is the Vedic god of fire?",
        answers: [
            { text: "Varuna", correct: false },
            { text: "Indra", correct: false },
            { text: "Agni", correct: true },
            { text: "Surya", correct: false },
        ]
    },
    {
        question: "Which city is considered the spiritual capital of India?",
        answers: [
            { text: "Delhi", correct: false },
            { text: "Varanasi", correct: true },
            { text: "Rishikesh", correct: false },
            { text: "Haridwar", correct: false },
        ]
    },
    {
        question: "Which Hindu god is known as the 'remover of obstacles'?",
        answers: [
            { text: "Hanuman", correct: false },
            { text: "Shiva", correct: false },
            { text: "Ganesha", correct: true },
            { text: "Vishnu", correct: false },
        ]
    },
    {
        question: "What is the name of the festival celebrating the birth of Lord Krishna?",
        answers: [
            { text: "Navratri", correct: false },
            { text: "Janmashtami", correct: true },
            { text: "Diwali", correct: false },
            { text: "Holi", correct: false },
        ]
    },
    {
        question: "What is the term for selfless action in Hinduism?",
        answers: [
            { text: "Bhakti", correct: false },
            { text: "Karma Yoga", correct: true },
            { text: "Jnana Yoga", correct: false },
            { text: "Dhyana Yoga", correct: false },
        ]
    },
    {
        question: "Which Hindu festival celebrates the victory of good over evil?",
        answers: [
            { text: "Holi", correct: false },
            { text: "Dussehra", correct: true },
            { text: "Raksha Bandhan", correct: false },
            { text: "Diwali", correct: false },
        ]
    },
    {
        question: "Which sacred tree is often worshipped in Hinduism?",
        answers: [
            { text: "Banyan Tree", correct: true },
            { text: "Neem Tree", correct: false },
            { text: "Peepal Tree", correct: false },
            { text: "Mango Tree", correct: false },
        ]
    }
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
