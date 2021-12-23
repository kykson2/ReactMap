import MarkerPosition from "Map/Marker/MarkerPosition";
import MarkerInfo from "./MarkerInfo";

const markerInfo: string[] = [];
const MarkerAddress = (): any => {
    window.kakao.maps.load(() => {
        const Marker = MarkerPosition();

        const geocoder = new window.kakao.maps.services.Geocoder();
        const callback = (result: any, status: any): void => {
            if (status === window.kakao.maps.services.Status.OK) {
                markerInfo.push(result[0].address.address_name);
            }
        };
        Marker.map((data) =>
            geocoder.coord2Address(
                data.latlng.getLng(),
                data.latlng.getLat(),
                callback
            )
        );
    });

    return MarkerInfo({ markerInfo });
};

export default MarkerAddress;
