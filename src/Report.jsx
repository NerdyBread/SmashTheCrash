import BannerImage from './assets/yellowBelliedSapsuckerStrike.jpg'

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
                  <p className='offwhite mb-0 text-end'>A yellow-bellied sapsucker killed by a collision with Gosnell Hall; found and buried during Spring 2026</p>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
              <div className='big-text-container'>
                <p className='mt-3'>
                  Have you seen or heard a collision?
                </p>
                <p>
                  If you've witnessed a collision or found a bird that you believe was a victim of one, please report it with our tool. The data you share with us
                  will help us better protect our local wildlife, giving us a better picture of which buildings pose them the greatest threat and why we need to act now.
                </p>
                <div className='d-flex justify-content-center mb-5 mt-5'>
                  <a className='customButton nav-link' href='https://arcg.is/1HG5yD' target='_blank'>Go To Collision Reporting Survey</a>
                </div>
                <h5 className='weird-accent mb-3'>
                  If you find a bird that has hit a window, or is otherwise injured but still alive, please follow the steps below to catch it and bring it to a wildlife rehabilitation center.
                </h5>
                <p>
                  Many birds that collide with windows will appear stunned or confused but appear to otherwise be unharmed. Sadly, research has shown that many birds who initially survive
                  collisions die later from internal injuries. Your actions now can give the bird a chance of survival.
                </p>
                <ol>
                  <li>
                    For smaller birds, you will need a brown non-waxed paper bag, or a cardboard box with small holes poked in the top. For larger birds, find a grocery bag.
                    You should also find a tissue, so that the bird has something soft to grasp in order to anchor itself. Place this at the bottom of the bag.
                  </li>
                   <li>
                    If the disoriented bird is flying close to a building, it is best to let it settle before attempting to help it.
                  </li>
                  <li>
                    Slowly and deliberately approach the bird from behind. Make sure to position your hands so that the bird cannot fly away, but do not apply pressure to the bird. Birds are fragile,
                    especially smaller ones, so do not panic if they flutter or attempt to fly away; if you close your hands around the bird or squeeze it, you risk injuring it further.
                  </li>
                  <li>
                    Place the bird gently into the container. Avoid interacting with it any more than necessary, and never give it food or water.
                  </li>
                  <li>
                    Injured birds are under a tremendous amount of stress, which hurts their chance of survival. To avoid making this any worse:
                    <ul>
                      <li>
                        Keep the bird in a warm, dark, quiet place to allow it to calm down.
                      </li>
                      <li>
                        To avoid aggravating it, keep the handling to a minimum, and move the bird as little as possible.
                      </li>
                      <li>
                        Release the bird or get it to a rehabilitation center as quickly as possible.
                      </li>
                      <li>
                        If you are transporting the bird, make sure its container is secured, and keep the car as quiet as possible by not talking or playing music.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Contact your local wildlife rehabilitation center, who will likely ask you to bring it in. If you are unable to transport the bird, please call anyway to see what options are available.
                  </li>
                </ol>
                <p>
                  From the City of Rochester website: For injured wildlife, call 311 and an Animal Services Officer will respond and transport the animal to a veterinarian or licensed wildlife rehabilitator for treatment or humane euthanasia.
                  Do not put yourself at risk of being bitten. If there is concern regarding a bite, call us to pick up the injured animal.
                </p>
              </div>
            </div>
        </div>
    )
}