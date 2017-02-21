var arr = [];
for (var i = 1; i <= 100; i++) {
	arr[i-1] = i;
}
//console.log(arr);
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
console.log(words);
