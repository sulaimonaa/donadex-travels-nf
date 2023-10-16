// import {heroVideo} from '../assets/hero'
import heroVideo from '../assets/hero.mp4';
import BookingForm from './Booking-Form/BookingForm';
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
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-2 md:px-0'>
                <div className='md:w-4/5'>
                <h4 className='text-white font-thin capitalize'>Welcome to donadex travels</h4>
                <h2 className='text-white font-medium capitalize text-3xl'>We are very reliable</h2>
                <h2 className='text-yellow-700 font-medium capitalize text-3xl mb-4'>professional, experienced</h2>
                <BookingForm />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;