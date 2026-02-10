const topicSelect = document.getElementById("topicSelect");
const statusEl = document.getElementById("status");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const answerBlock = document.getElementById("answerBlock");
const mcqBlock = document.getElementById("mcqBlock");
const mcqOptions = document.getElementById("mcqOptions");
const mcqResult = document.getElementById("mcqResult");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");
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

function selectedOptionIndexes() {
  return Array.from(mcqOptions.querySelectorAll("input:checked")).map((input) =>
    Number(input.value)
  );
}

function arraysMatchAsSets(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const aSorted = [...a].sort((x, y) => x - y);
  const bSorted = [...b].sort((x, y) => x - y);

  return aSorted.every((value, index) => value === bSorted[index]);
}

function renderMcqOptions(card) {
  mcqOptions.innerHTML = "";

  card.options.forEach((optionText, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.className = "mcq-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = String(index);

    const textSpan = document.createElement("span");
    textSpan.textContent = optionText;

    optionLabel.appendChild(checkbox);
    optionLabel.appendChild(textSpan);
    mcqOptions.appendChild(optionLabel);
  });
}

function revealCorrectAnswer(card) {
  answerText.textContent = card.answer;
  answerBlock.hidden = false;
}

function renderQuestion() {
  if (!currentQuestions.length) {
    questionText.textContent = "No questions available for this topic yet.";
    answerText.textContent = "";
    answerBlock.hidden = true;
    mcqBlock.hidden = true;
    checkAnswerBtn.hidden = true;
    showAnswerBtn.hidden = false;
    statusEl.textContent = "0 questions";
    return;
  }

  const card = currentQuestions[currentIndex];
  questionText.textContent = card.question;
  answerText.textContent = card.answer;
  answerBlock.hidden = true;
  mcqResult.textContent = "";

  const isMcq = Array.isArray(card.options) && Array.isArray(card.correctOptionIndexes);
  if (isMcq) {
    renderMcqOptions(card);
    mcqBlock.hidden = false;
    checkAnswerBtn.hidden = false;
    showAnswerBtn.hidden = true;
  } else {
    mcqBlock.hidden = true;
    checkAnswerBtn.hidden = true;
    showAnswerBtn.hidden = false;
  }

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

checkAnswerBtn.addEventListener("click", () => {
  if (!currentQuestions.length) {
    return;
  }

  const card = currentQuestions[currentIndex];
  if (!Array.isArray(card.correctOptionIndexes)) {
    return;
  }

  const selected = selectedOptionIndexes();
  const isCorrect = arraysMatchAsSets(selected, card.correctOptionIndexes);

  if (isCorrect) {
    mcqResult.textContent = "Correct.";
    mcqResult.className = "mcq-result correct";
  } else {
    mcqResult.textContent = "Not correct. Review the answer below.";
    mcqResult.className = "mcq-result wrong";
  }

  revealCorrectAnswer(card);
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
