import './card.css'
import { Link } from 'react-router'
import Nav from "react-bootstrap/Nav"

export default function CustomButton({classname, text, link, border}) {
    classname += ' card-button'
    if (border == true) {
        classname += ' colored-border'
    }
    return (
        <Nav.Link as={Link} to={"/" + link} className={ classname }>
            {text}
        </Nav.Link>
    )
}