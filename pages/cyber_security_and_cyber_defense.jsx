/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Cyber_Security_And_Cyber_Defense = () => {


  const backgroundImg =  "/projects/cyber_security.jpeg"

  return(
    <>
      <div className="w-full flex flex-col justify-center ">
        <HeroBanner text={'Cyber Security And Cyber Defense'} bannerOverlay activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <div className=" flex flex-col items-center">
          <div className="w-[80vw]  " >
            <h1 className="font-bold text-primary text-lg mb-12">
            Cyber Security And Cyber Defense</h1>
          <p className='text-base' >
          The emergence of the internet has no doubt enhance the way we live, work, socialize and transact  business to a great extent but cyber criminals are taking un-due advantage of the opportunity created by the internet to lunch attack on netizens through the deployment of ransom ware, stalker wares, virus etc. As one of our cardinal focus area; we are poised to help law enforcement agents on:</p>
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
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> Ethical AI </li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> AI for Justice </li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> AI for Social Good</li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> Policy and Strategy on Artificial Intelligence</li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> Research and Innovation in Policing</li>
                </ul>
                  {/* </div> */}
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
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> UNICRI  </li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> Africa Cyber Defense Forum (Kenya) </li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> Cyber Peace Foundation (India) </li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> Nigeria Flying Labs (Nigeria) </li>
                  <li> <span className="text-sweet_blue font-semibold mr-2">&#x2713;</span> Garuda Robotics (Singapore) </li>
                </ul>
                  {/* </div> */}
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

              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            > <span className='text-lg'> {'Cyber Peace Corps'} </span> </button >

              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            > <span className='text-lg'> {'Project Chakraview'} </span> </button >

              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            > <span className='text-lg'> {'Cyber Security handbook for Senior Secondary & Tertiary Institution'} </span> </button >

              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            > <span className='text-lg'> {'Cyber Security handbook for Primary & Junior Secondary School'} </span> </button >
            
          </div>
        </div>

       
      </div>
    </>

  )
}

export default Cyber_Security_And_Cyber_Defense ;
