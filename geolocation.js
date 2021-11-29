const API_KEY = "at_KVoDFS63XeWuXreEzAjM8F4wncmHC";
async function getGeoData(inputIP, details, latlang) {
  loader.style.zIndex = 999;
  const getData = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${inputIP}`,
    { method: "GET" }
  )
    .then((resp) => resp.json())
    .then((data) => {
      details = {
        ...details,
        ip: data.ip,
        location: data.location.country,
        timezone: data.location.timezone,
        isp: data.isp,
      };
      latlang = {
        ...latlang,
        x: data.location.lat,
        y: data.location.lng,
      };
      renderInfo(details);
      map.panTo([latlang.x, latlang.y], true);
      marker = L.marker([latlang.x, latlang.y], markerOptions).addTo(map);
      detailContainer.style.opacity = "1";
      loader.style.zIndex = -999;
    })
    .catch((err) => {
      // console.clear();
      alert("The ip you entered doesn't exist");
      loader.style.zIndex = -999;
    });
}
