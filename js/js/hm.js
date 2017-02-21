// 1) Создать двумерный массив arr[i][j] и заполнить его значениями i*j. 
// Т.е. в ячейке arr[3][5] будет значение 3х5 = 15. (i = 5, j = 5)
var n = 5, m = 5;
var arr = [];
for (var i = 0; i <= m; i++){
	arr[i] = [];
	for (var j = 0; j <= n; j++){
		arr[i][j] = i * j;
}}
/*console.log(arr);*/

 // Вывести все чётные элементы массива arr
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j <= arr.length; j++){
			if  (arr[i][j] % 2 == 0 && arr[i][j] != 0) {
			arr1.push(arr[i][j]);
		}
	}
}
// console.log(arr1)

// Вывести все нечётные элементы массива arr
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j <= arr.length; j++){
			if  (arr[i][j] % 2 != 0) {
			arr2.push(arr[i][j]);
		}
	}
}
/*console.log(arr2)*/

// Найти элементы главной диагонали массива arr[i][j]
var arr3 = [];
for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j <= arr.length; j++){
			if  (i == j) {
			arr3.push(arr[i][j]);
		}
	}
}
// console.log(arr3)

// Создать одномерный массив arr2[i] 
// и заполнить его значениями от 1 до 100;

var arr4 = [];
for (var i = 1; i <= 100; i++) {
	arr4[i-1] = i;
}
// console.log(arr4)

var arr5 = [];
for (var i = 0; i < 100; i++) {
	arr5[i] = 100-i;
}
/*console.log(arr5)*/