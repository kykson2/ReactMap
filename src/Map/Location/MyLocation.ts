const MyLocation = (map: any): void => {
    let lat: number;
    let lon: number;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;

            const locPosition = new window.kakao.maps.LatLng(lat, lon);
            map.setCenter(locPosition);
        });
    }
};

export default MyLocation;
