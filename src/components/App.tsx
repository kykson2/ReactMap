import SearchForm from "../map/SearchForm";

function App(): JSX.Element {
  console.log(`${process.env.REACT_APP_KAKAO_MAP_API}`);
  return (
    <div>
      <SearchForm />
    </div>
  );
}

export default App;
