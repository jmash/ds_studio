import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Link to="/software">Software</Link> | {" "}
        <Link to="/support">Support</Link> | {" "}
        <Link to="/order">Order</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
