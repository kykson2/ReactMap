import { FunctionComponent } from "react";
import ModalBtn from "./Modal/ModalBtn";
import { ViewMap } from "./components/ViewMap";
import MyLocationBtn from "./Location/MyLocationBtn";

const Map: FunctionComponent = () => {
    return (
        <div>
            <ViewMap />
            <ModalBtn />
            <MyLocationBtn />
        </div>
    );
};

export default Map;
