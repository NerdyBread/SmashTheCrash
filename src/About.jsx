import AboutBanner from './assets/hummingbird.jpg'
import './about.css'

export default function About() {
    
    return (
        <div>
            <div className='banner parallax-container' style={{backgroundImage: `url(${AboutBanner})`}}>
                <div className='nav-overlay about-title'>
                    <h1 className='offwhite px-2'>About the Initiative</h1>
                </div>
                <div className='nav-overlay position-absolute bottom-0 end-0 w-100'>
                    <p className='offwhite mb-0 text-end'>Photo courtesy of Alex Nacol </p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='big-text-container'>
                    <h1 className='heading mt-5 mb-5 pt-5'>About the Initiative</h1>
                    <p>
                        Every year in Rochester, New York, over ten thousand birds are estimated to die of window collisions. Smash the Crash is a
                        university-community initiative to study this preventable problem and advocate for effective, evidence-driven solutions.
                        Launched in September 2024, we are led by a team of student and faculty researchers at RIT and the University of Rochester
                        and partner with local non-profit organizations dedicated to environmental conservation. Through scientific research,
                        art/design, and educational outreach, we aim to pass bird-friendly legislation that will make our campuses and city safer for birds.
                    </p>
                    <h2 className='heading mb-5 pt-5'>Why Do Birds Crash into Windows?</h2>
                    <p>
                        Birds do not recognize glass as a solid material. As a result, the features that make Rochester so beautiful, like its abundance of
                        trees, often reflect off windows and trick them into thinking they are flying toward a place to land. In other cases, birds mistake
                        raised walkways and other transparent passages for clear skies, flying into them at breakneck speeds. These errors are usually fatal.
                    </p>
                    <p>
                        This is an urgent matter. In North America, populations of birds have already declined by almost a third since the 1970s. If we want to prevent their further loss,
                        we need to end bird-window collisions now. We need to <span className='bold'>smash the crash</span>.
                    </p>
                    <h2 className='heading mb-5 pt-5'>Why Do Birds Migrate?</h2>
                    <p>
                        In a fascinating show of ancestral animal mobility, birds follow migratory flyways that have been passed down for generations,
                        including the Atlantic flyway, which passes through Rochester.
                        In the winter, they fly south, seeking warmth, safety, and food while they wait out the cold. In the spring, birds retrace their steps,
                        traveling to nesting grounds that are with abundant resources. Here, they can they breed and care for their young. Theirs are simple goals,
                        not unlike what we would wish for our own families.
                    </p>
                    <p>
                        Every year tens of millions of birds stopover in Rochester to refuel as they up and down the Atlantic Flyway. Every year, their journey is cut short just before
                        they can reach their destinations. This makes the plight of collisions in Rochester especially tragic. Thankfully, this is something that we are able to prevent.
                    </p>
                    <h2 className='heading mb-5 pt-5'>Birds Matter</h2>
                    <p>
                        Many find it hard to commit to the cause of preventing window strikes when we face multiple, global environmental crises, such as climate change, deforestation,
                        and ocean acidification. While bird-window collisions are a quieter, less covered environmental tragedy, this form of “slow violence” towards our avian friends
                        is indeed a catastrophe in its own right. 
                    </p>
                    <p>
                        One reason that ending bird-window collisions matters is that birds are an important contributor to the ecosystem of the entire country. They ensure equilibrium
                        by eating around 400 million tons of insects annually, and they pollinate plants and spread seeds while feeding. Birds and their habitats make their surroundings
                        more vibrant and beautiful. Birdwatching is also a massive driver of the economy; it generates an estimated $280 billion dollars of economic output annually.
                    </p>
                    <p>
                        Birds are a beautiful, precious animal, and they are dying. A primary driver of this sharp increase of avian mortality is bird-window collisions.
                        In the United States, an estimated one billion birds die every year from these fatal window strikes.
                    </p>
                    <p>
                        While national legislation has failed to make it through Congress year after year, universities and municipalities around the country have begun to recognize
                        this profound environmental problem and pass bird-friendly building policy. This often includes requirements for outfitting new buildings and retrofits with
                        “bird-safe” measures that prevent collisions with existing structures.
                    </p>
                    <p>You can view our policy brief for RIT [here]</p>
                </div>
            </div>
        </div>
    )
}