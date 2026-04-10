import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router'
import { useState } from 'react'
import NavLink from './NavLink.jsx';
import './nav.css'

let minOpacity = 0.4
let bottomOfBanner = 650;

function calculateOpacity() {
    let scrollPos = Math.min(window.scrollY, bottomOfBanner)
    let opacity = Math.max((scrollPos / bottomOfBanner), minOpacity)
    return opacity
}

function Navigation() {
    let [navbarOpacity, setNavbarOpacity] = useState(minOpacity)
    window.addEventListener('scroll', () => {setNavbarOpacity(calculateOpacity())})
    return (
    <div className=''>
        <Navbar expand="lg" fixed="top" variant='dark' style={{
            'backgroundColor': `rgba(115, 130, 118, ${navbarOpacity})`
        }}>
            <Container fluid className='ms-5'>
                <Navbar.Brand as={Link} to="/" className="navitem">
                    <img
                    src="/src/assets/logoWhite.png" alt="Home"
                    width="80"
                    height="80"
                    className="d-inline-block align-top logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
        
                    </Nav>
                    <Nav className='ms-auto me-5'>
                        <NavLink link="about" text="About"/>
                        <NavLink link="story-map" text="Collisions in Rochester"/>
                        <NavLink link="projects" text="Projects"/>
                        <NavLink link="contributors" text="Team"/>
                        <NavLink link="report" text="Report a Collision"/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
}

export default Navigation;