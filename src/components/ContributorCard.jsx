import Card from 'react-bootstrap/Card'
import CustomButton from './CustomButton'
import './card.css'
import data from '../contributorData.json';

export default function ContributorCard({id}) {
    const imgSrc = `/profilePictures/${data[id]['file']}`
    const name = data[id]['name'];
    const goLink = `contributors/${id}`;
    const cardText = data[id]['shortenedBio'];
    return (
        <Card className='project-card'>
            <img className='card-img' src={imgSrc}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
                <CustomButton text={'View Profile'} link={goLink} classname='card-bottom'/>
            </Card.Body>
        </Card>
    )
}