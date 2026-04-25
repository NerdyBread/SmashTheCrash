import './storymap.css'

export default function StoryMap() {
    return (
        <div className='pt-5'>
            <div className='d-flex justify-content-center'>
                <h1 className='m-5 pt-5 heading'>Collisions in Rochester by Ian Torres</h1>
            </div>
            <div className='map-container'>
                <iframe
                src="../maps/rochester_bird_map.html"
                width="850rem"
                height="500rem">
                </iframe>
                <p className='mt-3 w-50'>
                    This map represents each reported bird-window collision as an individual point, showing where birds have been found after striking windows.
                    Each marker reflects a real incident, emphasizing the tangible impact of these collisions on wildlife. By presenting the data at this level,
                    the map brings attention to the frequency and geographic spread of these events, reinforcing the importance of bird-safe building practices
                    and increased awareness to help protect vulnerable species.
                </p>
            </div>
            <div className='map-container'>
                <iframe
                src="../maps/rochester_bird_heatmap.html"
                width="850rem"
                height="500rem">
                </iframe>
                <p className='mt-3 w-50'>
                    This map highlights where bird-window collisions are most frequently reported across New York State. Warmer colors show areas where birds are
                    more often found injured or killed after striking buildings, drawing attention to locations where human-built environments may pose the greatest
                    risk. By visualizing these patterns, the map helps identify where awareness, prevention efforts, and bird-safe design practices could have the
                    greatest impact in reducing harm to bird populations.
                </p>
            </div>
            <div className='map-container'>
                <iframe
                src="../maps/rochester_bird_county_choropleth.html"
                width="850rem"
                height="500rem">
                </iframe>
                <p className='mt-3 w-50'>
                    This map shows how reports of bird-window collisions are distributed across counties in New York State. By grouping observations regionally,
                    it helps illustrate which areas are experiencing higher numbers of reported incidents. While this does not capture every collision, it provides
                    a broader perspective on where birds may be most affected by built environments and where conservation efforts, policy changes, or community
                    engagement could be most meaningful.
                </p>
            </div>
        </div>
    )
}