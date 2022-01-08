import { FunctionComponent } from "react";
import MarkerPosition from "Map/Marker/MarkerPosition";
import Distance from "./Distance";

const Modal: FunctionComponent = () => {
    const Marker = MarkerPosition();

    const aroundMarker = Marker.filter((data): string => {
        if (Distance(data.latlng)) {
            return data.title;
        }
        return "";
    });

    return (
        <div className="fixed bg-gray-100 w-full h-100v m-0 z-30">
            <p className="m-2">주변 축구팀: {aroundMarker.length}</p>
            <hr />

            <div className="divide-y-2">
                {aroundMarker.map((data): JSX.Element => {
                    return (
                        <div key={data.id}>
                            <a href="#!">
                                <div className="p-3">{data.title}</div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Modal;
