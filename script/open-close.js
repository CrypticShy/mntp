function OCBackgrounds() {
  var box = document.getElementById("background-box");
  if (box.style.display === "none") {
    box.style.display = "block";
    document.getElementById("bookmark-box").style.display = "none";
    document.getElementById("settings-box").style.display = "none";
    localStorage.setItem("bookmark-box", "none");
    localStorage.setItem("settings-box", "none");
  } else if (box.style.display === "") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

function OCBookmarks() {
  var box = document.getElementById("bookmark-box");
  var sbox = document.getElementById("settings-box");
  if (box.style.display === "none") {
    box.style.display = "block";
    sbox.style.display = "none";
    document.getElementById("background-box").style.display = "none";

    localStorage.setItem("bookmark-box", "block");
    localStorage.setItem("settings-box", "none");
  } else {
    box.style.display = "none";

    localStorage.setItem("bookmark-box", "none");
    localStorage.setItem("settings-box", "none");
  }
}

function OCSettings() {
  var box = document.getElementById("settings-box");
  var bmbox = document.getElementById("bookmark-box");
  if (box.style.display === "none") {
    box.style.display = "block";
    box.style.visibility = "visible";
    bmbox.style.display = "none";

    localStorage.setItem("settings-box", "block");
    localStorage.setItem("bookmark-box", "none");
    document.getElementById("background-box").style.display = "none";
  } else {
    box.style.display = "none";

    localStorage.setItem("bookmark-box", "none");
    localStorage.setItem("settings-box", "none");
  }
}

//Keep open on load

if (localStorage.getItem("bookmark-box") == null) {
  document.getElementById("bookmark-box").style.display = "none";
} else {
  document.getElementById("bookmark-box").style.display = localStorage.getItem("bookmark-box");
}
if (localStorage.getItem("settings-box") == null) {
  document.getElementById("settings-box").style.display = "none";
} else {
  document.getElementById("settings-box").style.display = localStorage.getItem("settings-box");
}
