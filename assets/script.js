Splitting();

let navLinks = $('.nav-link');

$(document).ready(function(){

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
          $('#main-about').css('display', 'block');
          $('#main-work').css('display', 'none');
          $('#main-contact').css('display', 'none');
      });
      $('#work-btn').on('click', function() {
        $('.main-section').css('display', 'none');
        $('#main-about').css('display', 'none');
        $('#main-work').css('display', 'block');
        $('#main-contact').css('display', 'none');
    });
    $('#contact-btn').on('click', function() {
        $('.main-section').css('display', 'none');
        $('#main-about').css('display', 'none');
        $('#main-work').css('display', 'none');
        $('#main-contact').css('display', 'block');
    });

      $('#back-btn-about').on('click', function() {
        openBtn();
        
      });
      $('#back-btn-work').on('click', function() {
        openBtn();
        
      });
      $('#back-btn-contact').on('click', function() {
        openBtn();
        
      });

      function openBtn(){
        $('.main-section').css('display', 'block');
        $('#main-about').css('display', 'none');
        $('#main-work').css('display', 'none');
          $('#main-contact').css('display', 'none'); 
      }


});