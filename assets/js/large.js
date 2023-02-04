/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

})(jQuery);

//Lumber calculator V1 

//event listener to trigger all calculations to update numbers after any change-----------------------------------------------------------------------
document.querySelector('table.alt').addEventListener('input', calcLumber)
//add event listener button Calculate button 
document.querySelector('#print-view').addEventListener('click', togglePrintView)
document.querySelector('#full-view').addEventListener('click', toggleFullView)

function togglePrintView(){
	document.querySelector('#footer').style.display = 'none'
	document.querySelector('#header').style.display = 'none'
	document.querySelector('.major h2').style.display = 'none'
	document.querySelector('#full-view').classList.toggle('hidden')
	document.querySelector('#print-view').style.display ='none'
	
}
function toggleFullView(){
	document.querySelector('#footer').style.display = 'block'
	document.querySelector('#header').style.display = 'flex'
	document.querySelector('.major h2').style.display = 'block'
	document.querySelector('#full-view').classList.toggle('hidden')
	document.querySelector('#print-view').style.display ='inline-block'
	
}

let totalVolume1
let totalVolume2
let totalVolume3
let totalVolume4
let totalVolume5
let totalVolume6
let totalVolume7
let totalVolume8
let totalVolume9
let totalVolume10
let totalVolume11
let totalVolume12
let totalVolume13
let totalVolume14
let totalVolume15
let totalVolume16
let totalVolume17
let totalVolume18
let totalVolume19
let totalVolume20
let lineTotal1
let lineTotal2
let lineTotal3
let lineTotal4
let lineTotal5
let lineTotal6
let lineTotal7
let lineTotal8
let lineTotal9
let lineTotal10
let lineTotal11
let lineTotal12
let lineTotal13
let lineTotal14
let lineTotal15
let lineTotal16
let lineTotal17
let lineTotal18
let lineTotal19
let lineTotal20
let lineTotalA1
let lineTotalA2
let lineTotalA3
let lineTotalA4
let lineTotalA5
let lineTotalA6
let lineTotalA7
let lineTotalA8
let lineTotalA9
let lineTotalA10

