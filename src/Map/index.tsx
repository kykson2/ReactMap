import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import ModalBtn from "./Modal/ModalBtn";
import { ViewMap } from "./components/ViewMap";
import MyLocationBtn from "./Location/MyLocationBtn";
import ModalPortal from "./Modal/ModalPortal";

const Map: FunctionComponent = () => {
    const isMarkerPortal = useSelector(
        (state: any) => state.markerPortal.portal
    );
    return (
        <div>
            <ViewMap />
            <MyLocationBtn />
            <ModalBtn />
            {isMarkerPortal && <ModalPortal />}
        </div>
    );
};

export default Map;
