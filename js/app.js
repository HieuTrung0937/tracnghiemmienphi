// app.js

document.getElementById("submit").onclick = function () {
  let score = 0;
  let wrong = [];

  currentQuestions.forEach((q, i) => {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);

    if (!selected) {
      wrong.push(i);
    } else {
      if (Number(selected.value) === q.answer) {
        score++;
      } else {
        wrong.push(i);
      }
    }
  });

  let result = document.getElementById("result");

  result.innerHTML = `
Điểm: ${score}/${currentQuestions.length}
<br>
Sai: ${wrong.length}
`;

  let scoreTrueFalse = gradeTrueFalse();

  document.getElementById("resultTF").innerHTML =
    "Điểm phần đúng sai: " + scoreTrueFalse;

  review(wrong);
};

document.getElementById("retry").onclick = function () {
  renderQuiz();

  document.getElementById("result").innerHTML = "";
};
renderQuiz();
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.innerText = "SÁNG";
  } else {
    themeToggle.innerText = "TỐI";
  }
};
