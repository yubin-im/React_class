import "./App.css";
import Counter from "./components/Counter";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <div>
      {/* 주석 */}
      <h1 className="blue">안녕! 리액트</h1>
      <h1 className="green">저는 홍길동입니다.</h1>
      <hr />
      <First />
      <First />
      <hr />
      <Second />
      <hr />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
