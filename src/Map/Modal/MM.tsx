import { FunctionComponent } from "react";

interface d {
    bool: boolean;
    data: any;
}

const MM: FunctionComponent<d> = ({ bool, data }) => {
    console.log(data);
    return (
        <div className="fixed top-0 z-30">
            {bool ? <div className="">{data.title}</div> : <div />}
        </div>
    );
};

export default MM;
