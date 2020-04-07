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

/*function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function dropDown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};*/
