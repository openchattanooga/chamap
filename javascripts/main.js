var ChaMap = function (map) {
    this.map = map;

}
ChaMap.prototype.WatchMapPosition = function () {
    if (navigator.geolocation)
    {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge:10
        }
        this.currentPosition = navigator.geolocation.getCurrentPosition(function (location) {
            this.map.addSource("location", {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [location.coords.longitude, location.coords.latitude]
                        },
                        "properties": {
                            "title": "current-location",
                            "marker-symbol": "star"
                        }
                    }]
                }
            });

            this.map.addLayer({
                "id": "location",
                "type": "symbol",
                "source": "location",
                "layout": {
                    "icon-image": "{marker-symbol}-15",
                    "icon-size": 1,
                    "text-field": "",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                }
            });
        });

        
        this.watchId = navigator.geolocation.watchPosition(success,error);
        
    }
    function success(pos) {
        this.map.removeLayer("location");
        this.map.removeSource("location");

        this.map.addSource("location", {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [pos.coords.longitude, pos.coords.latitude]
                    },
                    "properties": {
                        "title": "current-location",
                        "marker-symbol": "star"
                    }
                }]
            }
        });

        this.map.addLayer({
            "id": "location",
            "type": "symbol",
            "source": "location",
            "layout": {
                "icon-image": "{marker-symbol}-15",
                "icon-size": 1,
                "text-field": "",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            }
        });
  
        
    }
    function error(error) {
        console.log(error);
    }
}