let total
let tax
//Lumber per line volume calculation functions---------------------------------------------------------------------------
function calcTotalVolume1(){
	let width = document.querySelector('#row1 .width').value
	let hight = document.querySelector('#row1 .hight').value
	let length = document.querySelector('#row1 .length').value
	let quantity = document.querySelector('#row1 .quantity').value
	totalVolume1 = hight * width * length * quantity / 1000000
	document.querySelector('#row1 .totalVolume').innerHTML = `${totalVolume1} m3`
}
function calcTotalVolume2(){
	let width = document.querySelector('#row2 .width').value
	let hight = document.querySelector('#row2 .hight').value
	let length = document.querySelector('#row2 .length').value
	let quantity = document.querySelector('#row2 .quantity').value
	totalVolume2 = hight * width * length * quantity / 1000000
	document.querySelector('#row2 .totalVolume').innerHTML = `${totalVolume2} m3`
}
function calcTotalVolume3(){
	let width = document.querySelector('#row3 .width').value
	let hight = document.querySelector('#row3 .hight').value
	let length = document.querySelector('#row3 .length').value
	let quantity = document.querySelector('#row3 .quantity').value
	totalVolume3 = hight * width * length * quantity / 1000000
	document.querySelector('#row3 .totalVolume').innerHTML = `${totalVolume3} m3`
}
function calcTotalVolume4(){
	let width = document.querySelector('#row4 .width').value
	let hight = document.querySelector('#row4 .hight').value
	let length = document.querySelector('#row4 .length').value
	let quantity = document.querySelector('#row4 .quantity').value
	totalVolume4 = hight * width * length * quantity / 1000000
	document.querySelector('#row4 .totalVolume').innerHTML = `${totalVolume4} m3`
}
function calcTotalVolume5(){
	let width = document.querySelector('#row5 .width').value
	let hight = document.querySelector('#row5 .hight').value
	let length = document.querySelector('#row5 .length').value
	let quantity = document.querySelector('#row5 .quantity').value
	totalVolume5 = hight * width * length * quantity / 1000000
	document.querySelector('#row5 .totalVolume').innerHTML = `${totalVolume5} m3`
}
function calcTotalVolume6(){
	let width = document.querySelector('#row6 .width').value
	let hight = document.querySelector('#row6 .hight').value
	let length = document.querySelector('#row6 .length').value
	let quantity = document.querySelector('#row6 .quantity').value
	totalVolume6 = hight * width * length * quantity / 1000000
	document.querySelector('#row6 .totalVolume').innerHTML = `${totalVolume6} m3`
}
function calcTotalVolume7(){
	let width = document.querySelector('#row7 .width').value
	let hight = document.querySelector('#row7 .hight').value
	let length = document.querySelector('#row7 .length').value
	let quantity = document.querySelector('#row7 .quantity').value
	totalVolume7 = hight * width * length * quantity / 1000000
	document.querySelector('#row7 .totalVolume').innerHTML = `${totalVolume7} m3`
}
function calcTotalVolume8(){
	let width = document.querySelector('#row8 .width').value
	let hight = document.querySelector('#row8 .hight').value
	let length = document.querySelector('#row8 .length').value
	let quantity = document.querySelector('#row8 .quantity').value
	totalVolume8 = hight * width * length * quantity / 1000000
	document.querySelector('#row8 .totalVolume').innerHTML = `${totalVolume8} m3`
}
function calcTotalVolume9(){
	let width = document.querySelector('#row9 .width').value
	let hight = document.querySelector('#row9 .hight').value
	let length = document.querySelector('#row9 .length').value
	let quantity = document.querySelector('#row9 .quantity').value
	totalVolume9 = hight * width * length * quantity / 1000000
	document.querySelector('#row9 .totalVolume').innerHTML = `${totalVolume9} m3`
}
function calcTotalVolume10(){
	let width = document.querySelector('#row10 .width').value
	let hight = document.querySelector('#row10 .hight').value
	let length = document.querySelector('#row10 .length').value
	let quantity = document.querySelector('#row10 .quantity').value
	totalVolume10 = hight * width * length * quantity / 1000000
	document.querySelector('#row10 .totalVolume').innerHTML = `${totalVolume10} m3`
}
function calcTotalVolume11(){
	let width = document.querySelector('#row11 .width').value
	let hight = document.querySelector('#row11 .hight').value
	let length = document.querySelector('#row11 .length').value
	let quantity = document.querySelector('#row11 .quantity').value
	totalVolume11 = hight * width * length * quantity / 1000000
	document.querySelector('#row11 .totalVolume').innerHTML = `${totalVolume11} m3`
}
function calcTotalVolume12(){
	let width = document.querySelector('#row12 .width').value
	let hight = document.querySelector('#row12 .hight').value
	let length = document.querySelector('#row12 .length').value
	let quantity = document.querySelector('#row12 .quantity').value
	totalVolume12 = hight * width * length * quantity / 1000000
	document.querySelector('#row12 .totalVolume').innerHTML = `${totalVolume12} m3`
}
function calcTotalVolume13(){
	let width = document.querySelector('#row13 .width').value
	let hight = document.querySelector('#row13 .hight').value
	let length = document.querySelector('#row13 .length').value
	let quantity = document.querySelector('#row13 .quantity').value
	totalVolume13 = hight * width * length * quantity / 1000000
	document.querySelector('#row13 .totalVolume').innerHTML = `${totalVolume13} m3`
}
function calcTotalVolume14(){
	let width = document.querySelector('#row14 .width').value
	let hight = document.querySelector('#row14 .hight').value
	let length = document.querySelector('#row14 .length').value
	let quantity = document.querySelector('#row14 .quantity').value
	totalVolume14 = hight * width * length * quantity / 1000000
	document.querySelector('#row14 .totalVolume').innerHTML = `${totalVolume14} m3`
}
function calcTotalVolume15(){
	let width = document.querySelector('#row15 .width').value
	let hight = document.querySelector('#row15 .hight').value
	let length = document.querySelector('#row15 .length').value
	let quantity = document.querySelector('#row15 .quantity').value
	totalVolume15 = hight * width * length * quantity / 1000000
	document.querySelector('#row15 .totalVolume').innerHTML = `${totalVolume15} m3`
}
function calcTotalVolume16(){
	let width = document.querySelector('#row16 .width').value
	let hight = document.querySelector('#row16 .hight').value
	let length = document.querySelector('#row16 .length').value
	let quantity = document.querySelector('#row16 .quantity').value
	totalVolume16 = hight * width * length * quantity / 1000000
	document.querySelector('#row16 .totalVolume').innerHTML = `${totalVolume16} m3`
}
function calcTotalVolume17(){
	let width = document.querySelector('#row17 .width').value
	let hight = document.querySelector('#row17 .hight').value
	let length = document.querySelector('#row17 .length').value
	let quantity = document.querySelector('#row17 .quantity').value
	totalVolume17 = hight * width * length * quantity / 1000000
	document.querySelector('#row17 .totalVolume').innerHTML = `${totalVolume17} m3`
}
function calcTotalVolume18(){
	let width = document.querySelector('#row18 .width').value
	let hight = document.querySelector('#row18 .hight').value
	let length = document.querySelector('#row18 .length').value
	let quantity = document.querySelector('#row18 .quantity').value
	totalVolume18 = hight * width * length * quantity / 1000000
	document.querySelector('#row18 .totalVolume').innerHTML = `${totalVolume18} m3`
}
function calcTotalVolume19(){
	let width = document.querySelector('#row19 .width').value
	let hight = document.querySelector('#row19 .hight').value
	let length = document.querySelector('#row19 .length').value
	let quantity = document.querySelector('#row19 .quantity').value
	totalVolume19 = hight * width * length * quantity / 1000000
	document.querySelector('#row19 .totalVolume').innerHTML = `${totalVolume19} m3`
}
function calcTotalVolume20(){
	let width = document.querySelector('#row20 .width').value
	let hight = document.querySelector('#row20 .hight').value
	let length = document.querySelector('#row20 .length').value
	let quantity = document.querySelector('#row20 .quantity').value
	totalVolume20 = hight * width * length * quantity / 1000000
	document.querySelector('#row20 .totalVolume').innerHTML = `${totalVolume20} m3`
}

