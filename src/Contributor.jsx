import { useParams } from 'react-router'
import './contributor.css'
import CustomButton from './components/CustomButton'
import contributorData from './contributorData.json'

// central rock climbing gym

export default function Contributor() {
    let id = useParams().uid;
    // const path = `/src/assets/profilePictures/${contributorData[id]["file"]}`
    const path = `/profilePictures/${contributorData[id]["file"]}`
    const projectLink = `projects/${id}`
    const name = contributorData[id]["name"]
    const bio = contributorData[id]["bio"]
    let bioComponents = bio.map((paragraph) =>
        <p className='offwhite'>{paragraph}</p>
    )
    return (
        <div className='d-flex justify-content-between align-items-start m-5 pt-5'>
            <div className='w-75 mt-5'>
                <h1 className='text-center mb-4 weird-accent'>{ name }</h1>
                <div>
                    {bioComponents}
                </div>        
            </div>
            <div className='w-50 text-center mt-5'>
                <img
                    src={ path }
                    alt={ path }
                    className='img-fluid profile-image'
                />
                <hr/>
                <div className='center-contents'>
                    <CustomButton text={contributorData[id]['buttonText']} link={projectLink} border={ true }></CustomButton>
                </div>
            </div>
        </div>
    )
}