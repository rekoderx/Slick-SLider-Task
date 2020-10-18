$('.card__wrapper').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            mobileFirst: true
          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              slidesToScroll: 1,
              arrows: false,
              mobileFirst: true
            }
          }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });