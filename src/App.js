import './App.css';
import { Outlet, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import SiteNavbar from './ui/navbar';
import { useEffect } from 'react';



function App() {
  
  useEffect(() => {
    document.body.classList.add('bg-dark', 'text-light');

    return () => {
      document.body.classList.remove('bg-black', 'text-light');
    }
  })

  return (
    <>
      <h1 className="text-center App-header"><Link to="/"><del>Allen St</del> Software</Link></h1>
      <SiteNavbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
