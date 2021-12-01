import { FunctionComponent } from "react";
import MarkerPosition from "./MarkerPosition";
import MarkerIcon from "../images/location-pin.png";

declare global {
  interface Window /* eslint-disable-line no-unused-vars */ {
    kakao: any;
  }
}

interface SearchProps {
  search: string;
}

interface Idata {
  addressname: string;
  categorygroupcode: string;
  categorygroupname: string;
  categoryname: string;
  distance: string;
  id: string;
  phone: string;
  placename: string;
  placeurl: string;
  roadaddressname: string;
  x: string;
  y: string;
}

let map: any = {};

export const Map: FunctionComponent<SearchProps> = ({ search }) => {
  window.kakao.maps.load(() => {
    if (search !== "") {
      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(search, (data: Idata[], status: number) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          data.map((kakaoData) => {
            return bounds.extend(
              new window.kakao.maps.LatLng(kakaoData.y, kakaoData.x)
            );
          });
          map.setBounds(bounds);
        }
      });
    }
    if (search === "") {
      const container = document.getElementById("container");

      const options = {
        center: new window.kakao.maps.LatLng(37.50802, 127.062835),
        level: 3,
      };
      map = new window.kakao.maps.Map(container, options);

      const imageSize = new window.kakao.maps.Size(30, 30);
      const markerImage = new window.kakao.maps.MarkerImage(
        MarkerIcon,
        imageSize
      );
      const Marker = MarkerPosition();

      Marker.map((data) => {
        return new window.kakao.maps.Marker({
          map,
          position: data.latlng,
          title: data.title,
          image: markerImage,
        });
      });
    }
  });

  const hi = (): void => {
    console.log("hi");
  };

  // const MarkerPlace: any[] = [];
  // const Marker = MarkerPosition();
  // const geocoder = new window.kakao.maps.services.Geocoder();
  // const callback = (result: any, status: any): void => {
  //   if (status === window.kakao.maps.services.Status.OK) {
  //     MarkerPlace.push(result[0].address.address_name);
  //     console.log(result);
  //   }
  // };
  // MarkerPosition(data);
  // Marker.map((data) => {
  //   return (
  //     new window.kakao.maps.Marker({
  //       map,
  //       position: data.latlng,
  //       title: data.title,
  //       image: markerImage,
  //     }),
  //     geocoder.coord2Address(
  //       data.latlng.getLng(),
  //       data.latlng.getLat(),
  //       callback
  //     )
  //   );

  return (
    <div>
      <div className="relative">
        <div id="container" className="absolute w-screen h-100v z-0" />
        <button
          type="button"
          className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
          onClick={hi}
        >
          더보기
        </button>
      </div>
    </div>
  );
};
