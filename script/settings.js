//Function for settings-box close / open button
function SetAccentColor() {
  document.documentElement.style.setProperty('--primary', document.getElementById("accent-color").value);
  localStorage.setItem("accent-color", document.getElementById("accent-color").value);
  document.getElementById("accent-color").value = "";
}
document.getElementById("accent-color").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {SetAccentColor()}
});

 
  setInterval(() => {
    if (document.getElementById("setting1").checked == true) {
      var d = new Date(),
        h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
        m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes(),
        s = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();

      document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    } else {
      var d = new Date(),
        h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
        m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes(),
        s = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
      document.getElementById("time").innerHTML = h + ":" + m;
    }
  }, 1);

setInterval(() => {
//Setting 1
if (document.getElementById("setting1").checked == true) {
    localStorage.setItem("setting1", "1")
  } else {
    localStorage.setItem("setting1", "0")
  }

//Setting 2
  if (document.getElementById("setting2").checked == true) {
    localStorage.setItem("setting2", "1")
  } else {
    localStorage.setItem("setting2", "0")
  }

  setInterval(() => {
  if (document.getElementById("setting2").checked == true) {
   document.getElementById("time").style.visibility = "hidden";
  } else {
   document.getElementById("time").style.visibility = "visible";
} 
}, 1);

//Setting3
  if (document.getElementById("setting3").checked == true) {
    document.getElementById("html").style.cursor = "none";
    localStorage.setItem("setting3", "1")
  } else {
    document.getElementById("html").style.cursor = "default";
    localStorage.setItem("setting3", "0")
}
  
//Setting4
  if (document.getElementById("setting4").checked == true) {
    document.body.setAttribute('data-theme', 'dark')
    localStorage.setItem("setting4", "1")
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.setItem("setting4", "0")
}
  
//Setting5
  if (document.getElementById("setting5").checked == true) {
    document.getElementById("time").classList.add('dark');
    localStorage.setItem("setting5", "1")
  } else {
    document.getElementById("time").classList.remove('dark');
    localStorage.setItem("setting5", "0")
}
  
//Setting6
  if (document.getElementById("setting6").checked == true) {
    document.getElementById("search-box").classList.add('blurred');
    localStorage.setItem("setting6", "1")
  } else {
    document.getElementById("search-box").classList.remove('blurred');
    localStorage.setItem("setting6", "0")
}

//Setting7
if (document.getElementById("setting7").checked == true) {
  localStorage.setItem("setting7", "1")
} else {
  localStorage.setItem("setting7", "0")
}
  
}, 1);