//Lumber line total price calculations ---------------------------------------------------------------------------------------
function calcLineTotal1(){
	let price = document.querySelector('#row1 .price').value
	lineTotal1 = price * totalVolume1
	document.querySelector('#row1 .lineTotal').innerHTML = lineTotal1.toFixed(2)
}
function calcLineTotal2(){
	let price = document.querySelector('#row2 .price').value
	lineTotal2 = price * totalVolume2
	document.querySelector('#row2 .lineTotal').innerHTML = lineTotal2.toFixed(2)
}
function calcLineTotal3(){
	let price = document.querySelector('#row3 .price').value
	lineTotal3 = price * totalVolume3
	document.querySelector('#row3 .lineTotal').innerHTML = lineTotal3.toFixed(2)
}
function calcLineTotal4(){
	let price = document.querySelector('#row4 .price').value
	lineTotal4 = price * totalVolume4
	document.querySelector('#row4 .lineTotal').innerHTML = lineTotal4.toFixed(2)
}
function calcLineTotal5(){
	let price = document.querySelector('#row5 .price').value
	lineTotal5 = price * totalVolume5
	document.querySelector('#row5 .lineTotal').innerHTML = lineTotal5.toFixed(2)
}
function calcLineTotal6(){
	let price = document.querySelector('#row6 .price').value
	lineTotal6 = price * totalVolume6
	document.querySelector('#row6 .lineTotal').innerHTML = lineTotal6.toFixed(2)
}
function calcLineTotal7(){
	let price = document.querySelector('#row7 .price').value
	lineTotal7 = price * totalVolume7
	document.querySelector('#row7 .lineTotal').innerHTML = lineTotal7.toFixed(2)
}
function calcLineTotal8(){
	let price = document.querySelector('#row8 .price').value
	lineTotal8 = price * totalVolume8
	document.querySelector('#row8 .lineTotal').innerHTML = lineTotal8.toFixed(2)
}
function calcLineTotal9(){
	let price = document.querySelector('#row9 .price').value
	lineTotal9 = price * totalVolume9
	document.querySelector('#row9 .lineTotal').innerHTML = lineTotal9.toFixed(2)
}
function calcLineTotal10(){
	let price = document.querySelector('#row10 .price').value
	lineTotal10 = price * totalVolume10
	document.querySelector('#row10 .lineTotal').innerHTML = lineTotal10.toFixed(2)
}
function calcLineTotal11(){
	let price = document.querySelector('#row11 .price').value
	lineTotal11 = price * totalVolume11
	document.querySelector('#row11 .lineTotal').innerHTML = lineTotal11.toFixed(2)
}
function calcLineTotal12(){
	let price = document.querySelector('#row12 .price').value
	lineTotal12 = price * totalVolume12
	document.querySelector('#row12 .lineTotal').innerHTML = lineTotal12.toFixed(2)
}
function calcLineTotal13(){
	let price = document.querySelector('#row13 .price').value
	lineTotal13 = price * totalVolume13
	document.querySelector('#row13 .lineTotal').innerHTML = lineTotal13.toFixed(2)
}
function calcLineTotal14(){
	let price = document.querySelector('#row14 .price').value
	lineTotal14 = price * totalVolume14
	document.querySelector('#row14 .lineTotal').innerHTML = lineTotal14.toFixed(2)
}
function calcLineTotal15(){
	let price = document.querySelector('#row15 .price').value
	lineTotal15 = price * totalVolume15
	document.querySelector('#row15 .lineTotal').innerHTML = lineTotal15.toFixed(2)
}
function calcLineTotal16(){
	let price = document.querySelector('#row16 .price').value
	lineTotal16 = price * totalVolume16
	document.querySelector('#row16 .lineTotal').innerHTML = lineTotal16.toFixed(2)
}
function calcLineTotal17(){
	let price = document.querySelector('#row17 .price').value
	lineTotal17 = price * totalVolume17
	document.querySelector('#row17 .lineTotal').innerHTML = lineTotal17.toFixed(2)
}
function calcLineTotal18(){
	let price = document.querySelector('#row18 .price').value
	lineTotal18 = price * totalVolume18
	document.querySelector('#row18 .lineTotal').innerHTML = lineTotal18.toFixed(2)
}
function calcLineTotal19(){
	let price = document.querySelector('#row19 .price').value
	lineTotal19 = price * totalVolume19
	document.querySelector('#row19 .lineTotal').innerHTML = lineTotal19.toFixed(2)
}
function calcLineTotal20(){
	let price = document.querySelector('#row20 .price').value
	lineTotal20 = price * totalVolume20
	document.querySelector('#row20 .lineTotal').innerHTML = lineTotal20.toFixed(2)
}

