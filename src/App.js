import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Link to="/software">Software</Link> | {" "}
        <Link to="/support">Support</Link> | {" "}
        <Link to="/order">Order</Link>
      </header>
    </div>
  );
}

export default App;
