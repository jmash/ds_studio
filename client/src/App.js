import './App.css';
import { Outlet, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import SiteNavbar from './ui/SiteNavbar/SiteNavbar';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    document.body.classList.add('bg-dark', 'text-light');

    return () => {
      document.body.classList.remove('bg-dark', 'text-light');
    }
  });

  return (
    <>
      <div className="position-relative">
        <Link className="position-absolute" to="/login">Login</Link>
        <h1 className="text-center py-2 mb-0 border-bottom App-header"><Link className="text-decoration-none" to="/"><del>Allen St</del> Software</Link></h1>
      </div>
      <SiteNavbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
