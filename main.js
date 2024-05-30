document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
      new Flickity(carousel, {
          // options
          cellAlign: 'center',
          groupCells: true,
          wrapAround: false,
          freeScroll: false,
          groupCells: '100%'
      });
  });

  var distance = $('.containermaster').offset().top;
  $(window).on("load scroll", function(){

      if($(window).scrollTop() > distance + 10){
          $('.navbar').css({
              backgroundColor: 'rgba(20, 20, 20, 1)',
              position: 'fixed',
              top: 0,
              right: 0,
              left: 0,
              'z-index': 1030
          });
      } else {
          $('.navbar').css({
              backgroundColor: 'rgba(0, 0, 0, 0)',
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              'z-index': 1030,
          });
      }

  });
});
