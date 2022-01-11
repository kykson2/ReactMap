import { useSelector } from "react-redux";
import { IKakaoLatLng } from "sharekim-kakao-map-types";

const Distance = (Latlng: IKakaoLatLng): boolean => {
    const { map } = useSelector((state) => ({ map: state.setKakaoMap.map }));

    let bool = true;

    const c1 = map.getCenter();
    const polyline = new window.kakao.maps.Polyline({
        path: [c1, Latlng],
    });

    if (polyline.getLength() > 1000) {
        bool = false;
    }
    return bool;
};

export default Distance;
