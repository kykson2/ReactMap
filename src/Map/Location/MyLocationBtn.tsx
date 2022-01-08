import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import sniperLogo from "../../images/sniper.png";

import MyLocation from "./MyLocation";

const MyLocationBtn: FunctionComponent = () => {
    const { map } = useSelector((state) => ({ map: state.kakaoMap.map }));
    console.log(map);

    const handleMyLocation = (): void => {
        MyLocation(map);
    };
    return (
        <div>
            <button
                className="fixed bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-2  m-3 rounded right-0 z-20"
                type="button"
                onClick={handleMyLocation}
            >
                <img src={sniperLogo} alt="logo" className="h-5 w-5" />
            </button>
        </div>
    );
};

export default MyLocationBtn;
