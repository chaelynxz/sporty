const positions = ["circlePG", "circleSG", "circleSF", "circlePF", "circleC"];

function displayPosition(btnName, message) {
  let positionElements = [];

  positionElements = positions
    .filter((position) => position !== btnName)
    ?.map((position) => {
      return document.getElementById(position);
    });

  const classList = document.getElementById(btnName).classList;
  var paragraph = document.getElementById("defCon");

  if (classList?.contains("visible")) {
    classList.remove("visible");
    classList.add("hidden");
    paragraph.textContent = "";
    return;
  }
  //clear | hidden
  classList.remove("hidden");
  classList.add("visible");

  positionElements?.forEach((el) => {
    el.classList.remove("visible");
    el.classList.add("hidden");
  });

  paragraph.textContent = message;
}

document.querySelector(".bt-pg").addEventListener("click", function (event) {
  displayPosition(
    "circlePG",
    "The playmaker who handles the ball and sets up plays."
  );
});

document.querySelector(".btn-sg").addEventListener("click", function () {
  displayPosition(
    "circleSG",
    "A strong scorer, often focusing on outside shooting."
  );
});
document.querySelector(".btn-sf").addEventListener("click", function () {
  displayPosition(
    "circleSF",
    "A versatile player who can score, defend, and rebound."
  );
});
document.querySelector(".btn-pf").addEventListener("click", function () {
  displayPosition(
    "circlePF",
    "A strong player who operates near the basket for scoring and rebounding. "
  );
});

document.querySelector(".btn-c").addEventListener("click", function () {
  displayPosition(
    "circleC",
    "The tallest player, responsible for rebounding, blocking shots, and scoring close to the hoop."
  );
});
