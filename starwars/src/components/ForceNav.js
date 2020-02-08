import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const ForceNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="https://www.starwars.com">StarWars</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/DevinDCooper?tab=repositories">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="https://starwars.fandom.com/wiki/Jedi"> Jedi </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://starwars.fandom.com/wiki/Sith"> Sith </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                May the Force be with you
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Do or do not. There is no try.</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default ForceNav;