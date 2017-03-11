$( document ).ready(function() {
  $(".faq-question").click(function(){
    $(this).children(".faq-answer").slideToggle();
  });

  $(".invite-button").click(function(){
    $(".invite-popup").slideToggle();
  });
});