//Additional items line total price calculation functions ------------------------------------------------------
function calcLineTotalA1(){
	let price = document.querySelector('#rowA1 .price').value
	lineTotalA1 = price * document.querySelector('#rowA1 .quantity').value
	document.querySelector('#rowA1 .lineTotal').innerHTML = lineTotalA1.toFixed(2)
}
function calcLineTotalA2(){
	let price = document.querySelector('#rowA2 .price').value
	lineTotalA2 = price * document.querySelector('#rowA2 .quantity').value
	document.querySelector('#rowA2 .lineTotal').innerHTML = lineTotalA2.toFixed(2)
}
function calcLineTotalA3(){
	let price = document.querySelector('#rowA3 .price').value
	lineTotalA3 = price * document.querySelector('#rowA3 .quantity').value
	document.querySelector('#rowA3 .lineTotal').innerHTML = lineTotalA3.toFixed(2)
}
function calcLineTotalA4(){
	let price = document.querySelector('#rowA4 .price').value
	lineTotalA4 = price * document.querySelector('#rowA4 .quantity').value
	document.querySelector('#rowA4 .lineTotal').innerHTML = lineTotalA4.toFixed(2)
}
function calcLineTotalA5(){
	let price = document.querySelector('#rowA5 .price').value
	lineTotalA5 = price * document.querySelector('#rowA5 .quantity').value
	document.querySelector('#rowA5 .lineTotal').innerHTML = lineTotalA5.toFixed(2)
}
function calcLineTotalA6(){
	let price = document.querySelector('#rowA6 .price').value
	lineTotalA6 = price * document.querySelector('#rowA6 .quantity').value
	document.querySelector('#rowA6 .lineTotal').innerHTML = lineTotalA6.toFixed(2)
}
function calcLineTotalA7(){
	let price = document.querySelector('#rowA7 .price').value
	lineTotalA7 = price * document.querySelector('#rowA7 .quantity').value
	document.querySelector('#rowA7 .lineTotal').innerHTML = lineTotalA7.toFixed(2)
}
function calcLineTotalA8(){
	let price = document.querySelector('#rowA8 .price').value
	lineTotalA8 = price * document.querySelector('#rowA8 .quantity').value
	document.querySelector('#rowA8 .lineTotal').innerHTML = lineTotalA8.toFixed(2)
}
function calcLineTotalA9(){
	let price = document.querySelector('#rowA9 .price').value
	lineTotalA9 = price * document.querySelector('#rowA9 .quantity').value
	document.querySelector('#rowA9 .lineTotal').innerHTML = lineTotalA9.toFixed(2)
}
function calcLineTotalA10(){
	let price = document.querySelector('#rowA10 .price').value
	lineTotalA10 = price * document.querySelector('#rowA10 .quantity').value
	document.querySelector('#rowA10 .lineTotal').innerHTML = lineTotalA10.toFixed(2)
}


