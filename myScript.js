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

function newCountDown() {
  const minutes = document.getElementById("countdownBtn").innerText;
  console.log(minutes);

  if (!minutes) {
    alert("Please make sure you select a number!");
    console.log(`The minutes variable is: ${minutes}`);
    return `The minutes variable is: ${minutes}`;
  }

  const minutesNum = Number(minutes);
  if (isNaN(minutesNum) || minutesNum === 0) {
    alert("Please make sure you select a number greater than 0!");
    console.log(`The minutes variable is: ${minutes}`);
    return `The minutes variable is: ${minutes}`;
  }

  const SECONDS_IN_MINUTE = 60;
  let countDownSeconds = minutes * SECONDS_IN_MINUTE;

  const x = setInterval(function () {
    countDownSeconds--;

    const minutes = Math.floor(countDownSeconds / 60);
    const seconds = Math.floor(countDownSeconds % 60);

    console.log(
      `Remaining Seconds: ${countDownSeconds}\nMinutes: ${minutes}\nSeconds: ${seconds} `
    );

    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");

    if (countDownSeconds === 0) {
      clearInterval(x);
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);
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
