// --------- swiper services

document.addEventListener("DOMContentLoaded", function() {
	const swiper = new Swiper('.services__slider', {

		pagination: {
			el: ".services-pagination",
		 },
		 grid: {
			rows: 2,
			fill: 'row'
		 },
			//Включение/отключение
			//Перетаскивание на ПК
			simulateTouch: true,
			//Чувствительность свайпа (0 - отключает перетаскивание)
			touchRatio: 2,
			//Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			//Курсор перетаскивания
			grabCursor: true,
			//Переключение при клике на слайд
			slideToClickedSlide: true,
			//Управление клавиатурой
			keyboard: {
				//включить/выключить
				enabled: true,
				//включить/выключить
				//только когда слайдер
				//в пределах вьюпорта
				onlyInViewport: true,
				//включить/выключить
				//управление клавишами
				//pageUp, pageDown
				pageUpDown: true,
			},
			//Управление колесом мышы
			mousewheel: {
				//Чувствительность колеса мыши
				sensitivity: 1,
				//Класс обьекта на котором
				//будет срабатывать прокрутка мышью
				// eventsTarget: ".contrasts__swiper" //МОгут перелистываться и другие слайты одновременно
			},
			//Автовысота слайдеров
			// autoHeight: true,
			//количество слайдов для показа
			slidesPerView: 2,
			//Отключение функционала
			//если слайдов меньше чем нужно
			watchOverflow: true,
			//Отступы между слайдами
			spaceBetween: 0,

			//Количество пролистываемых слайдов
			slidePerGroup: 1,

			//Активный слайд по центру
			centeredSlides: false,

			//бесконечное перелистывание слайдов
			loop: false,

			//Обновить свойпер при изменении элементов слайдера
			observe: true,
			//Обновить свойпер при изменении родительских элементов слайдера
			observeParents: true,
			//Обновить свойпер при изменении дочерных элементов слайдера
			observeSlideChildren: true,
			//Брейк поинты (адаптив)
			breakpoints: {
				320: {
					grid: {
						rows: 1
					 },
					slidesPerView:1,
				},
				768: {
					grid: {
						rows: 1
					 },
					slidesPerView:2,
				},
				1150.98: {
					grid: {
						rows: 6
					 },
					slidesPerView:2,
				}
			},
	}
	);
 });

// --------- swiper house
document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.house-slider', {

	  navigation: {
		 nextEl: '.house-button-next',
		 prevEl: '.house-button-prev',
	  },
			//Включение/отключение
			//Перетаскивание на ПК
			simulateTouch: true,
			//Чувствительность свайпа (0 - отключает перетаскивание)
			touchRatio: 2,
			//Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			//Курсор перетаскивания
			grabCursor: true,
			//Переключение при клике на слайд
			slideToClickedSlide: true,
			//Управление клавиатурой
			keyboard: {
				//включить/выключить
				enabled: true,
				//включить/выключить
				//только когда слайдер
				//в пределах вьюпорта
				onlyInViewport: true,
				//включить/выключить
				//управление клавишами
				//pageUp, pageDown
				pageUpDown: true,
			},
			//Управление колесом мышы
			mousewheel: {
				//Чувствительность колеса мыши
				sensitivity: 1,
				//Класс обьекта на котором
				//будет срабатывать прокрутка мышью
				// eventsTarget: ".contrasts__swiper" //МОгут перелистываться и другие слайты одновременно
			},
			//Автовысота слайдеров
			autoHeight: true,
			//количество слайдов для показа
			slidesPerView: 3,
			//Отключение функционала
			//если слайдов меньше чем нужно
			watchOverflow: true,
			//Отступы между слайдами
			spaceBetween: 19,

			//Количество пролистываемых слайдов
			slidePerGroup: 1,

			//Активный слайд по центру
			centeredSlides: false,

			//бесконечное перелистывание слайдов
			loop: false,

			//Обновить свойпер при изменении элементов слайдера
			observe: true,
			//Обновить свойпер при изменении родительских элементов слайдера
			observeParents: true,
			//Обновить свойпер при изменении дочерных элементов слайдера
			observeSlideChildren: true,



			//Брейк поинты (адаптив)
			breakpoints: {

				320: {
					slidesPerView:1,
					spaceBetween:0,
				},
				768: {
					slidesPerView:2,
					// spaceBetween:30,
				},
				992: {
					slidesPerView:3,
				}

			},

	}
	);


 });

//  ----------------для формы
function forms() {
	// Функция, которая убирает placeholder при фокусе на input
	function dataValue() {
	  // Выбираем все input с атрибутом data-value
	  const inputs = document.querySelectorAll('input[data-value]');

	  inputs.forEach(input => {
		 // Удаление placeholder при фокусировке
		 input.addEventListener('focus', function() {
			this.placeholder = '';
		 });

		 // Восстановление placeholder, если поле пустое
		 input.addEventListener('blur', function() {
			if (this.value === '') {
			  // Восстанавливаем placeholder из атрибута data-value
			  this.placeholder = this.getAttribute('data-value');
			}
		 });
	  });
	}

 // ИМЯ — только буквы
document.querySelector('input[name="name"]').addEventListener('input', function () {
  this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
});

// ТЕЛЕФОН — только цифры
document.querySelector('input[name="fone"]').addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});


	// Вызов функции внутри forms()
	dataValue();
 }





 // Экспорт функции (для использования в других модулях)
 document.addEventListener('DOMContentLoaded', () => {
	forms();
 });


document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("houses-container");

  if (!container) return;

  try {
    const response = await fetch("/api/get-houses");
    const houses = await response.json();

    houses.forEach(house => {
      const slide = document.createElement("div");
      slide.className = "house-slider__slide swiper-slide";

      slide.innerHTML = `
        <a href="#form" class="house__inner--link inner-house">
          <div class="inner-house__img">
            <img src="${house.image_url}" alt="image">
            <span>${house.badge || ''}</span>
          </div>
          <div class="inner-house__label label-house">
            <div class="label-house__prise">
              <p class="prise__ru">${house.price} <span class="prise__kv">${house.area}</span></p>
              <h4 class="label-house__title"><p>${house.title}</p></h4>
              <div class="label-house__adress">
                <p>${house.address}</p>
              </div>
            </div>
          </div>
        </a>
      `;

      container.appendChild(slide);
    });

    // ОБНОВЛЯЕМ SWIPER
    if (typeof Swiper !== "undefined") {
      new Swiper(".house-slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
      });
    }

  } catch (error) {
    console.error("Ошибка загрузки домов:", error);
  }
});
