$(function () {
  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      dalay: 1000,
      disableOnInteraction: false,
    },
    // autoplay: 2000,
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // pagination: '.swiper-pagination',
  });


  var imageObj = [
    {
      "src": "/images/seat3.jpg",
      "url": "",
    },
    {
      "src": "/images/seat2.jpg",
      "url": "",
    },
    {
      "src": "/images/seat1.jpg",
      "url": "",
    },

    {
      "src": "/images/seat.jpg",
      "url": "",
    },
    {
      "src": "/images/seat4.jpg",
      "url": "",
    },


  ];
  $('.accordion').accordion({
    "imageObj": imageObj,
    animateWidth: 742
  });



})