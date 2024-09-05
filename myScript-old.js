function updateMyTenets() {
  if ($("#myTenets div").is(":hidden")) {
    $("#myTenets .btn").addClass("btn-light").removeClass("btn-dark");
    $("#myTenets").css("padding-bottom", "0");
  } else {
    $("#myTenets .btn").addClass("btn-dark").removeClass("btn-light");
  }
}

function updateMyFavExSection() {
  if ($("#myFavExerc div").is(":hidden")) {
    $("#myFavExerc .btn").addClass("btn-light").removeClass("btn-dark");
    $("#myFavExerc").css("padding-bottom", "0");
  } else {
    $("#myFavExerc .btn").addClass("btn-dark").removeClass("btn-light");
  }
}

function updateWT1Section() {
  if ($("#workoutType1 div").is(":hidden")) {
    $("#workoutType1 .btn").addClass("btn-light").removeClass("btn-dark");
    $("#workoutType1").css("padding-bottom", "0");
  } else {
    $("#workoutType1 .btn").addClass("btn-dark").removeClass("btn-light");
  }
}

function updateMRSection() {
  if ($("#myoreps div").is(":hidden")) {
    $("#myoreps .btn").addClass("btn-info").removeClass("btn-dark");
    $("#myoreps").css("padding-bottom", "0");
  } else {
    $("#myoreps .btn").addClass("btn-dark").removeClass("btn-info");
  }
}

function updateMRMSection() {
  if ($("#myorepsMultiplied div").is(":hidden")) {
    $("#myorepsMultiplied .btn").addClass("btn-info").removeClass("btn-dark");
    $("#myorepsMultiplied").css("padding-bottom", "0");
  } else {
    $("#myorepsMultiplied .btn").addClass("btn-dark").removeClass("btn-info");
  }
}

function updateDSSection() {
  if ($("#dropSets div").is(":hidden")) {
    $("#dropSets .btn").addClass("btn-info").removeClass("btn-dark");
    $("#dropSets").css("padding-bottom", "0");
  } else {
    $("#dropSets .btn").addClass("btn-dark").removeClass("btn-info");
  }
}

function slideToggleContent() {
  $(".btn").on("click", function () {
    $(this)
      .siblings("div")
      .slideToggle("slow", function () {
        // Update the button color after the toggle is complete
        console.log("Toggle complete, updating color"); // Debugging
        updateMyTenets();
        updateMyFavExSection();
        updateWT1Section();
        updateMRSection();
        updateMRMSection();
        updateDSSection();
      });
  });
}

slideToggleContent();
updateMyTenets();
updateMyFavExSection();
updateWT1Section();
updateMRSection();
updateMRMSection();
updateDSSection();
