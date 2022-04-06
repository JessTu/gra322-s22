$(document).ready(function(){
    /*
    we're finding the nav element and hiding it here
    */
    $('nav').hide();

    // setup our click function
    $('.menu-button').click(function(){
        $('nav').slideToggle();
    });
});

const slider = tns({
    container: '.my-slider',
    nav: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    responsive: {
        375: {
          edgePadding: 50,
          gutter: 20,
          items: 1
        },
        768: {
          gutter: 30
        },
        1400: {
          items: 1
        }
      }
});


const slider2 = tns({
    container: '.my-slider2',
    nav: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    responsive: {
        375: {
          edgePadding: 50,
          gutter: 20,
          items: 1
        },
        768: {
          gutter: 30
        },
        1400: {
          items: 1
        }
      }
});


const slider3 = tns({
    container: '.my-slider3',
    nav: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    responsive: {
        375: {
          edgePadding: 50,
          gutter: 20,
          items: 1
        },
        768: {
          gutter: 30
        },
        1400: {
          items: 1
        }
      }
});



