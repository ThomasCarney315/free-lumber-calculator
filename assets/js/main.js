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
let lineTotalA1
let lineTotalA2
let lineTotalA3
let lineTotalA4
let lineTotalA5
let lineTotalA6
let lineTotalA7

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


// Function totaling all line totals into total-----------------------------------------------------------------
function calcTotal(){
	total = lineTotal1 +lineTotal2 + lineTotal3 + lineTotal4 + lineTotal5 + lineTotal6 + lineTotal7 + lineTotal8 + lineTotal9 + lineTotal10 + lineTotalA1 + lineTotalA2 + lineTotalA3 + lineTotalA4 + lineTotalA5 + lineTotalA6 + lineTotalA7
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
	calcLineTotalA1()
	calcLineTotalA2()
	calcLineTotalA3()
	calcLineTotalA4()
	calcLineTotalA5()
	calcLineTotalA6()
	calcLineTotalA7()
	calcTotal()
	calcTax()
}

