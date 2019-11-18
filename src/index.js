const mapboxgl = require("mapbox-gl");
const newMarker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoibWtqdWFuIiwiYSI6ImNrMzRvMWFnNDE0cmMzY21vNnM4bHpzZWIifQ.718Pxf5J13-4M6_F49joWQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerTwo = newMarker("Restaurant", [-74.0018572, 40.7320465]);
markerTwo.addTo(map);

const markerOne = newMarker("Hotel", [-74.0040257, 40.70757]);
markerOne.addTo(map);

const markerThree = newMarker("Activity", [-74.0054142, 40.7133031]);
markerThree.addTo(map);
