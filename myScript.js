// Generalized function to update the specific section
function updateSection(
  section,
  lightClass = "btn-light",
  darkClass = "btn-dark"
) {
  if ($(`${section} div`).is(":hidden")) {
    $(`${section} .btn`).addClass(lightClass).removeClass(darkClass);
    $(section).css("padding-bottom", "0");
  } else {
    $(`${section} .btn`).addClass(darkClass).removeClass(lightClass);
  }
}

// Function to handle button click and slide toggle
function slideToggleContent() {
  $(".btn").on("click", function () {
    const section = $(this).closest("section"); // Find the closest section related to the button
    const sectionId = "#" + section.attr("id"); // Get the ID of the section

    $(this)
      .siblings("div")
      .slideToggle("slow", function () {
        // Update only the specific section after toggle
        if (
          sectionId === "#myoreps" ||
          sectionId === "#myorepsMultiplied" ||
          sectionId === "#dropSets"
        ) {
          updateSection(sectionId, "btn-info", "btn-dark");
        } else {
          updateSection(sectionId);
        }
      });
  });
}

function setCopyright() {
  $("#copyright").text(`Copyright ©${new Date().getFullYear()}`);
}

function updateBrandName() {
  if (window.innerWidth <= 768) {
    // Smartphone or small screen size
    $("#brand").text("mWP");
  } else {
    // Larger screen size
    $("#brand").text("my Workout Program");
  }
}

// Run the function on page load and window resize
updateBrandName(); // Initial check
$(window).resize(updateBrandName); // Check on resize

$("#darkmode").on("click", function () {
  $("body").removeClass("lightmode").addClass("darkmode");
  $("#lightmode").removeClass("active");
  $("#darkmode").addClass("active");
});

$("#lightmode").on("click", function () {
  $("body").removeClass("darkmode").addClass("lightmode");
  $("#darkmode").removeClass("active");
  $("#lightmode").addClass("active");
});

let countdownInterval;
let wakeLock = null;
async function newCountDown() {
  const minutes = $("#countdownBtn").text();
  //console.log(minutes);

  if (!minutes) {
    alert("Please make sure you select a number!");
    console.log(`The minutes variable is: ${minutes}`);
    return;
  }

  const minutesNum = Number(minutes);
  if (isNaN(minutesNum) || minutesNum === 0) {
    alert("Please make sure you select a number greater than 0!");
    console.log(`The minutes variable is: ${minutes}`);
    return;
  }

  const SECONDS_IN_MINUTE = 60;
  let countDownSeconds = minutesNum * SECONDS_IN_MINUTE;

  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    if (wakeLock) {
      wakeLock.release().then(() => {
        wakeLock = null;
      });
    }
  }

  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => {
      console.log("Wake Lock was released");
    });
    console.log("Wake Lock acquired");
  } catch (err) {
    console.error("Error acquiring Wake Lock:", err);
    // Handle the error (e.g., the browser doesn't support it)
  }

  countdownInterval = setInterval(() => {
    if (countDownSeconds === 0) {
      // Check *first*
      clearInterval(countdownInterval);
      countdownInterval = null;
      $("#minutes").text("00");
      $("#seconds").text("00");
      alert("Countdown Finished!");

      if (wakeLock) {
        wakeLock.release().then(() => {
          wakeLock = null;
        });
        console.log("Wake Lock released");
      }
      return; // Important: Exit the callback early
    }

    countDownSeconds--;

    const minutesDisplay = Math.floor(countDownSeconds / 60);
    const secondsDisplay = Math.floor(countDownSeconds % 60);

    //console.log(`Remaining Seconds: ${countDownSeconds}\nMinutes: ${minutes}\nSeconds: ${seconds} `);
    //console.log(seconds.toString().padStart(2, "0"));

    $("#minutes").text(minutesDisplay.toString().padStart(2, "0"));
    $("#seconds").text(secondsDisplay.toString().padStart(2, "0"));
  }, 1000);
}

