// Функции

var arr = [];
for (var i = 1; i <= 10; i++) {
	arr[i-1] = i;
}
// сумма всех элементов массива
function sum(arr){
	var S = 0;
	for (var i = 0; i < arr.length; i++) {
		S += arr[i];
	}
	return S;
}
// console.log(sum(arr));

// среднее значение массива
function average(arr){
	var S = 0;
	var A = 0;
	for (var i = 0; i < arr.length; i++) {
		S += arr[i];
	}
	A = S / 2;
	return A;
}
// console.log(average(arr));

// главная диагональ двумерного массива
var n = 3, m = 3;
var arr2 = [];
for (var i = 0; i <= m; i++){
	arr2[i] = [];
	for (var j = 0; j <= n; j++){
		arr2[i][j] = i * j;
}}

function diagonal(arr2){
	var arr3 = [];
	for (var i = 0; i < arr2.length; i++) {
			for (var j = 0; j <= arr2.length; j++){
				if  (i == j) {
				arr3.push(arr2[i][j]);
			}
		}
	}
	return arr3;
}
// console.log(diagonal(arr2));

// Функция
// 	x > 0 : x^2;
// 	x = 0 : x;
// 	x < 0 : 5*x + 5;
function condition(x) {
	// var x = prompt('x', 0);
	// x = parseInt(x);
	if (x > 0){
		return x * x;
	}	else if(x < 0){
		return 5 * x + 5;
	} else { 
		return x;
	} 
}
// console.log(condition(5));

// Числа Фибоначчи - 1, 2, 3, 5, 8, 13 .... через рекурсию

function fib(n) {
  return n >= 2 ? fib(n - 1) + fib(n - 2) : n;
}

var arrF = []; 

x = 5;

for (i = 0; i < x; i++) {
 	arrF.push(fib(i));
}

// console.log(arrF);

var x = arrF.join();

// console.log(x);

var arrF2 = x.split('/');

console.log(arrF2);

