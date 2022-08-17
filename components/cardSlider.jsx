/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';

const CardSlider = ({ text3, text2, text1 }) => {
  const data = [
    {
      title: "Cyber Security & Cyber Defense", //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      image: "/projects/cyber_security.jpeg",
      text: "The emergence of the internet has no doubt enhanced the way we live, work, socialize and transact business to a great extent but cyber criminals are taking un-due advantage...",
      link: "/cyber_security_and_cyber_defense",
    },
    {
      title: "Drone & Counter Drone",
      image: "/projects/drone.jpeg",
      text: "The future of aviation is gradually being powered by unmanned Aerial Vehicles if the good guys don’t get involve on time the bad guys would.",
      link: "/drone_and_counter_drone",
    },
    {
      title: "Blockchain And Cryptocurrency",
      image: "/projects/blockchain.jpeg",
      text: "With the growing number of individuals using the internet for business transaction, meeting, learning, gaming etc. The need to have a shared database cannot be overemphasized.",
      link: "/blockchain_and_crypto_lab",
    },
    {
      title: "Artificial Intelligence And Robotics",
      image: "/projects/ai_and_robotics.jpg",
      text: "AI & Robotics is an emerging technology that is gradually making traditional complex task easier through the use of Artificial Intelligence-controlled Robots (AI) AI – algorithm in the actual world and allows it to interact with materials in real time",
      link: "/artificial_intelligence_and_robotics",
    },
    {
      title: "Technology For Social Good",
      image: "/community/5.JPG",
      text: "We work on independent multi-disciplinary academic research and teach open and issue-oriented debate and evidence-based policymaking around new technologies like Cybersecurity, Artificial Intelligence",
      link: "/tech_for_social_good",
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
      <div className="pt-12 pb-20 mx-auto my-0 xl:px-12">
        <div className="flex justify-Center items-center  py-4 mx-auto capitalize">
<h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-6xl text-center">

            {" "}
            {text1 ? text1 : "Our"}{" "}
            <span className="text-primary font-bold text-6xl ">{text2}</span>
          </h2>
        </div>
        <div className="pl-4 pb-8 ">
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
                className="flex-none w-11/12 mr-8 overflow-hidden  border rounded-lg md:mr-4 md:pb-4 "
              >
                <Link href={edge.link}>
                  <a className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9 ">
                      <img
                        className="object-cover shadow-md hover:shadow-xl "
                        src={edge?.image}
                        alt={edge.image}
                      />
                      <div
                        className={`w-full h-full flex justify-center align-center hover:bg-overlay group `}
                      >
                        <div className="hidden my-auto group-hover:block">
                          <button
                            type="button"
                            className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                          >
                            {"Learn More"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2">
                      <div className="text-lg font-medium leading-6 text-center">
                        <h3 className=" max-h-10 text-base font-semibold lg:font-bold text-sweet_blue">
                          {edge?.title + " " + text3}
                        </h3>
                      </div>
                      <div className="text-sm line-clamp-3">
                        <p className="text-center max-h-fit text-light_grey">
                          {edge?.text}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex justify-center">
          <Link href={"/all_labs"}>
            <a className="">
              <button
                type="button"
                className="text-blue-700  w-40  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                ALL LABS
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
