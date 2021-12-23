import { FunctionComponent } from "react";
import MarkerPosition from "Map/Marker/MarkerPosition";

const Modal: FunctionComponent = () => {
    const Marker = MarkerPosition();

    return (
        <div className="fixed bg-gray-100 w-full h-100v m-0 rounded-3xl">
            {Marker.map((data) => {
                return (
                    <div className="flex">
                        <div className="px-3" key={data.id}>
                            {data.title}
                        </div>
                        <button type="button">참가</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Modal;
