interface IMarkerAddress {
    MarkerAddress: string[];
    modalOpen: any;
}

const MarkerInformation = ({
    MarkerAddress,
    modalOpen,
}: IMarkerAddress): JSX.Element => {
    console.log(modalOpen);
    return <div />;
};

export default MarkerInformation;
