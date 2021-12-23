import MarkerPosition from "./MarkerPosition";
import MarkerIcon from "../../images/location-pin.png";

const MarkerDraw = (map: any): void => {
    const imageSize = new window.kakao.maps.Size(30, 30);
    const markerImage = new window.kakao.maps.MarkerImage(
        MarkerIcon,
        imageSize
    );
    const Marker = MarkerPosition();

    Marker.map(
        (data) =>
            new window.kakao.maps.Marker({
                map,
                position: data.latlng,
                title: data.title,
                image: markerImage,
            })
    );
};

export default MarkerDraw;
