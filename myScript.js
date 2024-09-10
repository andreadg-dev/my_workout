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

// Initial setup
slideToggleContent();
updateSection("#myTenets");
updateSection("#myFavExercBW");
updateSection("#myFavExerc");
updateSection("#workoutType1");
updateSection("#myoreps", "btn-info", "btn-dark");
updateSection("#myorepsMultiplied", "btn-info", "btn-dark");
updateSection("#dropSets", "btn-info", "btn-dark");
setCopyright();
