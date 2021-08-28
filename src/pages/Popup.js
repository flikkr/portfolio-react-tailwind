import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";

function createPopUp(event) {
  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(event.coordinates)
    .setHTML(`<h3>${event.title}</h3>`)
    .addTo(map);
}
