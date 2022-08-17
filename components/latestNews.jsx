/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import VideoComp from '../components/videoPlayer/video';
import Link from 'next/link';
import FormModal from './formModal';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { ConditionalLinks } from '../components/conditionalLinks';

const PDFcomp = ({ children, pdfs }) => {
  const [modalShow, setModalShow] = useState(false);
  const [PDF, setPDF] = useState('');

  return (
    <>
      <FormModal
        PDF={PDF}
        setPDF={setPDF}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
      <a
        className="inline-flex items-center cursor-pointer text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          setModalShow(!modalShow);
          setPDF(pdfs);
        }}
      >
        {children}
        <svg
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </>
  );
};

export default function LatestNews({ text2 }) {
  const data = [
    {
      title: 'Taekwando Training',
      media: {
        type: 'image',
        url: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567184/my_folder/int%20youth%20day/1-2208130038_i3rttl.jpg',
        // downloadLink: 'https://www.dropbox.com/s/ishkxssh81qriz6/INTERPOL%20World%202019%20calendar.pdf?dl=1'
      },
      text: [''],
      blogLink: '/',
      textLink: '',
    },
    {
      title: 'Tennis Clinic',
      media: {
        type: 'image',
        url: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567314/my_folder/int%20youth%20day/1-2208130101_h5gtbn.jpg',
      },
      text: [  ],
      textLink: '/',
      blogLink: '/',
    },
    {
      title: 'Chess Clinic',
      media: {
        type: 'image',
        url: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796729/my_folder/mandella_and_chess_day/1-2207230018_fjwsk3.jpg',
      },
      text: [ ],
      textLink: '/',
      blogLink: '/',
    },
    {
      title:
        'Drone Club',
      media: {
        type: 'image',
        url: 'https://res.cloudinary.com/tacafrica/image/upload/v1660216604/my_folder/youth%20skill%20day/IMG-20220718-WA0026_dqzblt.jpg',
      },
      // text: "/",
      blogLink:
        '/',
    },
  
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1536, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full">
      <div className={` pt-12 pb-20 mx-auto my-0 xl:px-12`}>
        <div className="flex justify-Center items-center  py-4 mx-auto capitalize">
          <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-6xl">
            {/* {'News And '} */}
            {/* Latest{' '} */}
            <span className="text-primary font-bold text-6xl ">
              {'Activities'}
              {/* {text2} */}
            </span>
          </h2>
        </div>
        <div className="pl-4">
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
            containerClass="carousel-container "
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            // deviceType={props.deviceType}
            dotListClass="relative pt-2  z-50"
            itemClass="carousel-item-padding-40-px flex flex-no-wrap items-stretch "
          >
            {data.map((edge, i) => (
              <div
                key={i}
                id={i.toString() + 'latestNews'}
                className={`   flex-none w-11/12 mr-8 overflow-hidden border  rounded-lg md:mr-4 md:pb-4`}
              >
                <div className=" ">
                  {edge.media.type == 'video' ? (
                    <VideoComp videoSrc={edge.media.url} />
                  ) : edge.media.type == 'pdf' ? (
                    <PDFcomp pdfs={edge.media.downloadLink}>
                      <img
                        className="object-cover shadow-md hover:shadow-xl "
                        src={edge?.media.url}
                        alt={edge?.media.url}
                      />
                    </PDFcomp>
                  ) : (
                    <Link href={edge.blogLink}>
                      <a target="_blank" rel="noreferrer">
                        <img
                          className="object-cover shadow-md hover:shadow-xl "
                          src={edge?.media.url}
                          alt={edge?.media.url}
                        />
                      </a>
                    </Link>
                  )}

                  <div
                    className={`w-full h-full flex justify-center align-center hover:bg-overlay group `}
                  >
                    <div className="hidden my-auto group-hover:block">
                      <button
                        type="button"
                        className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                      >
                        {'Learn More'}
                      </button>
                    </div>
                  </div>
                  {/* } */}
                </div>
                <ConditionalLinks //adds an optional <Link href={...}> tag around cards with a link
                  condition={edge.blogLink}
                  wrapper={(children) => (
                    <Link
                      href={edge.blogLink}
                      key={i}
                      className="m-0 p-0"
                    >
                      <a target="_blank" rel="noreferrer">
                        {children}
                      </a>
                    </Link>
                  )}
                >
                  <div className="px-4 py-2">
                    <div className="text-lg font-medium leading-6 text-center">
                      <h3 className="mt-4 mb-8 text-base font-semibold lg:font-bold text-sweet_blue">
                        {edge?.title}
                      </h3>
                    </div>
                    <div className="text-sm line-clamp-5 ">
                      <p className="text-center text-light_grey">
                        {edge?.text}
                        <a
                          href={edge?.textLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {' ' + edge?.textLink || null }
                        </a>
                      </p>
                    </div>
                  </div>
                </ConditionalLinks>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
