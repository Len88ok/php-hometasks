$(document).ready(function(){
//1
$('#num1-res').on('click', function(){	
var number = parseFloat($('#num1').val()); 
	if (number == 1) {
		$('#text1').css("background", "green");
	} else if (number == 2) {
		$('#text2').css("background", "green");
	} else if (number == 3){
		$('#text3').css("background", "green");
	} else if (number == 4){
		$('#text4').css("background", "green");
	} else if (number == 5){
		$('#text5').css("background", "green");
	} else {
		alert ('нет такого абзаца');
	}
});
//2
function convert(meter,measure){
	return meter * measure;
}

function getValues(){
	var meter = $('#num2').val();
	var measure = $('#length').val();
 	// console.log(cur);
	return [meter,measure];
}

$('#num2').on('input', function(){
	// console.log($(this).val());
	var arr = getValues();
	var meter = parseFloat(arr[0]);
	if (isNaN(meter)){
		alert('введите другое число');
	}; 
	var measure = parseFloat(arr[1]);
	// console.log(measure);
	var res = convert(meter,measure);
	// console.log(res);
	$('#num2-res').val(res);
});

$('#length').on('change', function(){
	var arr = getValues();
	var meter = parseFloat(arr[0]);
	if (isNaN(meter)){
		alert('введите другое число');
	}; 
	var measure = parseFloat(arr[1]);
	var res = convert(meter,measure);
	$('#num2-res').val(res);
});

function getValues2(){
	var meter2 = $('#num3').val();
	var measure2 = $('#length2').val();
 	// console.log(cur);
	return [meter2,measure2];
}

$('#num3').on('input', function(){
	// console.log($(this).val());
	var arr2 = getValues2();
	var meter2 = parseFloat(arr2[0]);
	if (isNaN(meter2)){
		alert('введите другое число');
	}; 
	var measure2 = parseFloat(arr2[1]);
	// console.log(measure);
	var res2 = convert(meter2,measure2);
	// console.log(res);
	$('#num3-res').val(res2);
});

$('#length2').on('change', function(){
	var arr2 = getValues2();
	var meter2 = parseFloat(arr2[0]);
	if (isNaN(meter2)){
		alert('введите другое число');
	}; 
	var measure2 = parseFloat(arr2[1]);
	var res2 = convert(meter2,measure2);
	$('#num3-res').val(res2);
});

});