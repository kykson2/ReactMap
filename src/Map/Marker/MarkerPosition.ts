interface IMakerConstructor {
    title: string;
    latlng: any;
    id: number;
}

const MakerPosition = (): Array<IMakerConstructor> => {
    const positions = [
        {
            id: 1,
            title: "함박조기축구",
            latlng: new window.kakao.maps.LatLng(37.233315, 127.184018),
            phone: "010-1122-3344",
            date: "1/11",
            time: "19:00~21:00",
        },
        {
            id: 2,
            title: "역북조기축구",
            latlng: new window.kakao.maps.LatLng(
                37.23524168318967,
                127.19270956137709
            ),
            phone: "010-5566-7788",
            date: "1/13",
            time: "15:00~17:00",
        },
    ];

    return positions;
};

export default MakerPosition;
