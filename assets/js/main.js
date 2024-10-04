//header burger
const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.menu');
const linkMobile = document.querySelectorAll('.menu_list-item');
const body = document.body;
const open = function () {
    headerBurger.isClick = true
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active_menu');
    body.classList.toggle("noscroll");
    body.classList.toggle("bg");
}
headerBurger.addEventListener("click", function (e) {
	e.stopPropagation();
	open();
});
linkMobile.forEach((link) => {
	link.addEventListener("click", closeOnClick);
});

document.addEventListener("click", function (e) {
	const target = e.target;
	const its_menu = target == headerMenu || headerMenu.contains(target);
	const its_btnMenu = target == headerBurger;
	const menu_is_active = headerMenu.classList.contains("active");

	if (!its_menu && !its_btnMenu && menu_is_active) {
		open();
	}
});
function closeOnClick() {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active_menu');
    body.classList.remove("noscroll");
    body.classList.remove("bg");
}

//sliders
const swiperMain = new Swiper('.main__wrapper-swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: '.main-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.main-next',
    prevEl: '.main-prev',
  },
});
const swiperPurchase = new Swiper('.purchase__wrapper-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    pagination: {
      el: '.purchase-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.purchase-next',
      prevEl: '.purchase-prev',
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
      }
  });

  const swiperQuality = new Swiper('.quality__slider-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.quality-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.quality-next',
      prevEl: '.quality-prev',
    },
    breakpoints: {
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1115: {
          slidesPerView: 4,
        },
        700: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
      }
  });

  document.querySelectorAll('.swiper-tabs').forEach(el => {
    let swiper = new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: el.querySelector('.tabs-pagination'),
      clickable: true
    },
     navigation: {
        nextEl: el.querySelector('.tabs-next'),
        prevEl: el.querySelector('.tabs-prev')
     },
     breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1115: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2,
      }
    }
});
});

const worksSwiper = new Swiper('.works-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: '.works-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.works-next',
    prevEl: '.works-prev',
  },
  breakpoints: {
      1280: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
    }
});

// Показать еще
const showMore = document.querySelector('.btn-download');
const cards = document.querySelectorAll('.glass__container-card').length;
let items = 8;

  showMore.addEventListener('click', () => {
    items += 8; // сколько карточек открывается
    const array = Array.from(document.querySelector('.glass__container').children);
    const visItems = array.slice(0 , items);
    visItems.forEach(el => el.classList.add('is-visible'));
      
    if(visItems.length === cards) {
      showMore.style.display = 'none';
    }
});

let content = Array.from(document.querySelectorAll(".reviews__wrapper"));
content.forEach(function(el){
    let button = el.querySelector(".reviews_btn");
    button.addEventListener("click", function () {
        el.classList.toggle("open");
        button.classList.add('none');
    }, false)
});



function getLastVisibleDiv() {
    return Array.from(document.querySelectorAll('.glass__container-card'))
                .reverse()
                .find(div => div.offsetParent !== null);
}
function getLastVisibleDivReviews() {
  return Array.from(document.querySelectorAll('.reviews__wrapper-photo'))
              .reverse()
              .find(div => div.offsetParent !== null);
}
let lastVisibleElement = getLastVisibleDiv();
let lastVisibleElementReviews = getLastVisibleDivReviews();

//accordion
const accordions = document.querySelectorAll(".accordion");

if(accordions) {
    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
    };
    
    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.remove("open");
        content.style.maxHeight = null;
    };
    
    accordions.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion__control");
        const content = accordion.querySelector(".accordion__content");
    
        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        };
    });
}

//hover на карточки изменение высоты
const box = document.querySelector('.proposal__container');
const boxInner = box.querySelectorAll('.proposal__container-card');

boxInner.forEach((item) => {
  const content = item.querySelector('.proposal__container-card_btn');

  const height = content.scrollHeight;

  item.addEventListener('mouseover', () => {
    content.style.height = height + 'px';
  })

  item.addEventListener('mouseout', () => {
    content.style.height = 0 + 'px';
  })
})


//Вызов табов
const tab = new GraphTabs('tab', {});
const tabTwo = new GraphTabs('tabTwo', {});
//Маска телефона
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.slice(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});



//до после
class BeforeAfter {
  constructor(enteryObject) {

      const beforeAfterContainer = document.querySelector(enteryObject.id);
      const before = beforeAfterContainer.querySelector('.bal-before');
      const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
      const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
      const handle = beforeAfterContainer.querySelector('.bal-handle');
      var widthChange = 0;

      beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
      window.onresize = function () {
          beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
      }
      before.setAttribute('style', "width: 50%;");
      handle.setAttribute('style', "left: 50%;");

      //touch screen event listener
      beforeAfterContainer.addEventListener("touchstart", (e) => {

          beforeAfterContainer.addEventListener("touchmove", (e2) => {
              let containerWidth = beforeAfterContainer.offsetWidth;
              let currentPoint = e2.changedTouches[0].clientX;

              let startOfDiv = beforeAfterContainer.offsetLeft;

              let modifiedCurrentPoint = currentPoint - startOfDiv;

              if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10) {
                  let newWidth = modifiedCurrentPoint * 100 / containerWidth;

                  before.setAttribute('style', "width:" + newWidth + "%;");
                  afterText.setAttribute('style', "z-index: 1;");
                  handle.setAttribute('style', "left:" + newWidth + "%;");
              }
          });
      });

      //mouse move event listener
      beforeAfterContainer.addEventListener('mousemove', (e) => {
          let containerWidth = beforeAfterContainer.offsetWidth;
          widthChange = e.offsetX;
          let newWidth = widthChange * 100 / containerWidth;

          if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
              before.setAttribute('style', "width:" + newWidth + "%;");
              afterText.setAttribute('style', "z-index:" + "1;");
              handle.setAttribute('style', "left:" + newWidth + "%;");
          }
      })

  }
}

function run() {
  document.querySelectorAll('.bal-container').forEach(el => {
    new BeforeAfter({
      id: `#${el.id}`
    })
  })
}
run();

//активный класс кнопкам карты
const consultationButtons = document.querySelector('.consultation__wrapper-left_buttons');
const consultationItem = consultationButtons.querySelectorAll(".consultation__wrapper-left_buttons-item");

for (var i = 0; i < consultationItem.length; i++) {
    consultationItem[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-btn");
      current[0].className = current[0].className.replace(" active-btn", "");
      this.className += " active-btn";
    });
}

//popup

const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});


//Плавный скролл 
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

        if(iconMenu.classList.contains('active_menu')) {
            document.body.classList.remove('lock')
            iconMenu.classList.remove('active_menu')
            menu.classList.remove('active')
        }
    })
}