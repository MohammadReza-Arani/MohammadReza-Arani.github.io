/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {
  // Always keep all tabs visible in the horizontal navigation bar on all screens
  while ($hlinks.children().length > 0) {
    $hlinks.children().first().appendTo($vlinks);
  }
  breaks = [];
  $btn.addClass('hidden');
  $hlinks.addClass('hidden');
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
