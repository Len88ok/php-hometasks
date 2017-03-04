var arr = [];
for (var i = 1; i <= 100; i++) {
	arr[i-1] = i;
}

/*for (var i = 0; i < arr.length; i++) {
	if  (arr[i] % 2 == 0) {
		console.log(arr[i]);
	}
}

for (var i = 0; i < arr.length; i++) {
 	if  (arr[i] % 2 != 0) {
		console.log(arr[i]);
	}
}*/

var arr2 = [];


for (var i = 0; i < arr.length; i++) {
	if  (arr[i] % 2 != 0) {
		arr2.push(arr[i]);

	}
}
// console.log(arr2);
var S = 0;

for (var i = 0; i < arr.length; i++) {
	S += arr[i];
}
x = S / arr.length;  

// console.log(S);

// console.log(x);

var arr3 = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
var words = '';
for (var i = 0; i < arr3.length; i++) {	
	if (i == arr3.length-1) {
		words += arr3[i]; 
	}
	else{
		words += arr3[i] + ' ';
	}
}
// console.log(words);
	

function sum (a,b) {
	var a = prompt('a', 0);
	var b = prompt('b', 0);
	a = parseInt(a);
	b = parseInt(b);
	var S = a + b;	
		
	if (S % 2 == 0 ){
		return console.log(S);
	}	
	else { 
		return console.log('Ошибка');
	} 
}

function sign(x){
	var x = prompt('x', 0);
	x = parseInt(x);
	return x >= 0 ? alert('+') : alert('-');
}


function mod(y){
	var y = prompt('y', 0);
	x = parseInt(y);
	return y >= 0 ? alert(y) : alert(-y);
}


function factor(n){
	var n = 5;
	var F = 1;
	for (var i = 1; i <= n; i++){
	 	F = F * i;
	}
	alert(F);
}

// function factorR(n){
// 	if (n > 0) {
// 		n = n * factorR(n-1);
// 	}
// 	else{
// 		n = 1;
// 	}
// 	return n;
// }
// console.log(factorR(5));

function factorR(n){
  return	n > 0 ? n = n * factorR(n-1) : n = 1;
}
console.log(factorR(3));

