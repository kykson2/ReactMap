import { FunctionComponent } from "react";

interface IAddress {
    markerInfo?: string[];
}

const MarkerInfo: FunctionComponent<IAddress> = ({ markerInfo }) => {
    return <div>{markerInfo}</div>;
};

MarkerInfo.defaultProps = {
    markerInfo: [],
};

export default MarkerInfo;
