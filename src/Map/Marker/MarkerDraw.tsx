import ReactDOM from "react-dom";
import MarkerModal from "Map/Modal/MarkerModal";
import MM from "Map/Modal/MM";
import MarkerPosition from "./MarkerPosition";
import MarkerIcon from "../../images/location-pin.png";
import MarkerInfo from "./MarkerInfo";

declare global {
    interface Window {
        kakao: any;
    }
}

const MarkerDraw = (map: any): void => {
    const imageSize = new window.kakao.maps.Size(30, 30);
    const markerImage = new window.kakao.maps.MarkerImage(
        MarkerIcon,
        imageSize
    );
    const Marker = MarkerPosition();

    const handleMarkerClick = (d: string): React.ReactNode => {
        const el = document.getElementById("markerPortal");
        console.log(d);

        const content = <div className="fixed right-0 top-0 z-40">{d}</div>;
        return ReactDOM.createPortal(content, el as HTMLElement);
    };

    Marker.forEach((data) => {
        const addMarker = new window.kakao.maps.Marker({
            map,
            position: data.latlng,
            title: data.title,
            image: markerImage,
        });
        window.kakao.maps.event.addListener(addMarker, "click", () => {
            return handleMarkerClick(data.title);
        });
    });
};

export default MarkerDraw;
