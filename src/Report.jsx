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
            <div className='d-flex justify-content-center mt-4'>
              <div className='w-75'>
                <p className='offwhite text-center'>
                  Rochester is a major hotspot for birds. Over 300 different species reside in this city or migrate through the area every fall and spring—some 1 million birds in total.
                  Nevertheless, tens of thousands of these very same birds will suffer annually from fatal collisions with our buildings, including many here at RIT.</p>
                <p className='offwhite text-center'>
                  If you see a collision, find a bird that you believe was a victim of a one, or find other evidence of a collision, please report it below with our tool. The data gathered will elucidate the scale of the problem and, eventually, allow us to wield empirical evidence in our advocacy for bird-friendly policy.
                </p>
                <div className='d-flex justify-content-center mb-3'>
                  <a className='customButton nav-link' href='https://arcg.is/1HG5yD' target='_blank'>Click Here to Report Collision</a>
                </div>
                <p className='offwhite text-center'>
                  Many birds that collide with windows will appear stunned or confused but appear to otherwise be unharmed. Sadly, research has shown that many birds who initially survive collisions die later from internal injuries. 
                  If you find a bird that has hit a window, or is otherwise injured but still alive, please follow the steps below to give it a better chance of survival.
                </p>
              </div>
            </div>
        </div>
    )
}