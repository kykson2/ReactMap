import React, { useState, useRef } from "react";
import Map from "./Map";

function SearchForm() {
  const formAddressRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState(Object);

  const onchange = () => {
    if (formAddressRef && formAddressRef.current) {
      setForm(formAddressRef.current.value);
      console.log(typeof(formAddressRef.current.value))
    }
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    Map(form);
    e.preventDefault();
    setForm("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="search_bar" className="items-center">
        <div className="relative">
          <input
            type="text"
            name="findTeam"
            onChange={onchange}
            ref={formAddressRef}
            className="rounded m-1 w-28 py-1 bg-gray-300 hover:bg-gray-400"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