/* async function newCountDownSeconds(seconds, htmlElement, digitsColour) {
  if (!seconds) {
    alert("Please make sure you select a number!");
    console.log(`The minutes variable is: ${seconds}`);
    return;
  }

  const secondsNum = Number(seconds);
  if (isNaN(secondsNum) || secondsNum === 0) {
    alert("Please make sure you select a number greater than 0!");
    console.log(`The minutes variable is: ${seconds}`);
    return;
  }

  if (countdownInterval2) {
    clearInterval(countdownInterval2);
    countdownInterval2 = null;
    if (wakeLock2) {
      wakeLock2.release().then(() => {
        wakeLock2 = null;
      });
    }
  }

  try {
    wakeLock2 = await navigator.wakeLock.request("screen");
    wakeLock2.addEventListener("release", () => {
      console.log("Wake Lock was released");
    });
    console.log("Wake Lock acquired");
  } catch (err) {
    console.error("Error acquiring Wake Lock:", err);
    // Handle the error (e.g., the browser doesn't support it)
  }

  countdownInterval2 = setInterval(() => {
    if (seconds === 0) {
      // Check *first*
      clearInterval(countdownInterval2);
      countdownInterval2 = null;
      //alert("Countdown Finished!");

      if (wakeLock2) {
        wakeLock2.release().then(() => {
          wakeLock2 = null;
        });
        console.log("Wake Lock released");
      }
      return; // Important: Exit the callback early
    }

    seconds--;

    htmlElement.text(seconds.toString().padStart(2, "0"));
    htmlElement.css("color", digitsColour);
  }, 1000);
} */

function beep() {
  const snd = new Audio("./chime-sound.mp3");
  snd.play();
}

async function newCountDownSeconds(seconds, htmlElement, digitsColour) {
  // ... (Your existing validation and wake lock code) ...

  return new Promise((resolve) => {
    // Return a Promise
    countdownInterval2 = setInterval(() => {
      if (seconds === 0) {
        clearInterval(countdownInterval2);
        countdownInterval2 = null;
        if (wakeLock2) {
          wakeLock2.release().then(() => {
            wakeLock2 = null;
          });
          console.log("Wake Lock released");
        }
        resolve(); // Resolve the Promise when countdown finishes
        return;
      }

      seconds--;
      htmlElement.text(seconds.toString());
      htmlElement.css("color", digitsColour);
    }, 1000);
    beep();
  });
}

// Initial setup
slideToggleContent();
updateSection("#myTenets");
updateSection("#myFavExercBW");
updateSection("#myFavExerc");
updateSection("#workoutType1");
updateSection("#calisthenicsSkills");
updateSection("#myoreps", "btn-info", "btn-dark");
updateSection("#myorepsMultiplied", "btn-info", "btn-dark");
updateSection("#dropSets", "btn-info", "btn-dark");
setCopyright();

$("#countdownBtn").on("click", function () {
  newCountDown();
});

$(".controlBtn").on("click", function () {
  console.log($(this).text());
  let symbol = $(this).text();
  let currentCountdownNum = Number($("#countdownBtn").text());
  if (symbol === "+") {
    $("#countdownBtn").text(currentCountdownNum + 1);
  }
  if (symbol === "-") {
    if (currentCountdownNum - 1 === 0) {
      alert("You cannot decrease the timer any further!");
      console.log("You cannot decrease the timer any further!");
      return "You cannot decrease the timer any further!";
    }
    $("#countdownBtn").text(currentCountdownNum - 1);
  }
});

$(".disclaimer").on("click", function () {
  $(this).toggleClass("expanded");
});

let countdownInterval2;
let wakeLock2 = null;
$("#timeBasedExercisesSeconds").on("click", async function () {
  let timeBasedExercisesTimer = $("#timeBasedExercisesSeconds");
  let setTimeSeconds = Number($("#timeForSet").val());
  let numOfExercises = Number($("#numOfExercises").val());
  let restTimeSeconds = Number($("#timeForRest").val());

  arrayExercises = [];
  while (numOfExercises > 0) {
    arrayExercises.push(setTimeSeconds);
    if (numOfExercises > 1) {
      arrayExercises.push(restTimeSeconds);
    }
    numOfExercises--;
  }

  console.log(arrayExercises);
  for (let index = 0; index < arrayExercises.length; index++) {
    let color = index % 2 === 0 ? "blue" : "red"; // Simplified color selection
    await newCountDownSeconds(
      arrayExercises[index],
      timeBasedExercisesTimer,
      color
    ); // Wait for each countdown
  }
});
