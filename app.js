const detailContainer = document.getElementById("details");
const submitBtn = document.getElementById("submit");
const input = document.querySelector("[type=search]");
const loader = document.querySelector(".loader");

const details = {
  ip: "",
  location: "",
  timezone: "",
  isp: "",
};
function renderInfo(details) {
  containerHTML = `
  <div class="detail">
  <h6>IP Address</h6>
  <p id="ip-address">${details.ip || "No Data"}</p>
  </div>
  <div class="detail">
  <h6>Location</h6>
  <p id="location">${details.location || "No Data"}</p>
  </div>
  <div class="detail">
  <h6>Timezone</h6>
  <p id="timezone">UTC ${details.timezone || "No Data"}</p>
  </div>
  <div class="detail">
  <h6>ISP</h6>
  <p id="isp">${details.isp || "No Data"}</p>
  </div>
`;
  detailContainer.innerHTML = containerHTML;
}

submitBtn.addEventListener("click", submitAns);

function submitAns(e) {
  e.preventDefault();
  const inputValue = input.value;
  getGeoData(inputValue, details, latlang);
}

window.addEventListener("DOMContentLoaded", () => {
  renderInfo(details);
});
