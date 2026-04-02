import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router'
import { useState } from 'react'
import NavLink from './NavLink.jsx';
import './nav.css'

let minOpacity = 0.4
let bottomOfBanner = 700;

function calculateOpacity() {
    let scrollPos = Math.min(window.scrollY, bottomOfBanner)
    let opacity = Math.max((scrollPos / bottomOfBanner), minOpacity)
    return opacity
}

function Navigation() {
    let [navbarOpacity, setNavbarOpacity] = useState(minOpacity)
    window.addEventListener('scroll', () => {setNavbarOpacity(calculateOpacity())})
    console.log(navbarOpacity)
    console.log(window.scrollY)
    return (
    <div>
        <Navbar expand="lg" fixed="top" variant='dark' style={{
            'backgroundColor': `rgba(115, 130, 118, ${navbarOpacity})`
        }}>
        <Container>
            <Navbar.Brand as={Link} to="/" className="navitem">
                Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink link="about" text="About"/>
                <NavLink link="report" text="Report a Collision"/>
                <NavLink link="contributors" text="Contributors"/>
                <NavLink link="story-map" text="Collisions in Rochester"/>
                <NavLink link="archive" text="Past Projects"/>
                <NavLink link="documents" text="Surveys and Reports"/>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    );
}

export default Navigation;