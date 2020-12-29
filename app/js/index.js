window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 4,
    slidesToScroll: 2,
    rewind: true,
    scrollLock: true,
    scrollLockDelay: 0,
    dragVelocity: 1,
    draggable: true,
    dots: ".glider-dots",
  });
});
