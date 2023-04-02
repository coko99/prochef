$(".filter-button").on("click", (e) => {
  const filter = $(e.target).attr("data-filter");
  $(".filter-dnone").removeClass("d-none");
  console.log(filter);
  const items = $(".item-content").parent();
  for (item of items) {
    if (filter == "") {
      $(item).addClass("animated zoomIn faster");
      $(item).parent().addClass("animated zoomIn faster");
      $(item).removeClass("d-none");
      $(item).parent().removeClass("d-none");

      console.log("x");
    } else if ($(item).attr("data-category") == filter) {
      $(item).addClass("animated zoomIn faster");
      $(item).parent().addClass("animated zoomIn faster");
      $(item).removeClass("d-none");
      $(item).parent().removeClass("d-none");
    } else {
      $(item).addClass("d-none");
      $(item).parent().addClass("d-none");
      $(item).removeClass("animated zoomIn faster");
      $(item).parent().removeClass("animated zoomIn faster");
    }
  }
});

$(document).ready(function () {
  //create variable
  var counts = 0;
  $(".addtocart").click(function () {
    //to number and increase to 1 on each click
    counts += +1;
    $(".cart-counter").animate(
      {
        //show span with number
        opacity: 1,
      },
      300,
      function () {
        //write number of counts into span
        $(this).text(counts);
      }
    );
  });
});
