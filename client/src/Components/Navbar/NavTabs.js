import React from "react";
import {Navbar, NavItem, Nav} from "react-bootstrap"


const NavTabs = () => (
    <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="/">John Rodriguez Portfolio</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1} href="/">
                Home
            </NavItem>
            <NavItem eventKey={2} href="../AboutMe">
                AboutMe
            </NavItem>
            <NavItem eventKey={3} href="../Projects">
                Projects
            </NavItem>
            <NavItem eventKey={4} href="../FAQ">
                FAQ
            </NavItem>
            <NavItem eventKey={5} href="https://github.com/JohnRodriguez1012" target="blank">
                Github
            </NavItem>
            <NavItem eventKey={6} href="https://www.linkedin.com/in/john-rodriguez" target="blank">
                LinkedIn
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/JohnRodriguez1012/OfficialPortfolio" target="blank">
                Check Out the Code!
            </NavItem>
            </Nav>

        </Navbar.Collapse>
        </Navbar>
</div>
)

export default NavTabs;
