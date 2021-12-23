interface SearchProps {
    Search: string;
    map: any;
}

const SearchMap = ({ Search, map }: SearchProps): void => {
    window.kakao.maps.load(() => {
        const ps = new window.kakao.maps.services.Places();

        if (Search !== "") {
            ps.keywordSearch(Search, (result: any[], status: any) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const bounds = new window.kakao.maps.LatLngBounds();
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
