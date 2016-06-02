$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var match = "meg";
    if (age < 22 && gender==="male"){
      match = "jen";
    }
    $("#celeb").empty().append(match);
    $("#match").show();

    event.preventDefault();
  });
});
