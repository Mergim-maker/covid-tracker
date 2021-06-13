    var mymap = L.map('harta').setView(config[0][0], 9);
    var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    });
    layer.addTo(mymap);
    config.forEach((element, index) => {

        var circle = L.circle(element[0], {
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 1,
            radius: element[2] * 10
        }).bindPopup('numri i rasteve te covidit eshte ' + element[2]);

        circle.addTo(mymap);
    });


