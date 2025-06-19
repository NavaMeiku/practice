document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById("toggleButton");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const logoLink = document.getElementById("logoLink");


  function openSidebar() {
    sidebar.classList.remove("collapsed");
    content.classList.remove("collapsed");
    toggleButton.classList.add("hidden");
  }

  function closeSidebar() {
    sidebar.classList.add("collapsed");
    content.classList.add("collapsed");
    toggleButton.classList.remove("hidden");
  }


  closeSidebar();


  toggleButton.addEventListener("click", openSidebar);

  logoLink.addEventListener("click", function (event) {
    event.preventDefault();
    closeSidebar();
  });
});



ymaps.ready(init);

function init() {
  var myLat = 54.890529;
  var myLng = 38.067706;
  var myMap = new ymaps.Map('map', {
    center: [myLat, myLng],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.Placemark([myLat, myLng], {
    balloonContent: '<strong>АО "Мособлгаз" "Юг"</strong><br>г. Ступино, ул. Горького, д.18<br>Контактная информация:<br>Электронная почта: shop@mosoblgaz.ru<br>Горячая линия: +7 495 122 40 04'
  }, {
    preset: 'islands#redIcon'
  });
  myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init1);

function init1() {
  var myLat2 = 55.424761;
  var myLng2 = 37.530436;
  var myMap2 = new ymaps.Map('map2', {
    center: [myLat2, myLng2],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark2 = new ymaps.Placemark([myLat2, myLng2], {
    balloonContent: '<strong>АО "Мособлгаз" "Юг"</strong><br>г. Подольск, ул. Кирова, д.31А<br>Контактная информация:<br>Электронная почта: shop@mosoblgaz.ru<br>Горячая линия: +7 495 122 40 04'
  }, {
    preset: 'islands#redIcon'
  });
  myMap2.geoObjects.add(myPlacemark2);
}