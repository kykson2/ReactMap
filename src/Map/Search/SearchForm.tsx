import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import logo from "../../images/icon1.png";
import SearchMap from "./SearchMap";

interface FormValue {
    keyword?: string;
}

interface keyword {
    keyword: string;
}

const SearchForm = (): JSX.Element => {
    const { map } = useSelector((state: any) => ({
        map: state.setKakaoMap.map,
    }));

    const { register, handleSubmit } = useForm<FormValue>();
    const [Search, setSearch] = useState<string>("");

    const onSubmit = (data: keyword): void => {
        setSearch(data.keyword);
        window.kakao.maps.load(() => {
            if (Search !== "") SearchMap({ Search, map });
        });
    };

    return (
        <div className="relative">
            <div className="w-full">
                <div className="flex space-x-4 bg-gray-200">
                    <a href="/" className="flex items-center gap-1 py-2 px-3">
                        <img src={logo} alt="logo" className="h-6 w-6" />
                        <span className="font-bold">COS</span>
                    </a>
                </div>
            </div>

            {/* input */}
            <div className="fixed top-0 right-0 m-1">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gray-200 right-0"
                >
                    <div id="search_bar" className="right-0">
                        <input
                            {...register("keyword")}
                            id="setSearch"
                            className="rounded py-1 right-0 bg-gray-300 hover:bg-gray-400"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

SearchForm.defaultProps = {
    keyword: undefined,
};

export default SearchForm;
