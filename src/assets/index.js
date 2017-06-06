$(function () {

  $(".alt-2").click(function () {
    if (!$(this).hasClass('material-button')) {
      $(".shape").css({
        "margin-top": "0",
        "margin-right": "0",
        "width": "100%",
        "height": "100%",
        "transform": "rotate(0deg)",
        "background" : "#558B2F",
        "border-radius": "50%"
      })

      setTimeout(function () {
        $(".overbox").css({
          "overflow": "initial"
        })
        $(".alt-2").removeClass("my-white");
      }, 600)

      $(this).animate({
        "width": "140px",
        "height": "140px"
      }, 500, function () {
        $(".box").removeClass("back");

        $(this).removeClass('active')
      });

      $(".overbox .my-title").fadeOut(300);
      $(".overbox .input").fadeOut(300);
      $(".overbox .my-overlap-container").fadeOut(300);

      $(".alt-2").addClass('material-buton');
      $(".material-button").removeClass("my-white");
    }

  })

  $(".material-button").click(function () {

    if ($(this).hasClass('material-button')) {
      setTimeout(function () {
        $(".overbox").css({
          "overflow": "hidden"
        })
        $(".box").addClass("back");
      }, 200)
      $(this).addClass('active').animate({
        "width": "700px",
        "height": "700px"
      });

      setTimeout(function () {
        $(".shape").css({
          "margin-top": "45px",
          "margin-right": "75px",
          "width": "140px",
          "height": "140px",
          "transform": "rotate(45deg)",
          "background" : "#FFFFFF",
          "border-radius": "100%",
          "z-index":"9999"
        })
        $(".alt-2").addClass('my-white');
        $(".material-button").addClass("my-white");

        $(".overbox .my-title").fadeIn(300);
        $(".overbox .input").fadeIn(300);
        $(".overbox .my-overlap-container").fadeIn(300);
      }, 700)

      $(this).removeClass('material-button');

    }

    if ($(".alt-2").hasClass('material-buton')) {
      $(".alt-2").removeClass('material-buton');
      $(".alt-2").addClass('material-button');

    }


  });

});
