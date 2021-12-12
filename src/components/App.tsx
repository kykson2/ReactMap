import { useState } from "react";
import Map from "../Map";
import Search from "../Map/components/Search";

const App = (): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    return (
        <>
            <Search setSearch={setSearch} />
            <Map search={search} />
        </>
    );
};

export default App;
