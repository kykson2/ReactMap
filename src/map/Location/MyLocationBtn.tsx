import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import MyLocation from "./MyLocation";

const MyLocationBtn: FunctionComponent = () => {
    const { map } = useSelector((state) => ({ map: state.map }));

    const handleMyLocation = (): void => {
        MyLocation(map);
    };
    return (
        <div>
            <button
                className="fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded right-0 "
                type="button"
                onClick={handleMyLocation}
            >
                내 위치
            </button>
        </div>
    );
};

export default MyLocationBtn;
