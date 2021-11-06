import React from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Address {
  address?: string;
}

export default function Map(keyword?: Address) {
  // kakao map api script
  const mapScript = document.createElement("script");

  mapScript.async = true;
  mapScript.src =
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=fad553177d7a8806ee6c78203a18e649&libraries=services&autoload=false";

  document.head.appendChild(mapScript);

  // kakao map view
  const onLoadKakaoMap = (): void => {
    window.kakao.maps.load((): void => {
      let container = document.getElementById("map") as HTMLElement; //지도를 담을 영역의 DOM 레퍼런스
      let options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      if (keyword !== "") {
        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(
          String(keyword),
          (data: any[], status: any, pgn: any): void => {
            if (status === window.kakao.maps.services.Status.OK) {
              let bounds = new window.kakao.maps.LatLngBounds();
              for (let i = 0; i < data.length; i++) {
                bounds.extend(
                  new window.kakao.maps.LatLng(data[i].y, data[i].x)
                );
              }

              map.setBounds(bounds);
            }
          }
        );
      }
      if (keyword === "") {
        console.log("키워드를 입력하세요");
      }
    });
  };
  mapScript.addEventListener("load", onLoadKakaoMap);
  return (
    <div className="">
      <div id="map" className="w-screen h-50v"></div>
    </div>
  );
}
