import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SiteNavbar() {
    return (
        <Nav className="justify-content-center">
          <NavDropdown title="Software" id="nav-software">
            <NavDropdown.Item eventKey="1.1">
              <Link to="/productdetails">Window Inverter</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link eventKey="2">
              <Link to="/support">Support</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">
              <Link to="/order">Order</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
    );
}

