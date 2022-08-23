import "./App.css";

function App() {
  const provs = [
    "우리가 가진 것은 현재 뿐이다",
    "행복은 선택하는 것",
    "실패하지 않고 배울 수 있는게 하나라도 있습니까?",
  ];

  const random = (length) => {
    return parseInt(Math.random() * length);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>새로고침 하면 명언이 나옵니다</h3>
        <p>{provs[random(provs.length)]}</p>
      </header>
    </div>
  );
}

export default App;
