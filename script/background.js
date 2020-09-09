function SelectBackground() {
    var box = document.getElementById("background-box");
     box.style.display = "none";
}

function Background1() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Fclimate-sea-landscape-nature-35626.jpg?v=1575590937481')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}

function Background2() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Fclose-up-photography-of-leaves-with-droplets-807598.jpg?v=1575590549110')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}
  
function Background3() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Fbridge-in-the-forest-5969.jpg?v=1575590768801')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}

function Background4() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Flight-sea-dawn-landscape-33545.jpg?v=1575590550379')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}

function Background5() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Fphoto-of-house-near-beach-2468773.jpg?v=1575590881094')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}

function Background6() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Fsilhouette-of-golden-gate-bridge-during-golden-hour-1485894.jpg?v=1575590562323')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}

function Background7() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Fcalm-body-of-water-1363876.jpg?v=1575590542333')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}

function Background8() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Focean-wave-seashore-2049422.jpg?v=1576452373266')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
}

function Background9() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/3cedcc53-fa6b-499c-bcb3-bd3c205a0c91%2Faerial-view-of-seashore-near-large-grey-rocks-853199.jpg?v=1576452374514')";
  localStorage.setItem("Background", document.body.style.backgroundImage;)
}

document.getElementById('CustomBackground').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
     SetCustomBackground()
      return false;
    }
  }

function SetCustomBackground() {
  document.body.style.backgroundImage = "url('" + document.getElementById("CustomBackground").value + "')";
  localStorage.setItem("Background", document.body.style.backgroundImage);
  document.getElementById("CustomBackground").value = ""
  console.log(document.getElementById("CustomBackground").value)
}