$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: "Без скинали", // Set a custom before label
    after_label: "Со скинали", // Set a custom after label
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: "before-slider__dots",
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
  });
  $(".menu-button").on("click", function () {
    $(".menu").toggleClass("menu_active");
  });

  /* Настройка select */
  $(".select_checked").on("click", function () {
    $(".select__dropdown").toggleClass("select__dropdown_open");
  });
  $(".select__option").on("click", function () {
    var value = $(this).attr("data-value");
    $("#select-type").val(value);
    $(".select_checked").text(value);
    $(".select__dropdown").toggleClass("select__dropdown_open");
  });
  $("a[href^='#']").click(function () {
    let _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 120 + "px",
    });
    return false;
  });
  $("[type='tel']").mask("+7 (999)-99-99");
});
