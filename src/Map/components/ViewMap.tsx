// global.d.ts
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import MarkerDraw from "../Marker/MarkerDraw";
// import { actionCreators } from "../../store/store";
import { kakaoMapAction } from "../../store/store";

declare global {
    interface Window {
        kakao: any;
    }
}

export const ViewMap: FunctionComponent = () => {
    const dispatcher = useDispatch();
    window.kakao.maps.load(() => {
        const container = document.getElementById("container") as HTMLElement;

        const options = {
            center: new window.kakao.maps.LatLng(37.37, 127.127),
            level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        MarkerDraw(map);
        dispatcher(kakaoMapAction.setMap(map));
    });

    return (
        <div>
            <div className="relative">
                <div id="container" className="fixed w-screen h-100v z-10" />
            </div>
        </div>
    );
};
