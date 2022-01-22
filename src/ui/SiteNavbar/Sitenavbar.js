import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import siteNavbarStyles from './SiteNavbar.module.css';

export default function SiteNavbar() {
    return (
        <Nav className={ cx(siteNavbarStyles.SiteNavbar, "shadow-sm justify-content-center text-center")}>
          <NavDropdown className="dropdown-dark border-start border-end" title="Software" id="nav-software">
            <NavDropdown.Item eventKey="1.1">
              <Link to="/productdetails">Window Inverter</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item className="">
            <Nav.Link eventKey="2">
              <Link to="/support">Support</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="border-start border-end">
            <Nav.Link eventKey="3">
              <Link to="/order">Order</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
    );
}

