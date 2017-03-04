$(document).ready(function(){

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

	// 1
	var secondP = $('p')[1];
	var thirdP = $('p')[2];
	

    $('#res1').on("click", function(){
        $(thirdP).css({background: "green"});
        $(secondP).css({background: "red"});
    });

// 2

			var sum = 0;
			$(".lishka").each(function(){
				sum += parseInt($(this).html());
			})

             $('#res2').on("click", function(){
                alert(sum);
             });



//3
    var arr = [];

    $('form').find('input, textarea').each( function(){
        arr.push(this.value);                
    })

     $('#res3').on("click", function(){
        alert(arr.join(', '));
     });



// //4
var options = [
        set0 = [1, 2, 3],
    		set1 = ['Hello'],
    		set2 = ['a', 'b', 'c'],
    		set3 = [3, 4, 5],
    		set4 = ['Hello']
    ];
var list = document.createElement('ul');
		for(var i = 0; i < options.length; i++) {
        // Create the list item:
        var nested = document.createElement('ul');
        // Set its contents:
        nested.appendChild(document.createTextNode(options[i]));
        // Add it to the list:
        list.appendChild(nested);
        for(var j = 0; j < options.length; j++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(options[j]));
            list.appendChild(item);
        }
    }

    $('#res4').on("click", function(){
        var fourth = $('.fourth');
        fourth.append(list);
     });
   
    
//5
// В html

//6
$("#check").change(function() {
    $(".hide").toggleClass("op", this.checked)
});


});

