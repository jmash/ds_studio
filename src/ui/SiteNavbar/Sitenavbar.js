import { Nav, NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SiteNavbar() {
    return (
        <Navbar className="pt-0 pb-0 shadow-sm justify-content-center text-center">
          <NavDropdown className="border-start border-end" title="Software" id="nav-software">
            <NavDropdown.Item eventKey="1.1">
              <Link to="/productdetails">Window Inverter</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item className="">
            <Nav.Link as={Link} to="/support" eventKey="2">
              <Link to="/support">Support</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="border-start border-end">
            <Nav.Link as={Link} to="/order" eventKey="3">
              <Link to="/order">Order</Link>
            </Nav.Link>
          </Nav.Item>
        </Navbar>
    );
}

