import './App.css';
import { Outlet, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import SiteNavbar from './ui/navbar';

function App() {
  return (
    <>
      <Container>
        <h1 className="text-center"><Link to="/"><del>Allen St</del> Software</Link></h1>
        <SiteNavbar />      
        <Outlet />
      </Container>
    </>
  );
}

export default App;
