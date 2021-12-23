// global.d.ts
import { FunctionComponent } from "react";
import { IKakao } from "sharekim-kakao-map-types";
import { useDispatch } from "react-redux";
import MarkerAddress from "Map/Marker/MarkerAddress";
import MarkerDraw from "../Marker/MarkerDraw";
import { actionCreators } from "../../store/store";

declare global {
    interface Window {
        kakao: IKakao;
    }
}

export const ViewMap: FunctionComponent = () => {
    const dispatcher = useDispatch();
    window.kakao.maps.load(() => {
        const container = document.getElementById("container") as HTMLElement;

        const options = {
            center: new window.kakao.maps.LatLng(37.50802, 127.062835),
            level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        MarkerDraw(map);
        dispatcher(actionCreators.setMap(map));
    });

    MarkerAddress();

    return (
        <div>
            <div className="relative">
                <div id="container" className="fixed w-screen h-100v" />
            </div>
        </div>
    );
};
