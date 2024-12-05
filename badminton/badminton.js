const positions = ["circleFP", "circleBP"];

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

document.querySelector("#btn-fp").addEventListener("click", function (event) {
    console.log("hit")
  displayPosition(
    "circleFP",
    "The playmaker who handles the ball and sets up plays."
  );
});

document.querySelector("#btn-bp").addEventListener("click", function () {
  displayPosition(
    "circleBP",
    "A strong scorer, often focusing on outside shooting."
  );
});