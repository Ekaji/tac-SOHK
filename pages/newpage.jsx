/* eslint-disable react/jsx-key */
const NewPage = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden ">
        {/* here */}
      </div>
      <div className="lg:w-5/12 mx-auto lg:my-auto">
        <div>
          <h2 className="text-sweet_blue font-bold text-xl my-3">
            {/* Institute For Remotely Piloted Aircraft Systems (IRPAS) */}
          </h2>
          <p className="text-xs  lg:text-base 2xl:text-xl">
            Today’s crime are increasingly complex. They are
            interconnected and global, and they take place on both
            physical and virtual levels. TAC Africa is positioned as a
            Center of Excellence where peer reviewed research and
            development on emerging crimes and criminalities are
            unraveled and documented to help Law Enforcement prevent,
            detect and Investigate organized crimes. If you are a Law
            Enforcement Agent, Researcher, Academia, Original
            Equipment Manufacturers in the areas of Drone &
            Counter-drone, AI & Robotics, Blockchain & Cryptocurrency,
            Cyber Security & Cyber Defense kindly write us at
            Secretariate@tacafrica.org or drop by our website
            www.tacafrica.org to download and contribute to our
            ongoing compendium.
          </p>
        </div>

        {/* <div>
        <Link href={'/irpas'}>
          <a>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Read More
            </button>
          </a>
        </Link>
      </div> */}
      </div>
    </div>
  );
};

export default NewPage