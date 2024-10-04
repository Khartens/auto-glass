const categoriesData = {
  category1: [{
      lat: 53.442131071027305,
      lon: 58.99983849999995,
      name: 'Северный переход, 20а1',
      caption: 'Северный переход, 20а',
    },
  ],
  category2: [{
      lat: 53.426321310730245,
      lon: 58.9609671588954,
      name: 'ул. Советская, 20а',
      caption: 'ул. Советская, 20а'
    },
  ],
  category3: [{
      lat: 53.35935432593927,
      lon: 59.007853228836,
      name: 'ул. Коробова, 20',
      caption: 'ул. Коробова, 20'
    },
  ],
};

const init = () => {
  const map = new ymaps.Map('YMapsID-1', {
    center: [53.442131071027305,58.99983849999995],
    zoom: 14,
  });

  let activeCategory = "category1";

  const showCategory = (category) => {
    map.geoObjects.removeAll();

    categoriesData[category].forEach((item) => {
      const placemark = new ymaps.Placemark([item.lat, item.lon], {
        iconColor: '#1d79d3',
        hintContent: item.name,
        balloonContent: item.name,
        iconCaption: item.caption,
      });
      
      map.geoObjects.add(placemark);
    });

    activeCategory = category;
  }

  const categoryButtons = document.querySelectorAll('.category-button');
  categoryButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category;
      showCategory(category);
    });
  });
  const mapBtnOne = document.querySelector('.map-btn-1');
  mapBtnOne.addEventListener('click', () => {
    map.setCenter([53.442131071027305, 58.99983849999995], 14);
  });
  const mapBtntwo = document.querySelector('.map-btn-2');
  mapBtntwo.addEventListener('click', () => {
    map.setCenter([53.426321310730245, 58.9609671588954], 14);
  });
  const mapBtnFree = document.querySelector('.map-btn-3');
  mapBtnFree.addEventListener('click', () => {
    map.setCenter([53.35935432593927, 59.007853228836], 14);
  });
  showCategory(activeCategory);
};

ymaps.ready(init);