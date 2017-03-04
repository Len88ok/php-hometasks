$(document).ready(function(){
// 	// console.log($('#first'));
// 	// console.log($('.second'));
// 	// console.log($('.third'));

// 	// console.log($('ul>li'));

// 	// console.log($('ul').children());

// 	// console.log($('li').parent());

// 	// console.log($('ul').find('li'));
  
// 	// console.log($('#first').html());
// 	// console.log($('#first').text());

// 	$('#first').text('new content');

// 	console.log($('input').val());

// 	// console.log($('#first').attr('id'));

	

// 	// console.log($('h2'));

// 	var first = $('h2')[0];

// 	var second = $('h2')[1];

// 	// console.log($(first).attr('class'));

// 	$('.third2').css({color: "white", background: "blue", "text-align": "center"});

// 	// $('span').text('Hello');

// 	var first = $('span')[0];

// 	var second = $('span')[1];

// 	var third = $('span')[2];
// 	$(first).text('Hello');
// 	$(second).text('Hello2');
// 	$(third).text('Hello3');

// 	var els = $('.list').children();
// 		for (var i = 0; i < els.length; i++){
// 			$(els[i]).html(i + 1);
// 		}

// 		for (var i = 0; i < els.length; i++){
// 			if( (i+1) % 2 == 0){
// 				$(els[i]).css("background", "yellow");
// 			} else {
// 				$(els[i]).css("background", "green");
// 			}
// 		}


//  // for (var i = 0; i < 100; i++){
//  // 	var el = '<li>' + (i+1) + '</li>';
//  // 		$('.list2').append(el);
// 	// }



// $('button').on('click', function(){
//  	$('p').hide();
// });

// $('input').on('input', function(){
// 	$(this).val();  
// });


function convert(t,cur){
	return t * cur;
}

function getValues(){
	var t = $('#number').val();
	var cur = $('#cursies').val();
 	// console.log(cur);
	return [t,cur];
}

$('#number').on('input', function(){
	// console.log($(this).val());
	var arr = getValues();
	var t = parseFloat(arr[0]);
	if (isNaN(t)){
		alert('введите другое число');
	}; 
	var cur = parseFloat(arr[1]);
	var res = convert(t,cur);
	$('.res7').empty().append(res);
});

$('#cursies').on('change', function(){
	var arr = getValues();
	var t = parseFloat(arr[0]);
	if (isNaN(t)){
		alert('введите другое число');
	}; 
	var cur = parseFloat(arr[1]);
	var res = convert(t,cur);	
	$('.res7').empty().append(res);
});


var tar1 = 0.714;
var tar2 = 0.129;
var tar3 = 0.163;

function diff(now,before){
	// console.log(now,before);
	return parseFloat(now - before);
}

// console.log(diff(now,before));


function getValues(){
	var now = $('#now').val();
	var before = $('#before').val();
 	
	return [now,before];
}

function price(D){
	var sum = 0;
	if (D <= 100){
  	sum = D * tar1;
  }	if (D <= 600){
  	sum = 100 * tar1 + (D - 100) * tar2;
  } else {
  	sum = 100 * tar1 + 500 * tar2 + (D - 100 - 500) * tar3;
  }
  // console.log(sum);
 	return sum;
}

$('#now').on('input', function(){
 	var arr2 = getValues();
	var now = parseFloat(arr2[0]);
	var before = parseFloat(arr2[1]);
	var dif = diff(now,before); 
	// if (isNaN(now,before)){
	// 	alert('введите другое число');
	// }; 
	var result = parseFloat(price(dif));
	// console.log(result);
	$('#res10').val(result);
});

$('#before').on('input', function(){
	var arr2 = getValues();
 	var now = parseFloat(arr2[0]);	
 	var before = parseFloat(arr2[1]);
 	var dif = parseFloat(diff(now,before));
 	// if (isNaN(now,before)){
 	// 	alert('введите другое число');
 	// }; 
 	var result = parseFloat(price(dif));
 	$('#res10').val(result);
});








});
