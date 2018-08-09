var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navvv").style.top = "0";
    document.getElementById("logo-main").style.width="10%";
    document.getElementById("logo-main").style.height="10%";
  } else {
    document.getElementById("navvv").style.top = "-150px";
    document.getElementById("logo-main").style.width="2%";
    document.getElementById("logo-main").style.height="2%";

  }
  if(currentScrollPos==0)
  {
    document.getElementById("logo-main").style.width="15%";
    document.getElementById("logo-main").style.height="15%";
  }
  prevScrollpos = currentScrollPos;
}
