//Reset the edit boxes and close them
function ResetEdit() {
  document.getElementById("bookmark-edit-box").style.display = "none";
  document.getElementById("bookmark-number").style.display = "none";
  document.getElementById("bookmark-url").style.display = "none";
  document.getElementById("bookmark-name").style.display = "none";
  document.getElementById("number").value = "";
  document.getElementById("url").value = "https://";
  document.getElementById("name").value = "";
}

function EditBookmark() {
  //If open close when clicked
  if (document.getElementById("bookmark-edit-box").style.display == "block") {
    
    ResetEdit();
    
  } else {
    
    //reset
    ResetEdit();

    //Popups
    document.getElementById("bookmark-edit-box").style.display = "block";
    document.getElementById("bookmark-number").style.display = "block";
    document.getElementById("bookmark-url").style.display = "none";
    document.getElementById("bookmark-name").style.display = "none";
    document.getElementById("number").focus();

    document.getElementById("bookmark-number").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          document.getElementById("bookmark-number").style.display = "none";
          document.getElementById("bookmark-url").style.display = "block";
          var number = document.getElementById("number").value;
          if(document.getElementById("bookmark" + number).href == "http://mntp.glitch.me/null") {document.getElementById("url").value = "https://"} else {document.getElementById("url").value = document.getElementById("bookmark" + number).href}
          document.getElementById("url").focus();
        } else if (event.keyCode === 27) {
          ResetEdit();
        }
      });
  }

  document.getElementById("bookmark-url").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        document.getElementById("bookmark-url").style.display = "none";
        document.getElementById("bookmark-name").style.display = "block";
        document.getElementById("name").focus();
      } else if (event.keyCode === 27) {
        ResetEdit();
      }
    });

  document.getElementById("bookmark-name").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        var number = document.getElementById("number").value;
        var url = document.getElementById("url").value;
        var name = document.getElementById("name").value;

        //URL
        document.getElementById("bookmark" + number).href = url;

        //Name
        document.getElementById("bookmark" + number).innerHTML = name;

        //Save
        localStorage.setItem("bookmark" + number + " url", url);
        localStorage.setItem("bookmark" + number + " name", name);

        //Reset
        ResetEdit();
      } else if (event.keyCode === 27) {
        ResetEdit();
      }
    });
}
