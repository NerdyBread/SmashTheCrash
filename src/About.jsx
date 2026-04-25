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
                        Over ten thousand birds are estimated to die from window collisions in Rochester, New York, every year.
                        Smash the Crash is a university-community initiative to study this problem and advocate for effective and evidence-driven solutions.
                        Our ultimate goal is to enact bird-friendly RIT policy and eventually have legislation passed in the city of Rochester
                        to make the area safe for birds.
                    </p>
                    <p>
                        Birds crash into our windows because they do not recognize glass as a solid material. As a result, the features that make Rochester so beautiful,
                        like its abundance of trees, often reflect off windows and trick them into thinking they are flying toward a place to land. In other cases, birds mistake raised walkways and
                        other transparent passages for clear skies, flying into them at breakneck speeds. These errors are usually fatal, but death is rarely swift; more often, they suffer traumatic
                        brain injuries, only to later succumb to their wounds.
                    </p>
                    <p>
                        This is an urgent matter. In North America, populations of birds have already declined by almost a third since the 1970s. If we want to prevent their further loss,
                        we need to end bird-window collisions now. We need to <span className='bold'>Smash the Crash</span>.
                    </p>
                    <p>
                        Launched in September 2024, we are led by a team of student and faculty researchers and practitioners from RIT and the University of
                        Rochester in partnership with local non-profit organizations dedicated to environmental conservation. Through scientific research, art/design, 
                        and educational outreach, we are working to make our city a safer place for resident and migratory birds.
                    </p>
                    <h2 className='heading mb-5 pt-5'>Why Do Birds Migrate?</h2>
                    <p>
                        Birds follow flyways that have been passed down for generations in a fascinating show of ancestral animal mobility.
                        Ultimately, they seek simple goals, similar to those that we would wish for our own families. In the winter, they fly south,
                        seeking a warm, safe place with abundant food to wait out the harsh cold. In the spring, birds once again begin migration, using the Atlantic flyway, which passes through New York, to travel to nesting
                        grounds that are uncrowded and ripe with food from the emerging summer weather. Here, they can truly resume their lives, settling down and caring for their offspring.
                    </p>
                    <p>
                        Many birds stop over in Rochester to refuel as they finish their journey to the nesting grounds of Canada. Their plight of collisions, then,
                        is especially tragic in this city, because they are so painfully close. Their journey is cut short just before they reach safety, by something
                        that we are able to prevent.
                    </p>
                    <h2 className='heading mb-5 pt-5'>Birds Matter</h2>
                    <p>
                        Many find it hard to commit themselves to the cause of preventing window strikes when we face ecological and environmental issues like climate change,
                        deforestation, and ocean acidification. While bird-window collisions are a quieter, less covered environmental tragedy, this slow violence towards our
                        avian friends is indeed a tragedy in its own right. One reason that ending bird-window collisions matters is that birds are a key contributor to the ecosystem of
                        the entire country. They ensure equilibrium by eating around 400 million tons of insects annually, and they pollinate plants and spread seeds while feeding.
                        Birds and their habitats make their surroundings more vibrant and beautiful. Birdwatching also is a massive driver of the economy: it generates an
                        estimated $280 billion dollars of economic output annually.
                    </p>
                    <p>
                        Birds are a beautiful, precious animal, and they are dying. A primary driver of this sharp increase of avian mortality is bird-window collisions.
                        In the United States, an estimated one billion birds die every year from these fatal window strikes. National legislation has failed to make it through
                        Congress year after year, but on a smaller scale, universities and municipalities around the country have begun to recognize this profound ecological
                        crisis and pass bird-friendly building policy. This often included requirements for new construction to be completed with bird-friendly materials for
                        at-risk windows. Retrofitting existing buildings is also crucial, but thus far less common because of the cost.
                    </p>
                    <p>You can view our policy brief for RIT [here]</p>
                </div>
            </div>
        </div>
    )
}