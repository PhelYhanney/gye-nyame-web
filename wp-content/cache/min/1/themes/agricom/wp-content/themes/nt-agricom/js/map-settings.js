jQuery(document).ready(function($) {
    'use strict';

    function _g_map() {
        var maps = $('.g_map');
        var mapapi = prefix.apikey;
        if (maps.length > 0) {
            $.getScript('https://maps.google.com/maps/api/js?key=' + mapapi + '', function(data, textStatus, jqxhr) {
                maps.each(function() {
                    var current_map = $(this);
                    var latlng = new google.maps.LatLng(current_map.attr('data-longitude'), current_map.attr('data-latitude'));
                    var point = current_map.attr('data-marker');
                    var myOptions = {
                        zoom: 17,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControl: !1,
                        scrollwheel: !1,
                        draggable: !0,
                        panControl: !1,
                        zoomControl: !1,
                        disableDefaultUI: !0
                    };
                    var stylez = [{
                        featureType: "all",
                        elementType: "all",
                        stylers: [{
                            saturation: -100
                        }]
                    }];
                    var map = new google.maps.Map(current_map[0], myOptions);
                    var mapType = new google.maps.StyledMapType(stylez, {
                        name: "Grayscale"
                    });
                    map.mapTypes.set('Grayscale', mapType);
                    map.setMapTypeId('Grayscale');
                    var marker = new google.maps.Marker({
                        map: map,
                        icon: {
                            size: new google.maps.Size(40, 56),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(20, 56),
                            url: point
                        },
                        position: latlng
                    });
                    google.maps.event.addDomListener(window, "resize", function() {
                        var center = map.getCenter();
                        google.maps.event.trigger(map, "resize");
                        map.setCenter(center)
                    })
                })
            })
        }
    };
    _g_map()
})