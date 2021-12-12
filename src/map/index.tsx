import { FunctionComponent } from "react";
import ModalBtn from "./components/ModalBtn";
import { ViewMap } from "./components/ViewMap";

interface Iprops {
    search: string;
}

const Map: FunctionComponent<Iprops> = ({ search }) => {
    return (
        <div>
            <ViewMap search={search} />
            <ModalBtn />
        </div>
    );
};

export default Map;
