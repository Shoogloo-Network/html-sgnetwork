$(document).ready(function(){
    $(".navigation").hover(
        function() {
            // On mouse enter, show the second icon and hide the first
            $(this).find("svg.first-icon").removeClass("block").addClass("hidden");
            $(this).find("svg.second-icon").removeClass("hidden").addClass("block");
        },
        function() {
            // On mouse leave, revert to the initial state
            $(this).find("svg.second-icon").removeClass("block").addClass("hidden");
            $(this).find("svg.first-icon").removeClass("hidden").addClass("block");
        }
    );


    $('.btn-menu').on('click', function() {
        $('.navigation svg').toggleClass('menu-hidebtn');
        $('.mbtn-hide').toggleClass('menu-hidebtn');
        $('.menu-btnminus').toggleClass('menu-showbtn');
        $('.menu').toggleClass('menu-custbtn');
        $('.menu2').toggleClass('menu-custbtn');
    });


});

document.addEventListener("DOMContentLoaded", function() {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const $element = $(entry.target);
          const fromValue = parseInt($element.data('from-value'));
          const toValue = parseInt($element.data('to-value'));
          const duration = parseInt($element.data('duration'));
  
          $({ counterValue: fromValue }).animate({ counterValue: toValue }, {
            duration: duration,
            easing: 'swing',
            step: function() {
              $element.text(Math.floor(this.counterValue));
            },
            complete: function() {
              $element.text(this.counterValue);
            }
          });
  
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    });
  
    // Select the elements to be observed
    const targetElements = document.querySelectorAll('.counter-number');
  
    // Observe each element
    targetElements.forEach((element) => {
      counterObserver.observe(element);
    });
});
  
// display one by one character at a time Advertisers
$(document).ready(function () {
    const text = "Advertisers";
    const delay = 200; // Delay in milliseconds
    let index = 0;

    function displayNextChar() {
        $('#advertisers').append(text[index]);
        index++;

        if (index >= text.length) {
            setTimeout(function () {
                $('#advertisers').empty(); // Clear the display
                index = 0;
            }, delay);
        }
    }

    setInterval(displayNextChar, delay);
});
// display one by one character at a time Publishers
$(document).ready(function () {
    const text = "Publishers";
    const delay = 200; // Delay in milliseconds
    let index = 0;

    function displayNextChar() {
        $('#publishers').append(text[index]);
        index++;

        if (index >= text.length) {
            setTimeout(function () {
                $('#publishers').empty(); // Clear the display
                index = 0;
            }, delay);
        }
    }

    setInterval(displayNextChar, delay);
});

// fadeInRight fadeInDown fadeInUp and fadeInLeft, page scroll down and refresh
$(document).ready(function() {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function checkAnimation() {
    $('.fadeInRight, .fadeInDown, .fadeInUp, .fadeInLeft, .fadeInUpRotate').each(function() {
      if (isScrolledIntoView(this)) {
        $(this).addClass('in-view');
      }
    });
  }

  // Debounce function to limit the rate of checkAnimation calls
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Check animation on scroll with debounce
  $(window).on('scroll', debounce(checkAnimation, 100));

  // Initial check in case elements are already in view
  checkAnimation();
});




$(document).ready(function() {
  // Delay before adding the class to trigger the animation
  setTimeout(function() {
    $('.fadeInLeft2').addClass('in-view2');
  }, 1000); // 1000 milliseconds = 1 seconds

  setTimeout(function() {
    $('.fadeInRight2').css('opacity', '1');
  }, 1000); // 1000 milliseconds = 1 seconds

});





