/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className='bg-slate-600 text-white' onClick={() => onClick()} />;
};

export default function Landing(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className=''>
        <img
          className="w-screen h-[80vh] object-cover shadow-md hover:shadow-xl bg-gray-400 "
          src='/projects/cyber_security.jpeg'
          alt='/projects/blockchain.jpeg'
        />
        <h3 className='absolute bottom-11 m-3 right-3 lg:bottom-32 lg:right-4 text-white text-4xl lg:text-6xl font-bold font-["Open_Sans"] lg:w-2/4  '>Hub inspection by top government functionaries</h3>
      </div>
      <div>
      <img
          className="w-screen h-[80vh] object-cover shadow-md hover:shadow-xl "
          src='/projects/drone.jpeg'
          alt='/projects/blockchain.jpeg'
        />
        <h3 className='absolute bottom-32 left-3 lg:right-0 lg:left-0 lg:top-48 lg:bottom-0 m-auto h-[70px] text-4xl lg:text-6xl w-full lg:w-6/12  font-bold font-["Open_Sans"] text-white'>specialized drone training for law enforcement </h3>
      </div>
      <div>
      <img
          className="w-screen h-[80vh] object-cover shadow-md hover:shadow-xl "
          src='/projects/blockchain.jpeg'
          alt='/projects/blockchain.jpeg'
        />
        <h3 className='absolute right-0 left-0 m-3 top-48 bottom-0 m-auto h-[70px] lg:w-6/12 text-4xl lg:text-6xl font-bold font-["Open_Sans"] text-white'>TAC global drone conference singapore </h3>
      </div>
      <div>
      <img
          className="w-screen h-[80vh] object-cover shadow-md hover:shadow-xl "
          src='/team/our_team.jpg'
          alt='/projects/blockchain.jpeg'
        />
        <h3 className='absolute right-0 left-0 top-48 bottom-0 m-auto h-[70px] w-full text-4xl lg:text-6xl font-bold font-["Open_Sans"] text-white text-center'>Briefing by TAC team leads</h3>
      </div>
    </Carousel>
  );
}
