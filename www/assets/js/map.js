document.addEventListener("DOMContentLoaded", () => {
    // Yandex карта page contacts

    if ($('#contacts-map').length) {
        ymaps.ready(function () {
           
            let coords = document.querySelector("#contacts-map").dataset.coord.split(',')

            let contactMap = new ymaps.Map("contacts-map", {
                center: [coords[0], coords[1]],
                zoom: 15,
                controls: [],
            });

            let latitude = coords[0];
            let longitude = coords[1];
    
            // Добавление метки
            var myPlacemark = new ymaps.Placemark(
                [55.727891, 37.449650],
                {},
                {
                    preset: 'islands#redIcon'
                }
            );
    
            // После того как метка была создана, добавляем её на карту.
            contactMap.geoObjects.add(myPlacemark);
            contactMap
                .setBounds(contactMap.geoObjects.getBounds(), {checkZoomRange: true})
                .then(function () {
                    if (contactMap.getZoom() > 15) contactMap.setZoom(15);
                });
            ymapsTouchScroll(contactMap);
            
        });
    }
})

