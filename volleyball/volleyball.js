const positions = ["circleOH", "circleMD", "circleOPP", "circleS", "circleL", "circleDS"];

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

document.querySelector("#cube-oh").addEventListener("click", function (event) {
  displayPosition(
    "circleOH",
    "Positioned on the left side, is responsible for receiving serves and executing powerful attacks."
  );
});

document.querySelector("#cube-md").addEventListener("click", function () {
  displayPosition(
    "circleMD",
    "Located at the center of the court, focuses on blocking opponents’ attacks and performing quick offensive plays."
  );
});
document.querySelector("#cube-opp").addEventListener("click", function () {
  displayPosition(
    "circleOPP",
    "Situated on the right side, takes on hitting and blocking responsibilities while also acting as a backup setter."
  );
});
document.querySelector("#cube-s").addEventListener("click", function () {
  displayPosition(
    "circleS",
    "Serves as the team’s playmaker, setting up the ball for attackers and directing the offense. "
  );
});

document.querySelector("#cube-l").addEventListener("click", function () {
  displayPosition(
    "circleL",
    "A specialized defensive player, excels in serve reception and digging but cannot attack or block."
  );
});

document.querySelector("#cube-ds").addEventListener("click", function () {
    displayPosition(
      "circleDS",
      "A versatile back-row player, concentrating on serve reception, digging, and serving."
    );
  });