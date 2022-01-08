interface IMakerConstructor {
    title: string;
    latlng: any;
    id: number;
}

const MakerPosition = (): Array<IMakerConstructor> => {
    const positions = [
        {
            title: "함박조기축구",
            latlng: new window.kakao.maps.LatLng(37.233315, 127.184018),
            id: 1,
        },
        {
            title: "역북조기축구",
            latlng: new window.kakao.maps.LatLng(
                37.23524168318967,
                127.19270956137709
            ),
            id: 2,
        },
    ];

    return positions;
};

export default MakerPosition;
