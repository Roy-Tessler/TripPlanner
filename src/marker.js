const mapboxgl = require("mapbox-gl");

function theMarker(typeOfMarker, coor) {
  const marker = document.createElement("div");
  if (typeOfMarker === "Restaurant") {
    marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  } else if (typeOfMarker === "Hotel") {
    marker.style.backgroundImage = "url( http://i.imgur.com/D9574Cu.png)";
  } else {
    marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  marker.style.width = "25px";
  marker.style.height = "25px";

  return new mapboxgl.Marker(marker).setLngLat(coor);
}

module.exports = theMarker;
