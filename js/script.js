// --------- swiper services
document.addEventListener("DOMContentLoaded", function () {
  const swiperServices = new Swiper(".services__slider", {
    pagination: {
      el: ".services-pagination",
    },
    grid: {
      rows: 2,
      fill: "row",
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    mousewheel: {
      sensitivity: 1,
    },

    slidesPerView: 2,
    watchOverflow: true,
    spaceBetween: 0,
    slidePerGroup: 1,
    centeredSlides: false,
    loop: false,

    observe: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      320: {
        grid: { rows: 1 },
        slidesPerView: 1,
      },
      768: {
        grid: { rows: 1 },
        slidesPerView: 2,
      },
      1150: {
        grid: { rows: 6 },
        slidesPerView: 2,
      },
    },
  });
});


// --------- swiper house + загрузка из БД
document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("houses-container");

  if (!container) return;

  try {
    const response = await fetch("/api/get-houses");
    const houses = await response.json();

    houses.forEach((house) => {
      const slide = document.createElement("div");
      slide.className = "house-slider__slide swiper-slide";

      slide.innerHTML = `
        <a href="#form" class="house__inner--link inner-house">
          <div class="inner-house__img">
            <img src="${house.image_url}" alt="image">
            <span>${house.badge || ""}</span>
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

    // Инициализация слайдера ПОСЛЕ загрузки данных
    const swiperHouse = new Swiper(".house-slider", {
      simulateTouch: true,
      touchRatio: 2,
      touchAngle: 45,
      grabCursor: true,
      slideToClickedSlide: true,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      mousewheel: {
        sensitivity: 1,
      },

      autoHeight: true,
      slidesPerView: 3,
      watchOverflow: true,
      spaceBetween: 19,
      slidePerGroup: 1,
      centeredSlides: false,
      loop: false,

      observe: true,
      observeParents: true,
      observeSlideChildren: true,

navigation: {
  nextEl: ".house-button-next",
  prevEl: ".house-button-prev",
},

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });

  } catch (error) {
    console.error("Ошибка загрузки домов:", error);
  }
});


// --------- форма
function forms() {
  function dataValue() {
    const inputs = document.querySelectorAll("input[data-value]");

    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.placeholder = "";
      });

      input.addEventListener("blur", function () {
        if (this.value === "") {
          this.placeholder = this.getAttribute("data-value");
        }
      });
    });
  }

  // ИМЯ — только буквы
  const nameInput = document.querySelector('input[name="name"]');
  if (nameInput) {
    nameInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "");
    });
  }

  // ТЕЛЕФОН — только цифры
  const phoneInput = document.querySelector('input[name="fone"]');
  if (phoneInput) {
    phoneInput.
      addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  }

  dataValue();
}

document.addEventListener("DOMContentLoaded", () => {
  forms();
});
