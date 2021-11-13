import { useEffect, FunctionComponent } from "react";
import MakerPosition from "./MarkerPosition";

declare global {
  interface Window /* eslint-disable-line no-unused-vars */ {
    kakao: any;
  }
}

interface Iprops {
  place?: string;
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

export const Map: FunctionComponent<Iprops> = ({ place }) => {
  const script = document.createElement("script");
  script.src =
    // eslint-disable-next-line max-len
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=fad553177d7a8806ee6c78203a18e649&libraries=services&autoload=false";
  document.head.appendChild(script);

  useEffect(() => {
    script.onload = () => {
      // 지도를 담을 영역의 DOM 레퍼런스
      const container = document.getElementById("map") as HTMLElement;

      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(37.50802, 127.062835),
          level: 3,
        };
        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);

        // 마커 생성
        MakerPosition(map);

        // 지도 이동
        if (place !== "") {
          const ps = new window.kakao.maps.services.Places();

          ps.keywordSearch(String(place), (data: Idata[], status: number) => {
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
      });
    };
  }, [place, script]);

  return (
    <div className="">
      <div id="map" className="w-screen h-50v" />
    </div>
  );
};

Map.defaultProps = {
  place: undefined,
};
