import Card from 'react-bootstrap/Card'
import CustomButton from './CustomButton'
import './card.css'
import data from '../contributorData.json';

export default function ProjectCard({id}) {
    let name = data[id]['name']
    let projectTitle = data[id]['projectTitle']
    let blurb = data[id]['projectBlurb']
    let projectLink = data[id]['projectLink']
    return (
        <Card className='project-card'>
            <Card.Body className='card-body'>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{projectTitle}</Card.Subtitle>
                <hr/>
                <p className='dark-color'>{blurb}</p>
                <CustomButton text="Go to project" link={`projects/${projectLink}`} classname='card-bottom'></CustomButton>
            </Card.Body>
        </Card>
    )
}