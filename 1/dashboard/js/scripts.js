// Responsive Icon
function myIcon(x) {
    x.classList.toggle("change");
  }

// Responsive Sidebar
function myMenu () {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-3 sidebar topnav") {
      x.className += " responsive";
    } else {
      x.className = "col-3 sidebar topnav";
    }
  }

// Dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

// Dropdown 2
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }