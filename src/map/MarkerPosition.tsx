import MarkerIcon from "../images/location-pin.png";

declare global {
  interface Window /* eslint-disable-line no-unused-vars */ {
    kakao: any;
  }
}

interface IMakerConstructor {
  title: string;
  latlng: Object;
}

const MakerPosition = (map: Object): Array<IMakerConstructor> => {
  const positions = [
    {
      title: "함박조기축구",
      latlng: new window.kakao.maps.LatLng(37.233315, 127.184018),
    },
  ];

  const imageSize = new window.kakao.maps.Size(24, 35);
  const markerImage = new window.kakao.maps.MarkerImage(MarkerIcon, imageSize);

  return positions.map((markers) => {
    return new window.kakao.maps.Marker({
      map,
      title: markers.title,
      position: markers.latlng,
      image: markerImage,
    });
  });
};

export default MakerPosition;
