// file quiz.js

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleOptions(question) {
  let arr = question.options.map((op, i) => ({
    text: op,
    correct: i === question.answer,
  }));

  shuffle(arr);

  question.options = arr.map((o) => o.text);
  question.answer = arr.findIndex((o) => o.correct);

  return question;
}

function renderQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  currentQuestions = shuffle([...questions]).map((q) =>
    shuffleOptions({ ...q }),
  );

  currentQuestions.forEach((q, index) => {
    let div = document.createElement("div");
    div.className = "question";

    let html = `<h3>Câu ${index + 1}: ${q.q}</h3>`;

    const letters = ["A", "B", "C", "D"];

    q.options.forEach((op, i) => {
      const text = op.replace(/^[A-D]\.\s*/, "");

      html += `
<label class="option">
<input type="radio" name="q${index}" value="${i}" onchange="clearWrong(${index})">
<b>${letters[i]}.</b> ${text}
</label>
`;
    });

    div.innerHTML = html;
    quiz.appendChild(div);
  });
}
function review(wrong) {
  wrong.forEach((i) => {
    let q = document.querySelectorAll(".question")[i];

    if (q) {
      q.classList.add("wrong");
    }
  });
}
function clearWrong(index) {
  let q = document.querySelectorAll(".question")[index];

  if (q) {
    q.classList.remove("wrong");
  }
}
