//Load in saved bookmarks
document.getElementById("bookmark1").href = localStorage.getItem("bookmark1 url");
document.getElementById("bookmark2").href = localStorage.getItem("bookmark2 url");
document.getElementById("bookmark3").href = localStorage.getItem("bookmark3 url");
document.getElementById("bookmark4").href = localStorage.getItem("bookmark4 url");
document.getElementById("bookmark5").href = localStorage.getItem("bookmark5 url");
document.getElementById("bookmark6").href = localStorage.getItem("bookmark6 url");
document.getElementById("bookmark7").href = localStorage.getItem("bookmark7 url");
document.getElementById("bookmark8").href = localStorage.getItem("bookmark8 url");
document.getElementById("bookmark9").href = localStorage.getItem("bookmark9 url");
document.getElementById("bookmark10").href = localStorage.getItem("bookmark10 url");
document.getElementById("bookmark11").href = localStorage.getItem("bookmark11 url");
document.getElementById("bookmark12").href = localStorage.getItem("bookmark12 url");
document.getElementById("bookmark13").href = localStorage.getItem("bookmark13 url");
document.getElementById("bookmark14").href = localStorage.getItem("bookmark14 url");

//If bookmark not set, set innerHTML to Bookmark

if (localStorage.getItem("bookmark1 name") != null) {
  document.getElementById("bookmark1").innerHTML = localStorage.getItem("bookmark1 name");
} else {
  document.getElementById("bookmark1").innerHTML = "1";
}
if (localStorage.getItem("bookmark2 name") != null) {
  document.getElementById("bookmark2").innerHTML = localStorage.getItem("bookmark2 name");
} else {
  document.getElementById("bookmark2").innerHTML = "2";
}
if (localStorage.getItem("bookmark3 name") != null) {
  document.getElementById("bookmark3").innerHTML = localStorage.getItem("bookmark3 name");
} else {
  document.getElementById("bookmark3").innerHTML = "3";
}
if (localStorage.getItem("bookmark4 name") != null) {
  document.getElementById("bookmark4").innerHTML = localStorage.getItem("bookmark4 name");
} else {
  document.getElementById("bookmark4").innerHTML = "4";
}
if (localStorage.getItem("bookmark5 name") != null) {
  document.getElementById("bookmark5").innerHTML = localStorage.getItem("bookmark5 name");
} else {
  document.getElementById("bookmark5").innerHTML = "5";
}
if (localStorage.getItem("bookmark6 name") != null) {
  document.getElementById("bookmark6").innerHTML = localStorage.getItem("bookmark6 name");
} else {
  document.getElementById("bookmark6").innerHTML = "6";
}
if (localStorage.getItem("bookmark7 name") != null) {
  document.getElementById("bookmark7").innerHTML = localStorage.getItem("bookmark7 name");
} else {
  document.getElementById("bookmark7").innerHTML = "7";
}
if (localStorage.getItem("bookmark8 name") != null) {
  document.getElementById("bookmark8").innerHTML = localStorage.getItem("bookmark8 name");
} else {
  document.getElementById("bookmark8").innerHTML = "8";
}
if (localStorage.getItem("bookmark9 name") != null) {
  document.getElementById("bookmark9").innerHTML = localStorage.getItem("bookmark9 name");
} else {
  document.getElementById("bookmark9").innerHTML = "9";
}
if (localStorage.getItem("bookmark10 name") != null) {
  document.getElementById("bookmark10").innerHTML = localStorage.getItem("bookmark10 name");
} else {
  document.getElementById("bookmark10").innerHTML = "10";
}
if (localStorage.getItem("bookmark11 name") != null) {
  document.getElementById("bookmark11").innerHTML = localStorage.getItem("bookmark11 name");
} else {
  document.getElementById("bookmark11").innerHTML = "11";
}
if (localStorage.getItem("bookmark12 name") != null) {
  document.getElementById("bookmark12").innerHTML = localStorage.getItem("bookmark12 name");
} else {
  document.getElementById("bookmark12").innerHTML = "12";
}
if (localStorage.getItem("bookmark13 name") != null) {
  document.getElementById("bookmark13").innerHTML = localStorage.getItem("bookmark13 name");
} else {
  document.getElementById("bookmark13").innerHTML = "13";
}
if (localStorage.getItem("bookmark14 name") != null) {
  document.getElementById("bookmark14").innerHTML = localStorage.getItem("bookmark14 name");
} else {
  document.getElementById("bookmark14").innerHTML = "14";
}

if (localStorage.getItem("accent-color") != null) {
  document.documentElement.style.setProperty(
    "--primary",
    localStorage.getItem("accent-color")
  );
}

//Load in saved background, if no saved background set one
document.body.style.backgroundImage = localStorage.getItem("Background");
if (document.body.style.backgroundImage == "") {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Fclimate-sea-landscape-nature-35626.jpg?v=1575590937481')";
}

//Load in checked / unchecked settings
if (localStorage.getItem("setting1") == "1") {
  document.getElementById("setting1").checked = true;
} else if (localStorage.getItem("setting1") == "0") {
  document.getElementById("setting1").checked = false;
}

if (localStorage.getItem("setting2") == "1") {
  document.getElementById("setting2").checked = true;
} else if (localStorage.getItem("setting2") == "0") {
  document.getElementById("setting2").checked = false;
}

if (localStorage.getItem("setting3") == "1") {
  document.getElementById("setting3").checked = true;
} else if (localStorage.getItem("setting3") == "0") {
  document.getElementById("setting3").checked = false;
}

if (localStorage.getItem("setting4") == "1") {
  document.getElementById("setting4").checked = true;
} else if (localStorage.getItem("setting4") == "0") {
  document.getElementById("setting4").checked = false;
}

if (localStorage.getItem("setting5") == "1") {
  document.getElementById("setting5").checked = true;
} else if (localStorage.getItem("setting5") == "0") {
  document.getElementById("setting5").checked = false;
}

if (localStorage.getItem("setting6") == "1") {
  document.getElementById("setting6").checked = true;
} else if (localStorage.getItem("setting6") == "0") {
  document.getElementById("setting6").checked = false;
}

if (localStorage.getItem("setting7") == "1") {
  document.getElementById("setting7").checked = true;
} else if (localStorage.getItem("setting7") == "0") {
  document.getElementById("setting7").checked = false;
}