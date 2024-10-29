$(function() {

    "use strict";

    var wind = $(window);

    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });

    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/LOGO-ALUMNUS-05.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/LOGO-ALUMNUS-05.png');
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    document.querySelectorAll(".see-details").forEach(button => {
        button.addEventListener("click", function (event) {
          event.preventDefault();
          const detailsText = this.nextElementSibling;
          detailsText.style.display = detailsText.style.display === "none" ? "block" : "none";
        });
    });

});

$(window).on("load",function (){
    $(".loading").fadeOut(500);
});

$(document).ready(function () {
    var dateElement = document.getElementById("date");
    var year = new Date().getFullYear();
    dateElement.textContent = year;
  });