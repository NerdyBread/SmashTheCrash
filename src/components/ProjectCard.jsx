import Card from 'react-bootstrap/Card'
import CustomButton from './CustomButton'
import './card.css'
import data from '../contributorData.json';

export default function ProjectCard({id}) {
    let name = data[id]['name']
    let projectTitle = data[id]['projectTitle']
    let blurb = data[id]['projectBlurb']
    let projectLink = data[id]['projectLink']
    let linkComponent = <CustomButton text="Go to project" link={projectLink} classname='card-bottom'></CustomButton>
    if (data[id]['externalLink'] == 'true') {
        linkComponent = <a href={projectLink} className='card-button card-bottom' target='_blank'>Go to project</a>
    }
    return (
        <Card className='project-card'>
            <Card.Body className='card-body'>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{projectTitle}</Card.Subtitle>
                <hr/>
                <p className='dark-color'>{blurb}</p>
                {linkComponent}
            </Card.Body>
        </Card>
    )
}