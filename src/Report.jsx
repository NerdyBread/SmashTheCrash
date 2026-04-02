import BannerImage from './assets/hummingbird.jpg'

export default function Report() {
    return (
        <div>
            <div className='header-container'>
                <img
                  src={ BannerImage }
                  alt="Banner image of bird on campus"
                  className='banner'>
                </img>
                <div className='nav-overlay position-absolute top-0 start-0 report-title'>
                  <h1 className='offwhite px-2'>Report a Collision</h1>
                </div>
                <div className='nav-overlay position-absolute bottom-0 end-0 w-100'>
                  <p className='offwhite mb-0 text-end'>Photo courtesy of Alex from RIT Birding</p>
                </div>
            </div>
            <p>
                    Many birds that collide with windows will appear stunned or confused but appear to otherwise be unharmed. Sadly, research has shown that many birds who initially survive collisions die later from internal injuries.
If you find a bird that is still alive, follow the steps. Below If the bird was a victim of a collision, please report the collision below with our tool if you wish. The data gathered will serve the purpose of highlighting the vast number of bird strikes in Rochester, in order to better understand the issue and to help us advocate for policy change.
                </p>
        </div>
    )
}