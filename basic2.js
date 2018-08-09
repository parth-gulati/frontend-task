var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navvv").style.top = "0";
  } else {
    document.getElementById("navvv").style.top = "-150px";
    document.getElementById("logo-main").style.width="-100px";
    document.getElementById("logo-main").style.height="-100px";

  }
  prevScrollpos = currentScrollPos;
}
