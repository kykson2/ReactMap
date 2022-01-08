/* eslint-disable consistent-return */
import MarkerPosition from "Map/Marker/MarkerPosition";
import { IKakaoLatLngBounds } from "sharekim-kakao-map-types";

interface SearchProps {
    Search: string;
    map: any;
}

const SearchMap = ({ Search, map }: SearchProps): void => {
    let bounds: IKakaoLatLngBounds;
    const Marker = MarkerPosition();
    window.kakao.maps.load(() => {
        const ps = new window.kakao.maps.services.Places();

        Marker.forEach((data) => {
            if (data.title.indexOf(Search) !== -1) {
                return map.setCenter(data.latlng);
            }
        });

        if (Marker.filter((data) => data.title.indexOf(Search) === -1)) {
            ps.keywordSearch(Search, (result: any[], status: any) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    bounds = new window.kakao.maps.LatLngBounds();
                    result.map((kakaoData) =>
                        bounds.extend(
                            new window.kakao.maps.LatLng(
                                kakaoData.y,
                                kakaoData.x
                            )
                        )
                    );

                    map.setBounds(bounds);
                }
            });
        }
    });
};

export default SearchMap;
