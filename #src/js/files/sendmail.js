
// Заказ обратного звонка ЖК «Sun Hills Olginka»
$(".form-callback").validate({

	submitHandler: function (form) {
		ajaxFormCallBackSubmit();
	}
});

//*************************************************** */

function ajaxFormCallBackSubmit() {

	let string = $(".form-callback").serialize();


	$.ajax({
		type: "POST",
		url: "php/mail.php",
		data: string,


		success: function (html) {
			$(".form-callback").slideUp(800);
			$('.answer-callback').html(html);
		}
	});

	return false;
}

// Заказ обратного звонка 2 ЖК «Sun Hills Olginka»
$(".form-callback-two").validate({

	submitHandler: function (form) {
		ajaxFormCallBackTwoSubmit();
	}
});

//*************************************************** */

function ajaxFormCallBackTwoSubmit() {

	let string = $(".form-callback-two").serialize();


	$.ajax({
		type: "POST",
		url: "php/mail.php",
		data: string,


		success: function (html) {
			$(".form-callback-two").slideUp(800);
			$('.answer-callback-two').html(html);
		}
	});

	return false;
}

//========================================================================================================================================================
// Заказ презинтации ЖК «Sun Hills Olginka»

$(".form-presentation").validate({

	submitHandler: function (form) {
		ajaxFormPresentationSubmit();
	}
});

//*************************************************** */

function ajaxFormPresentationSubmit() {

	let string = $(this).serialize();


	$.ajax({
		type: "POST",
		url: "php/mail.php",
		data: string,


		success: function (html) {
			$(".form-presentation").slideUp(800);
			$('.answer-presentation').html(html);
		}
	});

	return false;
}

//========================================================================================================================================================
// Получить инвестиционный прогноз ЖК «Sun Hills Olginka»
$(".form-forecast").validate({

	submitHandler: function (form) {
		ajaxFormForecastSubmit();
	}
});

//*************************************************** */


function ajaxFormForecastSubmit() {

	let string = $(".form-forecast").serialize();


	$.ajax({
		type: "POST",
		url: "php/mail.php",
		data: string,


		success: function (html) {
			$(".form-forecast").slideUp(800);
			$('.answer-forecast').html(html);
		}
	});

	return false;
}
// Есть вопросы по ЖК «Sun Hills Olginka»
$(".form-question").validate({

	submitHandler: function (form) {
		ajaxFormQuestionSubmit();


	}
});

//*************************************************** */


function ajaxFormQuestionSubmit() {

	let string = $(".form-question").serialize();


	$.ajax({
		type: "POST",
		url: "php/mail.php",
		data: string,


		success: function (html) {
			$(".form-question").slideUp(800);
			$('.answer-question').html(html);
		}
	});

	return false;
}
