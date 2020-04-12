function openNav() {
  document.getElementById("sideNav").style.width = "200px";
  document.getElementById("main").style.marginRight = "-350px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

function dropDown() {
  var click = document.getElementById("myDropdown");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function dropDown2() {
  var click = document.getElementById("myDropdown2");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

/*Bootstrap JS Below*/
$(document).ready(function () {
  var fixHeight = function () {
    $(".navbar-nav").css(
      "max-height",
      document.documentElement.clientHeight - 150
    );
  };

  fixHeight();

  $(window).resize(function () {
    fixHeight();
  });

  $(".navbar .navbar-toggler").on("click", function () {
    fixHeight();
  });

  $(".navbar-toggler, .overlay").on("click", function () {
    $(".mobileMenu, .overlay").toggleClass("open");
  });
});
