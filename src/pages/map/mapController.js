import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import { useState, useEffect, useRef } from "react";
import Story from "../../models/story";

const useMapController = () => {
  const [index, setIndex] = useState(0);
  const mapContainer = useRef("");
  const map = useRef(null);
  const didMount = useRef(false);

  let event = Story.events[index];

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: event.coordinates,
      zoom: 9,
    });
    didMount.current = true;

    return () => map.current.remove();
  }, []);

  useEffect(() => {
    event = Story.events[index];
    if (didMount.current) fly();
  }, [index]);

  function previous() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function next() {
    if (index < Story.events.length - 1) {
      setIndex(index + 1);
    }
  }

  function centre() {
    map.current.flyTo({ center: event.coordinates });
  }

  function fly() {
    map.current.flyTo({
      // These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: event.coordinates,
      zoom: 9,
      bearing: 10,

      // These options control the flight curve, making it move
      // slowly and zoom out almost completely before starting
      // to pan.
      speed: 1.8, // make the flying slow
      curve: 1, // change the speed at which it zooms out

      // This can be any easing function: it takes a number between
      // 0 and 1 and returns another number between 0 and 1.
      easing: function (t) {
        return t;
      },

      // this animation is considered essential with respect to prefers-reduced-motion
      essential: true,
    });
  }

  return [mapContainer, previous, next, centre];
};

export default useMapController;
