import { Link, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/m-vue">vue项目</Link>
        <br />
        <Link to="/m-react">react项目</Link>
      </BrowserRouter>
      <div id="m-vue-root"></div>
      <div id="m-react-root"></div>
    </div>
  );
}

export default App;
