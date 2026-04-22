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
              <div className='big-text-container'>
                <p className='mt-3'>
                  If you see a collision, find a bird that you believe was a victim of a one, or find other evidence of a collision, please report it below with our tool.
                  This data is a powerful tool that can work in conjunction with bird-safe design to protect local wildlife. Althought the eventual goal is to have only bird-safe
                  buildings, it will give us a better picture of which specific ones are the most dangerous.
                  The data gathered will also elucidate the scale of the problem and, eventually, allow us to wield empirical evidence in our advocacy for bird-friendly policy.
                </p>
                <div className='d-flex justify-content-center mb-5 mt-5'>
                  <a className='customButton nav-link' href='https://arcg.is/1HG5yD' target='_blank'>Go To Collision Reporting Survey</a>
                </div>
                <h5 className='weird-accent mb-3'>
                  If you find a bird that has hit a window, or is otherwise injured but still alive, please follow the steps below to catch it and bring it to a wildlife rehabilitation center, in order to give it a better chance of survival.
                </h5>
                <p>
                  Many birds that collide with windows will appear stunned or confused but appear to otherwise be unharmed. Sadly, research has shown that many birds who initially survive collisions die later from internal injuries.
                </p>
                <ol>
                  <li>
                    For smaller birds, you will need a brown non-waxed paper bag, or a cardboard box with small holes poked in the top. For larger birds, find a grocery bag.
                    You should also find a tissue, so that the bird has something soft to grasp in order to anchor itself. Place this at the bottom of the bag.
                  </li>
                   <li>
                    If the disoriented bird is flying close to a building, it is best to let it settle before attempting to capture it. (Hi Dr. Fadok, thanks for proofreading this. I think the verb "capture" could use some work, but a better word isn't coming to mind)
                  </li>
                  <li>
                    Slowly and deliberately approach the bird from behind. Make sure to position your hands so that the bird cannot fly away, but do not apply pressure to the bird. Small birds especially are incredibly fragile,
                    so do not panic if they flutter or attempt to fly away, as closing your hands around the bird or squeezing it will further injure it.
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
              </div>
            </div>
        </div>
    )
}