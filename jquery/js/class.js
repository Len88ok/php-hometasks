$(document).ready(function(){
	// console.log($('#first'));
	// console.log($('.second'));
	// console.log($('.third'));

	// console.log($('ul>li'));

	// console.log($('ul').children());

	// console.log($('li').parent());

	// console.log($('ul').find('li'));
  
	// console.log($('#first').html());
	// console.log($('#first').text());

	$('#first').text('new content');

	console.log($('input').val());

	// console.log($('#first').attr('id'));

	

	// console.log($('h2'));

	var first = $('h2')[0];

	var second = $('h2')[1];

	// console.log($(first).attr('class'));

	$('.third2').css({color: "white", background: "blue", "text-align": "center"});

	// $('span').text('Hello');

	var first = $('span')[0];

	var second = $('span')[1];

	var third = $('span')[2];
	$(first).text('Hello');
	$(second).text('Hello2');
	$(third).text('Hello3');

	var els = $('.list').children();
		for (var i = 0; i < els.length; i++){
			$(els[i]).html(i + 1);
		}

		for (var i = 0; i < els.length; i++){
			if( (i+1) % 2 == 0){
				$(els[i]).css("background", "yellow");
			} else {
				$(els[i]).css("background", "green");
			}
		}


 // for (var i = 0; i < 100; i++){
 // 	var el = '<li>' + (i+1) + '</li>';
 // 		$('.list2').append(el);
	// }



$('button').on('click', function(){
 	$('p').hide();
});

$('input').on('input', function(){
	$(this).val();  
});





});
