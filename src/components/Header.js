import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const types = ["starships", "planets", "films", "people", "species", "vehicles"];

const Header = (props)=>{
  const [toggle, setToggle] = useState(false);
  const type = props.match.params.type
  return (
    <header className="Header">
      <div className="navbar navbar-main">        
        <div className="container px-lg-0">
          <Navbar className="w-100" light expand="md">
            <Link to="/">
              <NavbarBrand>Star Wars API</NavbarBrand>
            </Link>
            <NavbarToggler onClick={()=>setToggle(!toggle)} />
            <Collapse isOpen={toggle} navbar>
              <Nav className="mr-auto w-100 justify-content-end" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">home</Link>
                </NavItem>
                {types.map((item,index)=>(
                  <NavItem key={item+"-"+index}>
                    <Link className={`nav-link ${type === item && 'active'}`} to={`/type/${item}`}>{item}</Link>
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
}

export default Header;
