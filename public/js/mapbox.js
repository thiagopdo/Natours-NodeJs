/* eslint-disable*/


export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGhpYWdvZmFsY29uZXIiLCJhIjoiY2w2cjM3aGwzMDd3MzNjcDgzOG9hYmFzcCJ9.Alk2zvbbtn8yEwly0Z2nMg';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/thiagofalconer/cl6s6txnq000x15p66aay9ep2', // style URL
    center: [-118.113491, 34.111745], // starting position [lng, lat]
    scrollZoom: false
    // zoom: 9, // starting zoom
    // //projection: 'globe' // display the map as a 3D globe
    // //interactive: false
  });
  // map.on('style.load', () =&rbrace; {
  //     map.setFog({}); // Set the default atmosphere style
  // });
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //create market
    const el = document.createElement('div');
    el.className = 'marker';

    //add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //extend map bounds to include current localtion
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });

}

