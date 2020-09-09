function Search() {
  if(localStorage.getItem("setting7") == "0") {
    window.open('http://google.com/search?q='+ document.getElementById("search").value , '_self')
    console.log("1")
  } else {
    window.open('http://google.com/search?q='+ document.getElementById("search").value)
    console.log("2")
  }
};

document.getElementById('search-box').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
     Search()
      return false;
    }
  }