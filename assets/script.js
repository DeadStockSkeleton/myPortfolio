

let navLinks = $('.nav-link');

$(document).ready(function(){
  Splitting();


    $(navLinks).on('click', function () {
        var active = $('.active');
        if (active.length > 0) {
            $(active[0]).removeClass('active');
        }
        $(this).addClass('active');
        $('#main-home').css('display', 'none');
      });

      $('#about-btn').on('click', function() {
          $('.main-section').css('display', 'none');
          $('#main').css('display', 'block');
          $('.about-section-container').css('display', 'block');
          $('.work-section-container').css('display', 'none');
          $('.contact-section-container').css('display', 'none');
      });
      $('#work-btn').on('click', function() {
        $('.main-section').css('display', 'none');
        $('#main').css('display', 'block');
        $('.about-section-container').css('display', 'none');
        $('.work-section-container').css('display', 'block');
        $('.contact-section-container').css('display', 'none');
    });
    $('#contact-btn').on('click', function() {
      $('.main-section').css('display', 'none');
      $('#main').css('display', 'block');
      $('.about-section-container').css('display', 'none');
      $('.work-section-container').css('display', 'none');
      $('.contact-section-container').css('display', 'block');
    });

      $('.back-btn').on('click', function() {
        closeBtn();
        
      });

      function closeBtn(){
        $('.main-section').css('display', 'block');
        $('#main').css('display', 'none'); 
      }


});