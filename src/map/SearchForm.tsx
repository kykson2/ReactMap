import React, { useState, useRef, FunctionComponent } from "react";
import { Map } from "./Map";
import logo from "../images/icon1.png";

const SearchForm: FunctionComponent = () => {
  const formAddressRef = useRef<HTMLInputElement>(null);

  const [isPlace, setIsPlace] = useState("");
  const [inputText, setInputText] = useState("");

  const onchange = (): void => {
    if (formAddressRef && formAddressRef.current) {
      setInputText(formAddressRef.current.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsPlace(inputText);
    setInputText("");
  };
  return (
    <div id="nav">
      <nav className="bg-gray-200">
        <div className="sm: max-w-sm md: max-w-md lg: max-w-6xl mx-auto ">
          <div className="flex justify-between">
            {/* logo */}
            <div className="flex space-x-4">
              <div id="logo">
                <a href="/" className="flex items-center gap-1 py-2 px-3">
                  <img src={logo} alt="logo" className="h-6 w-6" />
                  <span className="font-bold">COS</span>
                </a>
              </div>
            </div>

            {/* search bar */}
            <form onSubmit={handleSubmit}>
              <div id="search_bar" className="items-center">
                <div className="relative">
                  <input
                    type="text"
                    name="findTeam"
                    onChange={onchange}
                    ref={formAddressRef}
                    // eslint-disable-next-line max-len
                    className="rounded m-1 w-28 py-1 bg-gray-300 hover:bg-gray-400"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <Map place={isPlace} />
    </div>
  );
};

export default SearchForm;
