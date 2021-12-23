import { Provider } from "react-redux";
import store from "store/store";
import Map from "../Map";
import SearchForm from "../Map/Search/SearchForm";

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <SearchForm />
            <Map />
        </Provider>
    );
};

export default App;
