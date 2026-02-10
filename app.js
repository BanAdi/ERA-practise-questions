const topicSelect = document.getElementById("topicSelect");
const statusEl = document.getElementById("status");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const answerBlock = document.getElementById("answerBlock");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

let currentTopic = null;
let currentQuestions = [];
let currentIndex = 0;

function shuffledCopy(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuestion() {
  if (!currentQuestions.length) {
    questionText.textContent = "No questions available for this topic yet.";
    answerText.textContent = "";
    answerBlock.hidden = true;
    statusEl.textContent = "0 questions";
    return;
  }

  const card = currentQuestions[currentIndex];
  questionText.textContent = card.question;
  answerText.textContent = card.answer;
  answerBlock.hidden = true;
  statusEl.textContent = `${currentTopic.topic}: ${currentIndex + 1} / ${currentQuestions.length}`;
}

function loadTopic(topicName) {
  currentTopic = QUESTION_BANK.find((entry) => entry.topic === topicName);
  currentQuestions = [...(currentTopic?.questions || [])];
  currentIndex = 0;
  renderQuestion();
}

function setupTopics() {
  QUESTION_BANK.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.topic;
    option.textContent = entry.topic;
    topicSelect.appendChild(option);
  });

  if (QUESTION_BANK.length > 0) {
    loadTopic(QUESTION_BANK[0].topic);
  } else {
    renderQuestion();
  }
}

topicSelect.addEventListener("change", (event) => {
  loadTopic(event.target.value);
});

showAnswerBtn.addEventListener("click", () => {
  answerBlock.hidden = false;
});

nextBtn.addEventListener("click", () => {
  if (!currentQuestions.length) {
    return;
  }

  currentIndex = (currentIndex + 1) % currentQuestions.length;
  renderQuestion();
});

shuffleBtn.addEventListener("click", () => {
  if (!currentQuestions.length) {
    return;
  }

  currentQuestions = shuffledCopy(currentQuestions);
  currentIndex = 0;
  renderQuestion();
});

setupTopics();
