// import {heroVideo} from '../assets/hero'
import heroVideo from '../assets/hero.mp4';
const HeroBanner = () => {
    return(
        <div className='w-full h-screen relative'>
            <video autoPlay loop muted className='w-full h-full object-cover'>
                <source 
                    src={heroVideo}
                    type="video/mp4"
                />
            </video>
            <div className='w-full h-full bg-gray-900/25 absolute top-0 left-0'></div>
        </div>
    )
}

export default HeroBanner;