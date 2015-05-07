$(function () {

    // NPR News API Call
    $.ajax({
      url: "http://api.npr.org/query?id=1002&output=JSON&apiKey=MDE5MDgwOTg0MDE0MzEwMTU0MTA4YmExOQ001",
      dataType: 'json',
      success: function(results) {
        $(results.list.story).each(function(index, element) {
          $('ul').append("<li>" + this.title.$text + " <a href='" + this.link[0].$text + "'>link</a>" + "</li>");
        });
      }
    });

    // NyTimes API Call
    $.ajax({
      url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=world&api-key=f1b90da3f09d8cd8b88bcdc444299e65%3A6%3A56248529",
      dataType: 'json',
      success: function(results) {
        $(results.response.docs).each(function(index, element) {
          $('ul').append("<li>" + this.headline.main + " <a href='" + this.web_url + "'>link</a>" + "</li>");

        });
      }
    });

    // Guarden API Call
    


});

bxhaadk2t7dvq26gjv6y29fk
