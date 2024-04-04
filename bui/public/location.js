function getLocation() {
  if (navigator.geolocation) {
    const loc= navigator.geolocation.getCurrentPosition(showPosition);

  } else { 
  }
}
getLocation()

function showPosition(position) {
}