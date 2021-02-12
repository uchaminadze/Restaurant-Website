  function mySFunction() {
    document.getElementById('dropdown-c1').classList.toggle('show1');
    document.getElementById('dropdown_c1').classList.toggle('show4');
    document.getElementById("triangle1").classList.toggle("show6");
    document.getElementById('arrow1').classList.toggle('focus');

}
function burgerFunction() {
    document.querySelector('ul').classList.toggle('show2');
    document.querySelector('.burger-icon').classList.toggle('toggle');
}


window.onclick = function(event) {
     if (!event.target.matches('.order')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
          openDropdown.classList.remove('show1');
        }
      }
    }
    if (!event.target.matches('.order')) {
        var dropdowns = document.getElementsByClassName("arrow1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('focus')) {
            openDropdown.classList.remove('focus');
          }
        }
      }
      if (!event.target.matches('.order')) {
        var dropdowns = document.getElementsByClassName("dropdown_content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show4')) {
            openDropdown.classList.remove('show4');
          }
        }
      }
      if (!event.target.matches('.order')) {
        var dropdowns = document.getElementsByClassName("triangle1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show6')) {
            openDropdown.classList.remove('show6');
          }
        }
      }
  }