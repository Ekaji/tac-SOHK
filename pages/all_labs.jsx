/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import Link from 'next/link';
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {
    title: 'Cyber Security & Cyber Defense', //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
    image: '/projects/cyber_security.jpeg',
    text: 'The emergence of the internet has no doubt enhance the way we live, work, socialize and transact business to a great extent but cyber criminals are taking un-due advantage...',
    link: '/cyber_security_and_cyber_defense',
  },
  {
    title: 'Artificial Intelligence And Robotics',
    image: '/projects/ai_and_robotics.jpg',
    text: 'AI & Robotics is an emerging technology that is gradually making traditional complex task easier through the use of Artificial Intelligence-controlled Robots (AI) AI – algorithm in the actual world and allows it to interact with materials in real time',
    link: '/artificial_intelligence_and_robotics',
  },
  {
    title: 'Blockchain And Cryptocurrency',
    image: '/projects/blockchain.jpeg',
    text: 'With the growing number of individuals using the internet for business transaction, meeting, learning, gaming etc. The need to have a shared database cannot be overemphasized.',
    link: '/blockchain_and_crypto_lab',
  },
  {
    title: 'Drone & Counter Drone',
    image: '/projects/drone.jpeg',
    text: 'The future of aviation is gradually being powered by unmanned Aerial Vehicles if the good guys don’t get involve on time the bad guys would..',
    link: '/drone_and_counter_drone',
  },
  {
    title: 'Technology For Social Good',
    image: '/community/5.jpg',
    text: 'Technology for social good can provide mechanism for people to access or use technology in an open, cost efficient, and sustainable way. We believe that technology does not have intrinsic value; its value lies in its application, which social, political and economic power structures dictate',
    link: '/tech_for_social_good'
  }
];

const All_labs = () => {
  const backgroundImg = '/team/labs.jpg';

  return (
    <>
      <HeroBanner
        activeLink={'discover'}
        bannerOverlay
        text={'All Labs'}
        backgroundImg={backgroundImg}
      />

      <div className="pt-12 pb-20 ">
        <div className="py-5 w-[80vw] my-0 mx-auto text-lg">
          <p>
            Today’s crime are increasingly complex. They are
            interconnected and global, and they take place on both
            physical and virtual levels. More than ever, there is need
            for multilateral police cooperation to address the
            security challenges facing the continent.
          </p>
          <p>
            TAC’s role is to enable Law Enforcement Agencies to work
            together to fight these evolving challenges and make the
            continent a safer place.
          </p>
          <p>
            We provide secure access to training, capacity building,
            oversea travels including operational and forensic support
            and analysis services through partnership, collaboration
            and Technology Exchanges for LEA’s.
          </p>
          <p>
            All these Law Enforcement capabilities are delivered
            globally and support three global programs against the
            issues that we consider to be the most pressing today;
            counter-terrorism, cyber-crime, and organized and emerging
            crime.
          </p>
        </div>

        <div className="text-center w-[80vw] my-0 mx-auto">
          {/* <Carousel /> */}

          <div className="flex-grow w-full md:px-3 py-4 mx-auto sm:py-16">
            <div className="w-full lg:mx-auto ">
              <div className="my-8 ">
                <div
                  id="scrollContainer"
                  className="flex flex-wrap items-stretch  pb-6 mb-8 scrolling-touch"
                >
                  {data.map((edge, i) => (
                    <div
                      key={i}
                      className={`w-full overflow-hidden mr-3 border rounded-lg md:w-[45%] lg:w-[30%] md:pb-4 mb-8`}
                    >
                      <Link href={edge?.link || '/'}>
                        <a className="space-y-4">
                          <div className="aspect-w-16 aspect-h-9 ">
                            <img
                              className="object-cover shadow-md hover:shadow-xl "
                              src={edge?.image}
                              alt={edge?.image}
                            />
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
                          </div>
                          <div className="px-4 py-2">
                            <div className="flex text-lg font-medium leading-6 lg:h-11 text-center">
                              <h3 className=" text-base font-semibold  m-auto lg:font-bold text-sweet_blue">
                                {edge?.title}
                              </h3>
                            </div>
                            <div className="text-sm line-clamp-3 mt-4">
                              <p className="text-center text-light_grey">
                                {edge?.text}
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default All_labs;
