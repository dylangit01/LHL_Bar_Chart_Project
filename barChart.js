import * as $ from "jquery";

$(function () {
  $('.bars li .bar').each(function(key, bar) {
    let percentage = $(this).data('percentage');
    $(this).animate({
      'height':  percentage + '%'
    }, 1000);
  });
})


