import ProjectCard from './components/ProjectCard';
import BannerImage from './assets/capeMay.png'
import BirdCarousel from './assets/sillyLittleGuyGB.jpg'

function Home() {
  return (
    <div>
      <link rel="preconnect" href="https://rsms.me/"></link>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      <div className='banner parallax-container' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='nav-overlay title'>
          <h1 className='offwhite px-2'>Smash the Crash</h1>
          <h3 className='offwhite px-2'>Ending bird-window collisions in Rochester</h3>
        </div>
        <div className='nav-overlay position-absolute bottom-0 end-0 w-100'>
          <p className='offwhite mb-0 text-end'>Cape May Warbler found on campus, courtesy of Alex Nacol</p>
        </div>
      </div>
      <div className=''>
        <div className='d-flex justify-content-around align-items-start'>
          <div className='w-50 ms-5 mt-5'>
            <h2 className='offwhite mb-4'>Over ten thousand birds are estimated to die from window collisions in Rochester, New York, every year.</h2>
            <p className='large'>Tragically, many of these birds collide into our buildings every year, resident and migratory species alike. Most of them are killed on impact, and many survivors die later from internal injuries.</p>
            <p className='large'>Smash the Crash is a university-community initiative to protect the <span className='bold'>147</span> species of birds found on the RIT campus and the  <span className='bold'>364</span> spotted in Rochester as a whole by spreading awareness and eventually advocating for bird-friendly policy changes.</p>
            <p className='large'>In 2025, Dr. Richard Fadok, a professor of Anthropology at RIT, and the founder of Smash the Crash, created a Vertically Integrated Project course as a part of the initiative. The idea was to allow students to apply skills learned at RIT to this meaningful environmental initiative.</p>
            <p className='large'>This website is one of the projects, and all of the excellent work by other students this semester can be found below.</p>
          </div>
          <div className='w-50 text-center mt-5'>
            <img
            src={ BirdCarousel } alt="Image of a bird perched on a branch, taken on the RIT campus"
            className='mt-2 img-fluid w-50 rounded-corners'
            />
            <p className='mb-0 mt-2'>A Pewee Flycatcher</p>
            <p>Credit: Alex from RIT Birding Club</p>
          </div>
        </div>
        <div className='mt-5 text-center'>
          <h1 className='weird-accent bold'>Spring 2026 Projects</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='big-text-container'>
            <div className='mt-5 d-flex flex-wrap justify-content-center flex-container'>
              <ProjectCard id='0'></ProjectCard>
              <ProjectCard id='1'></ProjectCard>
              <ProjectCard id='3'></ProjectCard>
              <ProjectCard id='4'></ProjectCard>
              <ProjectCard id='0'></ProjectCard>       
              <ProjectCard id='1'></ProjectCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home