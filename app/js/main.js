console.log('Accorion!');


$('.accorion').addClass('hidden');
$('.accorion').removeClass('hidden');
var accordion = $('#HTMLSection', '#SASSSection', '#JSSection');

accordion.on('click', function (event) {
  event.preventDefault();
// this calls back the variable that was set earlier
  hidden.toggleClass('open');
});
function animate () {
  // do some fun animation things
}
