/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx';

const TechForSocialGood = () => {
  const backgroundImg = '/community/5.jpg';

  return (
    <>
      <div className="w-full flex flex-col justify-center ">
        <HeroBanner
          text={'Drone And Counter Drone'}
          bannerOverlay
          activeLink={'Technology for social Good'}
          backgroundImg={backgroundImg}
        />

        <div className=" flex flex-col items-center">
          <div className="w-[80vw]  ">
            <h1 className="font-bold text-primary text-lg mb-12">
              Technology for social Good
            </h1>
            {/* <h2 className={ styles.background_header } >A Phenomenal Stratedy </h2>  */}
            <p className="text-base">
              {' '}
              Technology for social good can provide mechanism for
              people to access or use technology in an open, cost
              efficient, and sustainable way. We believe that
              technology does not have intrinsic value; its value lies
              in its application, which social, political and economic
              power structures dictate
            </p>
          </div>
        </div>

        <div className="">
          <div className="text-center">
            <h2 className="text-primary font-semibold text-4xl mb-2 mt-14">
              Our work in this space
            </h2>
            <p className="text-base ">
              As one of our pillars in TAC Africa, we are actively
              involved in the space
            </p>
          </div>

          <div className="my-28">
            <div className="flex flex-col items-center">
              <div className="flex flex-row flex-wrap items-stretch justify-between  mb-20 w-[80vw] space-y-12 md:space-y-0">
                <div className="overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-0 w-full md:w-5/12 rounded-lg">
                  <div className="capitalize w-full text-center bg-primary ">
                    <h2 className="text-2xl font-semibold text-white py-2">
                      initiative
                    </h2>
                  </div>
                  <ul className="leading-10 pl-4">
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Sporting activities
                    </li>
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Technology clubs
                    </li>
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Mentoring and Coaching services
                    </li>
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Relaxation and Events{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Office on the go{' '}
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] p-0 w-full md:w-5/12 rounded-lg">
                  <div className="capitalize w-full text-center bg-primary rounded-t-lg">
                    <h2 className="text-2xl font-semibold text-white py-2">
                      stakeholders
                    </h2>
                  </div>
                  <ul className="leading-10 pl-4">
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Open air Gym
                    </li>
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Nigeria Flying Labs{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>{' '}
                      Garuda Robotics{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-20 mx-auto flex flex-col items-center justify-center">
          <h2 className="text-sweet_blue text-4xl font-semibold">
            Ongoing Projects
            <span className="text-primary ml-2">In The Field</span>
          </h2>
          <p className="text-base">
            As one of our pillars in TAC Africa, we are actively
            involved in the space.
          </p>
          <div className="mx-auto flex flex-col">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {' '}
              <span className="text-lg">
                {' '}
                {'Lawn Tennis Tournament'}{' '}
              </span>{' '}
            </button>

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {' '}
              <span className="text-lg">
                {' '}
                {'Chess Tournament'}{' '}
              </span>{' '}
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {' '}
              <span className="text-lg">
                {' '}
                {'Taekwondo Training'}{' '}
              </span>{' '}
            </button>

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {' '}
              <span className="text-lg">
                {' '}
                {'Swimming Competition'}{' '}
              </span>{' '}
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {' '}
              <span className="text-lg">
                {' '}
                {'Scrabble and Word games'}{' '}
              </span>{' '}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechForSocialGood;
