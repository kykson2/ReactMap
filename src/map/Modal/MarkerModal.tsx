import MarkerInfo from "Map/Marker/MarkerInfo";
import { FunctionComponent } from "react";
import ReactDOM from "react-dom";

const MarkerModal: FunctionComponent = () => {
    const el = document.getElementById("markerPortal");

    const content = <div className="fixed right-0 top-0 z-40">hi</div>;
    return ReactDOM.createPortal(content, el as HTMLElement);
};

export default MarkerModal;

// const el = document.getElementById("markerPortal");
//     const MarkerData = data;
//     console.log(MarkerData.title);
// const content = (
//     <div className="fixed right-0 top-0 z-40">{MarkerData.title}</div>
//     );
//     return ReactDOM.createPortal(content, el as HTMLElement);
