// PLACEHOLDER


window.addEventListener("load", function () {

	const formFields = document.querySelectorAll('.form-contacts__field');

	for (const i of formFields) {
		const thisParent = i.closest('.popup-form__line');
		const thisPlaceholder = thisParent.querySelector('.fake-placeholder');

		i.addEventListener('focus', function () {
			thisPlaceholder.classList.add("_active");
		});

		i.addEventListener('blur', function () {

			if (i.value.length > 0) {
				thisPlaceholder.classList.add("_active");
			} else {
				thisPlaceholder.classList.remove("_active");
			}

		});

	}



	// PARALAX 
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const territory = document.querySelector('.images-parallax');

		const forClouds = 20;


		const speed = 0.05;

		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			territory.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});



	}


	var time = 2, cc = 1;
	$(this.window).scroll(function () {
		$('#counter').each(function () {
			var
				cPos = $(this).offset().top
			topWindow = $(window).scrollTop();
			if (cPos < topWindow + 400) {
				if (cc < 2) {
					$('div').each(function () {
						var
							i = 1,
							num = $(this).data('num'),
							step = 1000 * time / num,
							tnat = $(this),
							int = setInterval(function () {
								if (i <= num) {
									tnat.html(i);
								}
								else {
									cc = cc + 2;
									clearInterval(int);
								}
								i++;
							}, step);
					});
				}
			}
		})
	});

	jQuery(document).ready(function ($) {



		// NUMCOUNT 

		//========================================================================================================================================================
		var filterAll = $('.filter-all'),
			boxs = $('.box'),
			length = boxs.length;
		filterAll.text(length);
		var count_box;

		var filter = filter = new RegExp($(":checkbox:checked")
			.map(function () {
				return this.value;
			}).get().join("|"));

		$('input:checkbox').on('load change', function () {



			filter = new RegExp($(":checkbox:checked")
				.map(function () {
					return this.value;
				}).get().join("|"));

			$(".box").each(function () {
				var $this = $(this);

				if (filter.test($this.attr("class"))) {
					// $this.show();
					$this.fadeIn();
				} else {
					// $this.hide();
					$this.fadeOut();
				}
				if (filter.source == "") {
					$this["show"];
				}
			});

			var values = [];
			values[0] = $(".noUi-handle.noUi-handle-lower").attr("aria-valuetext");
			values[1] = $(".noUi-handle.noUi-handle-upper").attr("aria-valuetext");
			range_change(values);

			count_box();
		});

		// Range Slider
		var range = document.getElementById('range'),
			t = [],
			maximum = parseInt(range.attributes.max.value, 10),
			minimum = parseInt(range.attributes.min.value, 10),
			delta = (maximum - minimum) / 4,
			options = {
				min: [minimum],
				max: [maximum]
			};


		t.push(parseInt(range.attributes.min.value, 10)),
			t.push(parseInt(range.attributes.max.value, 10));
		var n = parseInt(range.attributes.max.value, 10);


		noUiSlider.create(
			range,
			{
				range: options,
				start: t,
				connect: !0,
				pips: {
					mode: "range",
					density: 2
				}
			}
		);
		var marginMin = document.getElementById('slider-margin-value-min'),
			marginMax = document.getElementById('slider-margin-value-max');

		range.noUiSlider.on('update', function (values, handle) {
			if (handle) {
				marginMax.innerHTML = values[handle];
			} else {
				marginMin.innerHTML = values[handle];
			}
		});

		$(".noUi-value-horizontal").each(function () {
			var range = $(this).text().split("").slice(0, -6).join("");
			$(this).html(range);
		});

		function range_change(values, handle) {
			$(".box").each(function () {
				var $this = $(this);
				price = $this.data('price');

				var val1 = values[0];
				var val2 = values[1];


				if (price <= val2 && price >= val1 && filter.test($this.attr("class"))) {
					$this.fadeIn();
				} else {
					$this.fadeOut();
				}

			});
		}
		range.noUiSlider.on('change', function (values, handle) {
			range_change(values, handle);
			count_box();
		});

		function count_box() {
			countbox = $('.content').find(".box:visible").length;
			$(".filter-slect").text(countbox);
		}

		// GRAPHIC 
		window.data = [
			{
				label: 'декабрь',
				subLabel: '2020',
				barHeight: 40,
				lineHeight: 20,
				barLabel: '120 000',
				lineLabel: '5%'
			},
			{
				label: 'май',
				subLabel: '2021',
				barHeight: 142,
				lineHeight: 55,
				barLabel: '220 000',
				lineLabel: '10%'
			},
			{
				label: 'декабрь',
				subLabel: '2021',
				barHeight: 160,
				lineHeight: 65,
				barLabel: '225 000',
				lineLabel: '15%'
			},
			{
				label: 'май',
				subLabel: '2022',
				barHeight: 220,
				lineHeight: 45,
				barLabel: '250 000',
				lineLabel: '20%'
			},

			{
				label: 'декабрь',
				subLabel: '2022',
				barHeight: 300,
				lineHeight: 40,
				barLabel: '281 500',
				lineLabel: '25%'
			},

		];

		var floater = (function ($) {

			var data;
			var MARGIN = 40;
			var BAR_WIDTH = 30;
			var graphicHeight = 0;
			var $graphic = $('#graphicContainer .graphic');


			var initGraphic = function (blobb) {
				data = blobb;
				calculateHeight();
				setGraphicHeight();
				createChart();
				if (supportsInlineSVG()) createLine();
			}


			function calculateHeight() {
				// use height of the bigest bar
				$.each(data, function (i, month) {
					if (month.barHeight > graphicHeight) {
						graphicHeight = month.barHeight;
					}
				});

				// add some space at the top for the bar labels
				graphicHeight += 50;
			}


			function setGraphicHeight() {
				$graphic.css('height', graphicHeight + 'px');
			}


			function createChart() {
				var html = '';
				$.each(data, function (i, month) {
					html += '<div class="bar hide" style="left:' + (i * MARGIN) + 'px;height:' + (month.barHeight) + 'px;'
					html += 'width:' + BAR_WIDTH + 'px;' + prefix + 'transition-delay:' + 0.1 * i + 's;">';
					html += '<label class="bar-label">' + month.barLabel + '</label>';
					html += '<label class="line-label" style="bottom:' + (month.lineHeight) + 'px;">' + month.lineLabel + '</label>';
					html += '<label class="label">' + month.label + '</label>';
					if (month.subLabel)
						html += '<label class="sub-label">' + month.subLabel + '</label>';
					html += '</div>';
				});
				$graphic.prepend(html);
				centerLabels();
				setTimeout(function () {
					$('.bar').removeClass('hide');
				})
			}


			function centerLabels() {
				$graphic
					.find('label').each(function (i, el) {
						var $label = $(el);
						$label.css('margin-left', - $label.width() / 2);
					})
					// vertically center line labels
					.filter('.line-label').each(function (i, el) {
						var $label = $(el);
						$label.css('margin-bottom', - $label.height() / 2);
					});
			}


			function createLine() {
				var points = '';

				$.each(data, function (i, month) {
					var x = (i * MARGIN + BAR_WIDTH / 2);
					// var x = (graphicHeight * 2);
					var y = (graphicHeight - month.lineHeight);
					// var y = (graphicHeight + month.lineHeight);
					points += x + ' ' + y + ' ';
					// points += x, y;
				});

				$graphic.find('polyline').attr('points', points);

				setSVGSize();
			}

			function setSVGSize() {
				$graphic.find('svg').css({
					height: graphicHeight + 'px',
					// width: MARGIN * data.length + 'px'
					// width: MARGIN * data.length + 'px'
					width: 100 + '%'
				});
			}


			function supportsInlineSVG() {
				var div = document.createElement('div');
				div.innerHTML = '<svg/>';
				return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
			}

			var prefix = (function () {
				var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
				var style = $('script')[0].style;
				var prefix = '';

				for (var prop in style) {
					if (prefixes.test(prop)) {
						prefix = prop.match(prefixes)[0];
						break;
					}
				}

				if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
				if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

				return '-' + prefix.toLowerCase() + '-';
			})();


			return initGraphic;
		})(jQuery);


		floater(data);

	});


	//========================================================================================================================================================


	jQuery(document).ready(function () {
		jQuery.cachedScript = function (url, options) {
			options = $.extend(options || {}, {
				dataType: "script",
				cache: true,
				url: url,
			});
			return jQuery.ajax(options);
		};
		console.log($(location).attr("href"));

		$(document).one("scroll", function (event) {
			// console.log('bitrix loading...');
			window.setTimeout(function () {
				// $.cachedScript(
				// 	"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A56d0f70f79258ed64802c8a0a4c9ebc507c01e171a58c4b51907b8b177d96ad7&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false"
				// ).done(function (script, textStatus) {
				// 	console.log("bitrix is " + textStatus);
				// 	$('#map').append('<h1>hello</h1>');
				// });
				$('#map').append('<script charset="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A56d0f70f79258ed64802c8a0a4c9ebc507c01e171a58c4b51907b8b177d96ad7&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false"></script>');
				$('.developer__video').find('iframe').attr('src', $('.developer__video').find('iframe').attr('srcset'));
			}, 3000);


		});

	});

	// // POPUP VIDEO 
	let linksPopupVideo = document.querySelectorAll('._popup-link-video');
	let popupVideo = document.querySelector('.popup-video');
	let popupClosesVideo = document.querySelectorAll('.popup__close');
	let popupAreasVideo = document.querySelectorAll('.popup__area');


	linksPopupVideo.forEach(function (linkPopupVideo) {
		linkPopupVideo.addEventListener("click", function (e) {

			document.getElementById('iframe01').setAttribute('src', document.getElementById('iframe01').getAttribute('srcset'));

			// document.getElementById('map01').setAttribute('src', document.getElementById('map01').getAttribute('srcset'));

			popupVideo.classList.add("open");
			if (popupVideo.classList.contains('open')) {
				document.body.style.overflow = 'hidden';
			}

			popupClosesVideo.forEach(function (popupCloseVideo) {
				popupCloseVideo.addEventListener("click", function (e) {
					popupVideo.classList.remove("open");
					document.body.style.overflow = 'visible';
				})
			});
			popupAreasVideo.forEach(function (popupAreaVideo) {
				popupAreaVideo.addEventListener("click", function (e) {
					popupVideo.classList.remove("open");
					document.body.style.overflow = 'visible';

				})
			});
		});
	});



	// POPUP CallBack
	let linksPopupCallback = document.querySelectorAll('._popup-link-callback');
	let popupCallback = document.querySelector('.popup-callback');
	let popupClosesCallback = document.querySelectorAll('.popup-callback .popup__close');
	let popupAreasCallback = document.querySelectorAll('.popup-callback .popup__area');


	linksPopupCallback.forEach(function (linkPopupCallback) {

		linkPopupCallback.addEventListener("click", function (e) {



			popupCallback.classList.add("open");
			if (popupCallback.classList.contains('open')) {
				document.body.style.overflow = 'hidden';
			}



			popupClosesCallback.forEach(function (popupCloseCallback) {
				popupCloseCallback.addEventListener("click", function (e) {
					popupCallback.classList.remove("open");
					document.body.style.overflow = 'visible';

				})
			});

			popupAreasCallback.forEach(function (popupAreaCallback) {
				popupAreaCallback.addEventListener("click", function (e) {
					popupCallback.classList.remove("open");
					document.body.style.overflow = 'visible';

				})

			});

		});
	});


	let linksPopupReliability = document.querySelectorAll('._popup-link-reliability');
	let popupReliability = document.querySelector('.popup-reliability');
	let popupClosesReliability = document.querySelectorAll('.popup-reliability .popup__close');
	let popupAreasReliability = document.querySelectorAll('.popup-reliability .popup__area');


	linksPopupReliability.forEach(function (linkPopupReliability) {

		linkPopupReliability.addEventListener("click", function (e) {


			popupReliability.classList.add("open");
			if (popupReliability.classList.contains('open')) {
				document.body.style.overflow = 'hidden';
			}


			popupClosesReliability.forEach(function (popupCloseReliability) {
				popupCloseReliability.addEventListener("click", function (e) {
					popupReliability.classList.remove("open");
					document.body.style.overflow = 'visible';

				})
			});

			popupAreasReliability.forEach(function (popupAreaReliability) {
				popupAreaReliability.addEventListener("click", function (e) {
					popupReliability.classList.remove("open");
					document.body.style.overflow = 'visible';

				})
			});


		});
	});
	//========================================================================================================================================================
	// imagesLoaded



	//========================================================================================================================================================


	//========================================================================================================================================================
	// 	$(".popup-form").validate({
	// 		rules: {
	// 			email: {
	// 				required: false,
	// 			},

	// 			tel: {
	// 				required: false
	// 			},
	// 			text: {
	// 				required: false
	// 			}
	// 		},

	// 		submitHandler: function (form) {
	// 			ajaxFormSubmit();
	// 		}
	// 	});

	// 	function ajaxFormSubmit() {

	// 		let string = $(".popup-form").serialize(); // Соханяем данные введенные в форму в строку.

	// 		//Формируем ajax запрос
	// 		$.ajax({
	// 			type: "POST", // Тип запроса - POST
	// 			url: "php/mail.php", // Куда отправляем запрос
	// 			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

	// 			// Функция если все прошло успешно
	// 			success: function (html) {
	// 				$(".popup-form").slideUp(800);
	// 				$('#answer').html(html);
	// 			}
	// 		});
	// 		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
	// 		return false;
	// 	}

	// });

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		// slidesPerView: 1,
		// centeredSlides: true,
		spaceBetween: 20,
		autoHeight: false,
		speed: 800,
		simulateTouch: true,
		grabCursor: true,
		touchRatio: 1,
		touchAngle: 45,
		initialSlide: 2,
		loopedSlides: 3,
		// centeredSlides: true,
		centeredSlidesBounds: true,
		watchOverflow: false,

		breakpoints: {
			320: {
				centeredSlides: false,



			},
			576: {
				centeredSlides: true,
				slidesPerView: 'auto',

			},
			768: {
				centeredSlides: true,

				slidesPerView: 'auto',
			}
		},
	});

	function sliderDecoratorUpdateSlidesSize(func) {
		return function () {
			func.apply(this, arguments);

			var min = 0;
			var max = slider.virtualSize - slider.width;
			_.each(slider.snapGrid, function (val, i, list) {
				if (val < min) list[i] = min;
				else if (val > max) list[i] = max;
				else list[i] = Math.round(val);
			});
		};
	}

	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	// imagesLoaded
	var parallaxImages = $('.images-parallax');
	var clouds = $('.fullscreen__clouds');
	console.log(parallaxImages);

	$('.container-loaded').imagesLoaded()
		.always(function (instance) {
		})
		.done(function (instance) {
			console.log('all images successfully loaded');
			parallaxImages.addClass('loaded');
			clouds.addClass('loaded');
		})
		.fail(function () {
		})
		.progress(function (instance, image) {

		});

});