import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import siteNavbarStyles from './SiteNavbar.module.css';

export default function SiteNavbar() {
    return (
        <Nav className={ cx(siteNavbarStyles.SiteNavbar, "justify-content-center text-center")}>
          <NavDropdown className="border-start border-end" title="Software" id="nav-software">
            <NavDropdown.Item eventKey="1.1">
              <Link className="text-decoration-none" to="/productdetails">Window Inverter</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item className="">
            <Nav.Link eventKey="2">
              <Link className="text-decoration-none" to="/support">Support</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="border-start border-end">
            <Nav.Link eventKey="3">
              <Link className="text-decoration-none" to="/order">Order</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
    );
}

