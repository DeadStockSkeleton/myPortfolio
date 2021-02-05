let navLinks = $(".nav-link");

$(document).ready(function () {
  Splitting();

  let index = 1;
  showSlide(index);

  function plus(n) {
    showSlide((index += n));
  }
  $(".prev").on("click", function () {
    plus(-1);
  });
  $(".next").on("click", function () {
    plus(1);
  });
  function showSlide(n) {
    let slides = $(".slides");

    if (n > slides.length) {
      index = 1;
    }

    if (n < 1) {
      index = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      $(slides[i]).css("display", "none");
    }

    $(slides[index - 1]).css("display", "block");
  }

  $(navLinks).on("click", function () {
    var active = $(".active");
    if (active.length > 0) {
      $(active[0]).removeClass("active");
    }
    $(this).addClass("active");
    $("#main-home").css("display", "none");
  });

  $('.btn').on('click', function() {
    $('#back-btn').css('display', "block");
  });

  $('#back-btn').on('click', function() {
    $('.about').css('display', "none");
    $('.work').css('display', "none");
    $('.contact').css('display', "none");
    $('.home').css('display', "block");
    $('#back-btn').css('display', "none");
  });

  $('#about-btn').on('click', function(){
    $('.about').css('display', "block");
    $('.work').css('display', "none");
    $('.contact').css('display', "none");
    $('.home').css('display', "none");
  });

  $('#work-btn').on('click', function(){
    $('.about').css('display', "none");
    $('.work').css('display', "block");
    $('.contact').css('display', "none");
    $('.home').css('display', "none");
  });

  $('#contact-btn').on('click', function(){
    $('.about').css('display', "none");
    $('.work').css('display', "none");
    $('.contact').css('display', "block");
    $('.home').css('display', "none");
  });
  
});
