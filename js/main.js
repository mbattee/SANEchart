$( document ).ready(function() {

  console.log('hello');

  $(".faq-question").click(function(){
    $(this).children(".faq-answer").slideToggle();
  });

  $(".invite-button").click(function(){
    $(".invite-popup").slideToggle();
  });
  $('#portfolio-grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 10,
  });
});
