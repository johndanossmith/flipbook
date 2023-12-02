import "./App.css";
import Flipbook from "./components/Flipbook";

function App() {
  return (
    <div className="App">
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <Flipbook />
      </div>
    </div>
  );
}

export default App;
