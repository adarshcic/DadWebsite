$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

logoSize = function () {
    // Get the real width of the logo image
    var theLogo = $("#thelogo");
    var newImage = new Image();
    newImage.src = theLogo.attr("src");
    var imgWidth = 140;
    var imgHeight=100;

    // distance over which zoom effect takes place
    var maxScrollDistance = 110;

    // set to window height if larger
    maxScrollDistance = Math.min(maxScrollDistance, $(window).height());

    // width at maximum zoom out (i.e. when window has scrolled maxScrollDistance)
    var widthAtMax = 100;
    var widthAtHeight = 100;

    // calculate diff and how many pixels to zoom per pixel scrolled
    var widthDiff = imgWidth - widthAtMax;
    var HeightDiff = imgHeight - widthAtHeight;
    var pixelsPerScroll =(widthDiff / maxScrollDistance);

    var lastScrollTop = 0;
    var decreaseBy=0;
    $(window).scroll(function () {
        // the currently scrolled-to position - max-out at maxScrollDistance
        var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);

        // how many pixels to adjust by
        var scrollChangePx =  Math.floor(scrollTopPos * pixelsPerScroll);

        // calculate the new width
        var zoomedWidth = imgWidth - scrollChangePx;
        var zoomedHeight = imgHeight - scrollChangePx;

        // set the width
        $('.logo').css('width', zoomedWidth);
        $('.logo').css('height', zoomedHeight);
        var delta = 110-$('#myP').scrollTop();


        var delta=110-$(document).scrollTop();
        var prev=delta;
        var up=false;

        var curSize = parseInt($('#myP').css('font-size'),10);
        // scroll down

        var st = $(this).scrollTop();
        if (st > lastScrollTop){
           // downscroll code
           if(($(document).scrollTop()>0)&&($(document).scrollTop()<110)){
             decreaseBy+=1;
             if(decreaseBy>=10){
               curSize -= 1;
               decreaseBy=0;
             }
            }
        } else {
          if(($(document).scrollTop()>0)&&($(document).scrollTop()<110)){
             curSize += 1;
           }
        }
        lastScrollTop = st;

        if(curSize<17 && curSize>4){
        $('#myP').css({"font-size" : curSize+"px"});
      }

    });
}

logoSize();

$('footer').click(function(e) {
  e.preventDefault();
  $('footer .wrap').toggleClass('active');
});

window.onscroll = function() {footerfunc()};

function footerfunc() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myfooter").style = "display:block";
    } else {
        document.getElementById("myfooter").style="display:none";
    }
}

function unhide() {
    var x = document.getElementById('open');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
