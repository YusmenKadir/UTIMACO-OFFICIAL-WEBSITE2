const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
  console.log("clicked");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    console.log("clicked");
  });
});

var map;
var InforObj = [];
var centerCords = {
  lat: 50.79505,
  lng: 6.1244,
};
var markersOnMap = [
  {
    placeName: "EMEA",
    companyName: "Utimaco IS GmbH",
    streetName: "Germanusstraße 4",
    postalCode: "52080 Aachen",
    countryName: "Germany",
    telNumber: "tel:00492411696200",
    telNumberText: "Phone: + 00492411696200",
    LatLng: [
      {
        lat: 50.79505,
        lng: 6.1244,
      },
    ],
  },
  {
    placeName: "AMERICAS",
    companyName: "Utimaco Inc.",
    streetName: "900 E Hamilton Ave., Suite 400",
    postalCode: "Campbell, CA 95008",
    countryName: "USA",
    telNumber: "tel:0018448846226",
    telNumberText: "Phone: + 0018448846226",
    LatLng: [
      {
        lat: 37.294245,
        lng: -121.934267,
      },
    ],
  },
  {
    placeName: "APAC",
    companyName: "Utimaco IS Pte Limited",
    streetName: "80 Raffles Place,",
    postalCode: "#32-01, UOB Plaza",
    countryName: "Singapore 048624",
    telNumber: "tel:006566225347",
    telNumberText: "Phone: + 006566225347",
    LatLng: [
      {
        lat: 1.28503,
        lng: 103.85067,
      },
    ],
  },
];

// window.onload = function () {
//   initMap();
// };

// window.addEventListener("DOMContentLoaded", initMap);

function addMarker() {
  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString =
      '<div id="content"><h1>' +
      markersOnMap[i].placeName +
      `</h1>
	  <p class = 'body-text-font'>${markersOnMap[i].companyName}</p>
	  <p class = 'body-text-font'>${markersOnMap[i].streetName}</p>
	  <p class = 'body-text-font'>${markersOnMap[i].postalCode}</p>
	  <p class = 'body-text-font'>${markersOnMap[i].countryName}</p>
	  <a href='${markersOnMap[i].telNumber}' class = 'body-text-font'>${markersOnMap[i].telNumberText}</a>
	  </div>`;

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map,
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
    });

    marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InforObj[0] = infowindow;
    });
  }
}

function closeOtherInfo() {
  if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
    InforObj[0].set("marker", null);
    /* and close it */
    InforObj[0].close();
    /* blank the array */
    InforObj.length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: centerCords,
  });
  addMarker();
}
