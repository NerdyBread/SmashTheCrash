import { Link } from "react-router"
import Nav from "react-bootstrap/Nav"

function NavLink({link, text, report}) {
    let classname = "navitem";
    if (report == "true") {
        classname += " navitem-background"
    }
    return (
        <Nav.Link as={Link} to={"/" + link} className={classname}>
            {text}
        </Nav.Link>
    )
}

export default NavLink;