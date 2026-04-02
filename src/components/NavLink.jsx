import { Link } from "react-router"
import Nav from "react-bootstrap/Nav"

function NavLink({link, text}) {
    return (
        <Nav.Link as={Link} to={"/" + link} className="navitem">
            {text}
        </Nav.Link>
    )
}

export default NavLink;