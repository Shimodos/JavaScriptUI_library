import $ from './lib/lib';

$('button').on('click', function() {
	$('div').eq(1).toggleClass('active');
});

$('div').click(function() {
	console.log($(this).index());
});


// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findmes').addClass('wewewe'));
$('button').fadeIn(1600);


// console.log($('button').html('hello'));