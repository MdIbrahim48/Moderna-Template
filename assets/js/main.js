
// ===== Scroll to Top ==== 
var btn = $('#scroll-to-top');

btn.removeClass('show');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $("html").offset().top},
    'slow');
});

// toggle-bar
   $('.navbar-toggler').click(function(){
    $(this).toggleClass('active')
   });


// Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });
  $(window).ready(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // if ($(window).scrollTop() > 100) {
  //   $('#header').addClass('header-scrolled');
  // }


// Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="bx bx-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }


//header-slider
  $(".header-slider-inner").owlCarousel({
    autoplay: false,
    dots: false,
    loop: true,
    nav:true,
    navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      }
    }
  });

 // var heroCarousel = $("#heroCarousel");
// $('.header-slider .owl-item').each(function() {
//   if($(this).hasClass('active')){
//     alert(0);
//     $(this).find('h2').addClass('animate__animated animate__fadeInDown');
//     $(this).find('p, .header-slider-btn').addClass('animate__animated animate__fadeInUp');
//   }
// })
  // heroCarousel.on('slid.bs.carousel', function(e) {
  //   alert(0);
  //   $(this).find('h2').addClass('animate__animated animate__fadeInDown');
  //   $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  // });



   // Skills section
  $('.about-skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });



// about-slider-wrapper
  $(".about-slider-wrapper").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    nav:false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      }
    }
  });


// Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-filters-content').isotope({
      layoutMode: 'fitRows'
    });

    $('#portfolio-filters li').on('click', function() {
      $("#portfolio-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

  });



// portfolio-details-slider
  $(".portfolio-details-slider-wrapper").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    nav:false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      }
    }
  });




// Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });




      // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });



 // Initi AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });



