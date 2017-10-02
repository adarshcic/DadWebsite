document.write('<script>\
var slideIndex = 1;\
showDivs(slideIndex);\
\
function plusDivs(n) {\
  showDivs(slideIndex += n);\
}\
\
function showDivs(n) {\
  var i;\
  var x = document.getElementsByClassName("mySlides");\
  if (n > x.length) {window.location.href="#closePopUp";}\
  if (n==x.length) {unhide2("leftButton")}\
  if (n == 1) {document.getElementById("leftButton").style.display = "none";}\
  for (i = 0; i < x.length; i++) {\
     x[i].style.display = "none";\
  }\
  x[(slideIndex-1)].style.display = "block";\
}\
</script>\
')
