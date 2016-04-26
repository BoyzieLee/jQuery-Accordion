// import $ from 'jquery';
// ^^^^ why am I getting an syntax error for this line?

// var accordion = $('.accordion');
// var h3 = $('h3');
// var accordion = $('#HTMLSection', '#SASSSection', '#JSSection');
//
// accordion.on('click', function (event) {
//   event.preventDefault();
//   // console.log($(this));
//
//   var parent = $(this).parent();
//   parent.addClass('hidden');
//
// // $('.accordion').addClass('hidden');
// // $('.accordion').removeClass('hidden');
//
// // this calls back the variable that was set earlier
//   h3.addClass('hidden');
// });
// // function animate () {
// //   // do some fun animation things
// // }
// (function (){
// }());
// console.log('Accorion!');



$(document).ready(function() {
    $(".accordion .hidden").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("slow");
      } else {
        $(".accordion .para").slideUp("slow");
        $(this).next("div").slideToggle("slow");
      }
    });
  });







// // class review /////// class review ///////
//
// var sections = $('section');
// var heading - $('h2');
// headings.on('click', function (event) {
//   event.preventDefault();
// // Hide ALL of the sections
//   sections.addClass('closed');
// // Find the heading that I clicked (this)
// // find their parent
//   var parent = $(this).parent();
// // Remove class of hidden from the parent
//   parent.removeClass('closed');
//
// });
