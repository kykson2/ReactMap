import MarkerDraw from "Map/Marker/MarkerDraw";

export const Map = (): any => {
    let map;
    window.kakao.maps.load(() => {
        const container = document.getElementById("container") as HTMLElement;

        const options = {
            center: new window.kakao.maps.LatLng(37.50802, 127.062835),
            level: 3,
        };
        map = new window.kakao.maps.Map(container, options);
        MarkerDraw(map);
    });
    return map;
};
