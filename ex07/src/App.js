import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Locals from "./components/Locals";

function App() {
  return (
    <div className="App">
      <h1 className="my-5">지역검색</h1>
      <Locals />
    </div>
  );
}

export default App;
