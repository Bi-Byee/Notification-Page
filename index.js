function total() {
  var totalTemp = $("*").find(".unread").length;
  $(".total-notification").text(totalTemp);
}

var unreadClass = "<div class='unread'></div>";
$(".mark-notify").append(unreadClass);
$(".angela-notify").append(unreadClass);
$(".jacob-notify").append(unreadClass);

$(".mark").addClass("alert");
$(".angela").addClass("alert");
$(".jacob").addClass("alert");

$(".allRead").click(function () {
  $(".mark-notify .unread").remove();
  $(".angela-notify .unread").remove();
  $(".rizky-notify .unread").remove();
  $(".jacob-notify .unread").remove();
  $(".kimberly-notify .unread").remove();
  $(".nathan-notify .unread").remove();
  $(".anna-notify .unread").remove();

  $(".mark").removeClass("alert");
  $(".angela").removeClass("alert");
  $(".jacob").removeClass("alert");
  $(".rizky").removeClass("alert");
  $(".kimberly").removeClass("alert");
  $(".nathan").removeClass("alert");
  $(".anna").removeClass("alert");
  total();
});

$(".msg").click(function (event) {
  var className = "." + event.currentTarget.classList[9];
  var unread = className + "-notify .unread";
  $(className).removeClass("alert");
  $(unread).remove();
  total();
});

$(".msg").dblclick(function (event) {
  var className = "." + event.currentTarget.classList[9];
  var unread = className + "-notify";
  $(className).addClass("alert");
  $(unread).append(unreadClass);
  total();
});
