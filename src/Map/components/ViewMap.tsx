// global.d.ts
import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    kakaoMapAction,
    markerDataAction,
    markerPortalAction,
} from "../../store/store";

import MarkerPosition from "../Marker/MarkerPosition";
import MarkerIcon from "../../images/location-pin.png";

declare global {
    interface Window {
        kakao: any;
    }
}

export const ViewMap: FunctionComponent = () => {
    const dispatcher = useDispatch();
    useEffect(() => {
        window.kakao.maps.load(() => {
            const container = document.getElementById(
                "container"
            ) as HTMLElement;

            const options = {
                center: new window.kakao.maps.LatLng(37.37, 127.127),
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            // MarkerDraw(map);
            dispatcher(kakaoMapAction.setMap(map));

            const handleMapClick = (): any => {
                return dispatcher(markerPortalAction.MarkerPotalClose());
            };

            window.kakao.maps.event.addListener(map, "click", () => {
                return handleMapClick();
            });

            const imageSize = new window.kakao.maps.Size(30, 30);
            const markerImage = new window.kakao.maps.MarkerImage(
                MarkerIcon,
                imageSize
            );
            const Marker = MarkerPosition();

            const handleMarkerClick = (data: any): any => {
                dispatcher(markerDataAction.MarkerData(data));
                return dispatcher(markerPortalAction.MarkerPotalOpen());
            };

            Marker.forEach((data) => {
                const addMarker = new window.kakao.maps.Marker({
                    map,
                    position: data.latlng,
                    title: data.title,
                    image: markerImage,
                });
                window.kakao.maps.event.addListener(addMarker, "click", () => {
                    return handleMarkerClick(data);
                });
            });
        });
    }, []);

    return (
        <div>
            <div className="relative">
                <div id="container" className="fixed w-screen h-100v z-10" />
            </div>
        </div>
    );
};
