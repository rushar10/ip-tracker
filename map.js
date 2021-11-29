const ACCESS_TOKEN =
  "pk.eyJ1IjoicnVzaGFyIiwiYSI6ImNrdzF0cjhyMTFwZjUyb3BhMjUzeXRoYXcifQ.HQn-3J5iU5W9f77WjqDg6A";
const BASE_URL = "https://api.mapbox.com/";
const latlang = {
  x: 51.505,
  y: -0.09,
};

let defaultZoom = 13;

const map = L.map("map", {
  center: [latlang.x, latlang.y],
  zoom: defaultZoom,
});

let iconOptions = {
  iconUrl: "./images/icon-location.svg",
  iconSize: [35],
};
customIcon = L.icon(iconOptions);
const markerOptions = {
  title: "I am a marker",
  clickable: true,
  draggable: true,
  icon: customIcon,
};

async function loadMap() {
  L.tileLayer(
    `${BASE_URL}styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`,
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: ACCESS_TOKEN,
    }
  ).addTo(map);

  let marker = L.marker([latlang.x, latlang.y], markerOptions).addTo(map);
}

loadMap();
