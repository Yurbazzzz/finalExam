function initMap() {
    const gavan = { lat: 50.47105008826532, lng: 30.529165884095317 };

   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: gavan,
    });
    
    const marker = new google.maps.Marker({
      position: gavan,
      map: map,
      animation:google.maps.Animation.BOUNCE,
      icon:'../svg/003-pin.svg'
    });
}