// Function totaling all line totals into total-----------------------------------------------------------------
function calcTotal(){
	total = lineTotal1 +lineTotal2 + lineTotal3 + lineTotal4 + lineTotal5 + lineTotal6 + lineTotal7 + lineTotal8 + lineTotal9 + lineTotal10 + lineTotal11 + lineTotal12 + lineTotal13 + lineTotal14 + lineTotal15 + lineTotal16 + lineTotal17 + lineTotal18 + lineTotal19 + lineTotal20 + lineTotalA1 + lineTotalA2 + lineTotalA3 + lineTotalA4 + lineTotalA5 + lineTotalA6 + lineTotalA7 + lineTotalA8 + lineTotalA9 + lineTotalA10
	document.querySelector('#total').innerHTML = total.toFixed(2)
}

// Function calculating tax and updating total ater tax----------------------------------------------------------
function calcTax(){
	let taxRate = document.querySelector('#taxRate').value
	tax = total * (taxRate * .01)
	totalAfterTax = total + tax
	document.querySelector('#tax').innerHTML = tax.toFixed(2)
	document.querySelector('#totalAfterTax').innerHTML = totalAfterTax.toFixed(2)
}
// function calling all calculation functions triggerd by event listener----------------------------------------------
function calcLumber(){
	calcTotalVolume1()
	calcTotalVolume2()
	calcTotalVolume3()
	calcTotalVolume4()
	calcTotalVolume5()
	calcTotalVolume6()
	calcTotalVolume7()
	calcTotalVolume8()
	calcTotalVolume9()
	calcTotalVolume10()
	calcTotalVolume11()
	calcTotalVolume12()
	calcTotalVolume13()
	calcTotalVolume14()
	calcTotalVolume15()
	calcTotalVolume16()
	calcTotalVolume17()
	calcTotalVolume18()
	calcTotalVolume19()
	calcTotalVolume20()
	calcLineTotal1()
	calcLineTotal2()
	calcLineTotal3()
	calcLineTotal4()
	calcLineTotal5()
	calcLineTotal6()
	calcLineTotal7()
	calcLineTotal8()
	calcLineTotal9()
	calcLineTotal10()
	calcLineTotal11()
	calcLineTotal12()
	calcLineTotal13()
	calcLineTotal14()
	calcLineTotal15()
	calcLineTotal16()
	calcLineTotal17()
	calcLineTotal18()
	calcLineTotal19()
	calcLineTotal20()
	calcLineTotalA1()
	calcLineTotalA2()
	calcLineTotalA3()
	calcLineTotalA4()
	calcLineTotalA5()
	calcLineTotalA6()
	calcLineTotalA7()
	calcLineTotalA8()
	calcLineTotalA9()
	calcLineTotalA10()
	calcTotal()
	calcTax()
}

