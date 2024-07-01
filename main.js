document.addEventListener("DOMContentLoaded", () => {





  new Mmenu("#menu", {
    theme: "white",
    slidingSubmenus: false,
    navbars: {
      content: [
        "prev",
        "<img class=\"navbar__logo--burger\" src=\"./img/logo.svg\" alt=\"logo\">",
        "<div class=\"contacts__phone--burger\">\n" +
        "<img class=\"contacts__phone__image\" src=\"./img/phone.svg\" alt=\"location\">\n" +
        "<p class=\"contacts__phone__text\">+7 (800) 941-34-28</p>\n" +
        "</div>",
        "close",
      ]
    },
    setSelected: {
      hover: true
    },
    offCanvas: {
      position: "left-front"
    }
  }, {});
  document.querySelectorAll('#menu')[0].childNodes[3].remove()

  document.querySelector(".own-carousel__container").ownCarousel({
    itemPerRow: 1,
    itemWidth: 100,
    nav: true,
    draggable: false,
    responsive: {
      1440: [1, 100],
      768: [1, 100],
      600: [1, 100],
      400: [1, 100],
    },
  });
  responsive();


  document.querySelector(".own-carousel__container2").ownCarousel({
    itemPerRow: 4,
    itemWidth: 24,
    nav: true,
    draggable: true,
    responsive: {
      1440: [4, 24],
      1200: [2, 40],
      320: [1, 100],
    },
  });
  responsive();

  if (window.innerWidth <= 1000 && window.innerWidth >=675) {
    document.querySelector(".own-carousel__container2").ownCarousel({
      itemPerRow: 2,
      itemWidth: 48,
      draggable: true,
    });
  }

  if (window.innerWidth <= 674 && window.innerWidth >=0) {
    document.querySelector(".own-carousel__container2").ownCarousel({
      itemPerRow: 1,
      itemWidth: 100,
      draggable: true,
    });
  }

});



function validateForm() {
  let phone = document.getElementById('phone');
  let name = document.getElementById('name');
  let checkValidPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.value)

  if (!checkValidPhone) phone.classList.add('error')
  else phone.classList.remove('error')

  if (!name.value.length) name.classList.add('error');
  else name.classList.remove('error')
  return Boolean(checkValidPhone && name.value.length)
}

// phpmail
// async function submitFoo(e) {
//   e.preventDefault();
//   let phone = document.getElementById('phone').value;
//   let name = document.getElementById('name').value;
//   try {
//     // Формируем запрос
//     const response = await fetch(e.target.action, {
//       method: 'POST',
//       body: new FormData(e.target)
//     }).then((resp) => {
//       return resp
//     });
//     // проверяем, что ответ есть
//     if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
//     // проверяем, что ответ действительно JSON
//     const contentType = response.headers.get('content-type');
//     console.log(response)
//     if (!contentType || !contentType.includes('application/json')) {
//       throw ('Ошибка обработки. Ответ не JSON');
//     }
//     // обрабатываем запрос
//     const json = await response.json();
//     if (json.result === "success") {
//       // в случае успеха
//       alert(json.info);
//     } else {
//       // в случае ошибки
//       console.log(json);
//       throw (json.info);
//     }
//   } catch (error) { // обработка ошибки
//     alert(error);
//   }
//   return false;
// }


