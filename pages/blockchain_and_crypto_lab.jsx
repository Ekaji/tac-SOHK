/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx';

const BlockchainAndCryptoLab = () => {
  const backgroundImg = '/projects/blockchain.jpeg';

  return (
    <>
      <div className="w-full flex flex-col justify-center " >
        <HeroBanner
          text={'Blockchain And Crypto Lab'}
          bannerOverlay
          activeLink={'our lab'}
          backgroundImg={backgroundImg}
        />

        <div className=" flex flex-col items-center">
          <div className="w-[80vw]  " >
            <h1 className="font-bold text-primary text-lg mb-12">
              Blockchain And Crypto Lab
            </h1>
            <p className='text-base' >
              With the growing number of individuals using the
              internet for business transaction, meeting, learning,
              gaming etc. The need to have a shared database cannot be
              re-overemphasis. At TAC Africa we adopted Block chain &
              E- payment as one of our focus area to enable us and our
              partners research and develop a blueprint in the
              following:
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
            <div className='flex flex-col items-center'>
              <div className='flex flex-row flex-wrap items-stretch justify-between  mb-20 w-[80vw] space-y-12 md:space-y-0' >
                <div
                  className='overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-0 w-full md:w-5/12 rounded-lg'
                >
                  <div
                    className='capitalize w-full text-center bg-primary '
                  >
                    <h2 className='text-2xl font-semibold text-white py-2' >
                      initiative
                    </h2>
                  </div>
                  <ul className="leading-10 pl-4">
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Blockchain Regulation and Legal Issues
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Blockchain Against Corruption
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Practical Use of Blockchain Tokenomics
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Crypto Currency Forensics & Investigation
                      Methodology
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Blockchain Education And Research
                    </li>
                  </ul>
                </div>

                <div
                  className='overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] p-0 w-full md:w-5/12 rounded-lg'
                >
                  <div
                     className='capitalize w-full text-center bg-primary rounded-t-lg'
                  >
                    <h2 className='text-2xl font-semibold text-white py-2' >
                      stakeholders
                    </h2>
                  </div>
                  <ul className="leading-10 pl-4">
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      A&D Forensics
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Blockchain Council
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      African Blockchain User Group
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Cryptocurrency user council
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Blockchain Awareness Hub
                    </li>
                    <li>
                      <span className="text-sweet_blue font-semibold mr-2">
                        &#x2713;
                      </span>
                      Cryptocurrency Learning Infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center w-[80vw] lg:w-[60vw] mx-auto' >
          <h2 className='text-sweet_blue text-4xl font-semibold'>Get Involved</h2>
          <p className='text-lg'>
            TAC Africa is open for collaborations, funding and
            volunteers to make them reach a more mature stage. Help us
            to make them become a reality!
          </p>
          <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
            <span className='text-lg'>
              {'Join us today!'}
            </span>
          </button>
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
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <span className='text-lg'>
                {' '}
                {'AI For Social Good'}{' '}
              </span>{' '}
            </button>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <span className='text-lg'>
                {' '}
                {'AI Cyber Criminal Detection And Archival'}{' '}
              </span>{' '}
            </button>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <span className='text-lg'>
                {' '}
                {'Deep Dark Web Crawler Project'}{' '}
              </span>{' '}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainAndCryptoLab;
