import Card from 'react-bootstrap/Card'
import CustomButton from './CustomButton'
import './card.css'
import data from '../contributorData.json';

export default function ContributorCard({id}) {
    const imgSrc = `/src/assets/profilePictures/${data[id]['file']}`
    const name = data[id]['name'];
    const goLink = `project/${id}`;
    return (
        <Card className='project-card'>
            <img className='card-img' src={imgSrc}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    This is example text that I am writing until I figure 
                    out what sort of text I want to put here.
                    Probably just a short blurb about the person, their major, and their project
                </Card.Text>
                <CustomButton text='Go To Project' link={goLink} classname='card-bottom'/>
            </Card.Body>
        </Card>
    )
}