import { useState } from "react";
import { Map } from "../Map";
import Search from "../Map/Search";

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Search setSearch={setSearch} />
      <Map search={search} />
    </>
  );
}

export default App;
