
class MapConfig {
  get config() {
    return new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: story.events[0].coordinates,
      zoom: 9,
    });
  }
}
