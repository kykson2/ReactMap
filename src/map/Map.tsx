import { useEffect, FunctionComponent } from "react";

declare global {
  interface Window { // eslint-disable-line no-unused-vars
    kakao: any;
  }
}

interface Iprops {
  place?: string;
}

export const Map: FunctionComponent<Iprops> = ({ place }) => {
  const script = document.createElement("script");
  script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=fad553177d7a8806ee6c78203a18e649&libraries=services&autoload=false";
  document.head.appendChild(script);
  // kakao map api script
  useEffect(() => {
    script.onload = () => {
      // 지도를 담을 영역의 DOM 레퍼런스
      const container = document.getElementById("map") as HTMLElement;

      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(37.50802, 127.062835),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        if (place !== "") {
          const ps = new window.kakao.maps.services.Places();

          ps.keywordSearch(String(place), (data: any[], status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const bounds = new window.kakao.maps.LatLngBounds();
              for (let i = 0; i < data.length; i += 1) {
                bounds.extend(
                  new window.kakao.maps.LatLng(data[i].y, data[i].x),
                );
              }

              map.setBounds(bounds);
            }
          });
        }
      });
    };
  }, [place]);

  return (
    <div className="">
      <div id="map" className="w-screen h-50v" />
    </div>
  );
};

Map.defaultProps = {
  place: undefined,
};
