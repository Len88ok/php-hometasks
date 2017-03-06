<?php

for ($i = 1; $i <= 100; $i++) {
	$arr[$i-1] = $i;
}

// echo array_sum($arr);

//сумма элементов массива
function get_sum($arr) { 

    $sum = 0;           
    for ($i = 0; $i < count($arr); $i++) { 

        $sum = $sum + $arr[$i];
    }
    return $sum;
}
// echo get_sum($arr); 

//среднее
$average = get_sum($arr) / count($arr);
// echo $average;

echo '<p>';

//функция возведения в квадрат
function square($n)
    {
    return $n*$n;  
    }

echo square(5);

echo '</p>';

//первое . второе
function create($first, $second){
  $result = $first . $second;
  return ($first . '<br>' . $second . '<br>' . $result . '<br>' . strlen($result));
}
echo create('first', 'second');

echo '<br>';
$arr5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
echo "'";
for ($i = 0; $i < count($arr5); $i++) {
	if($i % 2 != 0) {
		echo $arr5[$i];
	} 
}
echo "'";


$car = [
	'bmv' => 
	[
		'model' => 'x5',
		'year' => '2010',
		'color' => 'red',
		'max-speed' => '250'

	],
	'audi' => 
	[
		'model' => 'a4',
		'year' => '2010',
		'color' => 'blue',
		'max-speed' => '255'

	],
	'citroen' => 
	[
		'model' => 'c4',
		'year' => '2008',
		'color' => 'black',
		'max-speed' => '220'
	],
	'toyota' => 
	[
		'model' => 'corolla',
		'year' => '2009',
		'color' => 'red',
		'max-speed' => '240'
	],
	'skoda' => 
	[
		'model' => 'octavia',
		'year' => '2010',
		'color' => 'gray',
		'max-speed' => '240'
	]
];


foreach ($car as $key=>$value) {
	if (is_array($value)) {
		echo '<br>' . $key . " ";
		foreach ($value as $key2=>$subvalue) {
			if ($key2 == 'model'){
				echo $subvalue . ' -';
			} elseif (($key2 == 'year')){
				echo $subvalue . '<br>';
			}
		}
	}	
}