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

$(window).resize(function () {
    $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10);
});

$(window).load(function () {
    $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10);
});
