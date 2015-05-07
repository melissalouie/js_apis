$(function () {
  $('#get-news').on('click', function() {
    // NPR News API Call
    $.ajax({
      url: "http://api.npr.org/query?id=1002&output=JSON&apiKey=MDE5MDgwOTg0MDE0MzEwMTU0MTA4YmExOQ001",
      dataType: 'json',
      success: function(results) {
        $(results.list.story).each(function(index, element) {
          $('body').append("<li>" + this.title.$text + " <a href='" + this.link[0].$text + "'>link</a>" + "</li>");
        });
      }
    });
  });

});
