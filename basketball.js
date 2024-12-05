document.querySelector(".bt-pg").addEventListener("click", function () {
  var contentPG = document.getElementById("circlePG");
  var contentSG = document.getElementById("circleSG");
  var contentSF = document.getElementById("circleSF");
  var contentPF = document.getElementById("circlePF");
  var contentC = document.getElementById("circleC");
  var paragraph = document.getElementById("defCon");
  console.log("hit button 1");
  if (contentPG.classList.contains("hidden")) {
    contentPG.classList.remove("hidden");
    contentPG.classList.add("visible");
    paragraph.textContent =
      "The playmaker who handles the ball and sets up plays.";
    contentSG.classList.remove("visible");
    contentSG.classList.add("hidden");
    contentSF.classList.remove("visible");
    contentSF.classList.add("hidden");
    contentPF.classList.remove("visible");
    contentPF.classList.add("hidden");
    contentC.classList.remove("visible");
    contentC.classList.add("hidden");
  } else {
    contentPG.classList.remove("visible");
    contentPG.classList.add("hidden");
    paragraph.textContent = "";
  }
});
document.querySelector(".btn-sg").addEventListener("click", function () {
  var contentSG = document.getElementById("circleSG");
  var contentPG = document.getElementById("circlePG");
  var contentSF = document.getElementById("circleSF");
  var contentPF = document.getElementById("circlePF");
  var contentC = document.getElementById("circleC");
  var paragraph = document.getElementById("defCon");
  console.log("hit button 2");
  if (contentSG.classList.contains("hidden")) {
    contentSG.classList.remove("hidden");
    contentSG.classList.add("visible");
    paragraph.textContent =
      "A strong scorer, often focusing on outside shooting.";
    contentPG.classList.remove("visible");
    contentPG.classList.add("hidden");
    contentSF.classList.remove("visible");
    contentSF.classList.add("hidden");
    contentPF.classList.remove("visible");
    contentPF.classList.add("hidden");
    contentC.classList.remove("visible");
    contentC.classList.add("hidden");
  } else {
    contentSG.classList.remove("visible");
    contentSG.classList.add("hidden");
    paragraph.textContent = "";
  }
});
document.querySelector(".btn-sf").addEventListener("click", function () {
  var contentSG = document.getElementById("circleSG");
  var contentPG = document.getElementById("circlePG");
  var contentSF = document.getElementById("circleSF");
  var contentPF = document.getElementById("circlePF");
  var contentC = document.getElementById("circleC");
  var paragraph = document.getElementById("defCon");
  console.log("hit button 3");
  if (contentSF.classList.contains("hidden")) {
    contentSF.classList.remove("hidden");
    contentSF.classList.add("visible");
    paragraph.textContent =
      "A versatile player who can score, defend, and rebound.";
    contentPG.classList.remove("visible");
    contentPG.classList.add("hidden");
    contentSG.classList.remove("visible");
    contentSG.classList.add("hidden");
    contentPF.classList.remove("visible");
    contentPF.classList.add("hidden");
    contentC.classList.remove("visible");
    contentC.classList.add("hidden");
  } else {
    contentSF.classList.remove("visible");
    contentSF.classList.add("hidden");
    paragraph.textContent = "";
  }
});
document.querySelector(".btn-pf").addEventListener("click", function () {
  var contentSG = document.getElementById("circleSG");
  var contentPG = document.getElementById("circlePG");
  var contentSF = document.getElementById("circleSF");
  var contentPF = document.getElementById("circlePF");
  var contentC = document.getElementById("circleC");
  var paragraph = document.getElementById("defCon");
  console.log("hit button 4");
  if (contentPF.classList.contains("hidden")) {
    contentPF.classList.remove("hidden");
    contentPF.classList.add("visible");
    paragraph.textContent =
      "A strong player who operates near the basket for scoring and rebounding. ";
    contentPG.classList.remove("visible");
    contentPG.classList.add("hidden");
    contentSG.classList.remove("visible");
    contentSG.classList.add("hidden");
    contentSF.classList.remove("visible");
    contentSF.classList.add("hidden");
    contentC.classList.remove("visible");
    contentC.classList.add("hidden");
  } else {
    contentPF.classList.remove("visible");
    contentPF.classList.add("hidden");
    paragraph.textContent = "";
  }
});

document.querySelector(".btn-c").addEventListener("click", function () {
  var contentSG = document.getElementById("circleSG");
  var contentPG = document.getElementById("circlePG");
  var contentSF = document.getElementById("circleSF");
  var contentPF = document.getElementById("circlePF");
  var contentC = document.getElementById("circleC");
  var paragraph = document.getElementById("defCon");
  console.log("hit button 5");
  if (contentC.classList.contains("hidden")) {
    contentC.classList.remove("hidden");
    contentC.classList.add("visible");
    paragraph.textContent =
      "The tallest player, responsible for rebounding, blocking shots, and scoring close to the hoop.";
    contentPG.classList.remove("visible");
    contentPG.classList.add("hidden");
    contentSG.classList.remove("visible");
    contentSG.classList.add("hidden");
    contentSF.classList.remove("visible");
    contentSF.classList.add("hidden");
    contentPF.classList.remove("visible");
    contentPF.classList.add("hidden");
  } else {
    contentC.classList.remove("visible");
    contentC.classList.add("hidden");
    paragraph.textContent = "";
  }
});
