import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/icon1.png";

interface FormValue {
  setSearch: Dispatch<SetStateAction<string>>;
  keyword?: string;
}

interface keyword {
  keyword: string;
}

const SearchForm: FunctionComponent<FormValue> = ({ setSearch }) => {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmit = (data: keyword): void => {
    setSearch(data.keyword);
  };

  return (
    <div>
      <div className="sm: max-w-sm md: max-w-md lg: max-w-6xl mx-auto ">
        <div className="flex justify-between space-x-4 bg-gray-200">
          <a href="/" className="flex items-center gap-1 py-2 px-3">
            <img src={logo} alt="logo" className="h-6 w-6" />
            <span className="font-bold">COS</span>
          </a>
        </div>
      </div>

      {/* input */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-screen bg-gray-200"
      >
        <div id="search_bar" className="inset-0">
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("keyword")}
            id="setSearch"
            className="rounded py-1 m-2 bg-gray-300 hover:bg-gray-400"
          />
        </div>
      </form>
    </div>
  );
};

SearchForm.defaultProps = {
  keyword: undefined,
};

export default SearchForm;
