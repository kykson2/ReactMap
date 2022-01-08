import { FunctionComponent } from "react";

interface IMarkerInfo {
    data?: any;
}

const MarkerInfo: FunctionComponent<IMarkerInfo> = ({ data }): any => {
    const MakerInformation = { data };
    return data;
};

export default MarkerInfo;
