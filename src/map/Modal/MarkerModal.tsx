import { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

const MarkerModal: FunctionComponent = () => {
    const { data } = useSelector((state) => ({
        data: state.markerData.data,
    }));
    console.log(data);
    const el = document.getElementById("markerPortal");

    const content = (
        <div className="fixed bg-gray-300 py-2 px-4 w-60 right-1/2 transform translate-x-1/2 rounded bottom-20 z-20">
            축구팀: {data.title}
            <br />
            전화번호: {data.phone}
            <br />
            일시: {data.date} 시간 {data.time}
        </div>
    );
    return ReactDOM.createPortal(content, el as HTMLElement);
};

export default MarkerModal;

// const el = document.getElementById("markerPortal");
// const MarkerData = data;
// console.log(MarkerData.title);
// const content = (
//     <div className="fixed right-0 top-0 z-40">{MarkerData.title}</div>
// );
// return ReactDOM.createPortal(content, el as HTMLElement);
