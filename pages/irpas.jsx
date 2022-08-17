/* eslint-disable react/jsx-key */
import { useState } from 'react'
import Link from "next/link"
import FormModal from '../components/formModal'

const Irpas = () => {

  const [ modalShow, setModalShow] = useState(false)


  return (
    <>
      <FormModal PDF={'/pdf/IRPAS_PROSPECTUS_76_PAGES_PDF_FORMAT.pdf'} modalShow={modalShow} setModalShow={setModalShow} />
      <div className="bg-gray-100 font-sans leading-normal tracking-normal ">
        <div className="container w-full md:max-w-3xl mx-auto pt-20 ">
          <div
            className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal pb-40"
          >
            <div className="font-sans">
              <h1 className="text-2xl md:text-3xl font-bold text-deep_blue">
              INSTITUTE FOR REMOTELY PILOTED AIRCRAFT SYSTEMS
              </h1>
            </div>
            <div className="py-6 font-sans"> 
              Institute for Remotely Piloted Aircraft System was
              conceived to address the growing demand for digital
              transformation. Our goal is to be the first Remotely
              Piloted Aircraft training and assessment organization in
              Nigeria. 
              <br className='mb-4'/>
              Our mission is to ensure that the training and
              licensing of professional RPAS Pilot In Nigeria is
              conducted with the highest standard to meet global
              standard practice. Our vision is to serve as the
              Pacesetters Research and Development Institute in the bar
              was of Drone and Counter Drone systems. 
              <br className='mb-4' />
              
              Our Modus-
              Operandi is by active collaboration and strategic
              partnership with global drone and counter-drone subject
              matter experts, Academia, Industry leaders , Original
              equipment manufacturers including National and
              International regulatory bodies with more than Ten (10)
              thousand drone pilot aircraft deficit to be filled in the
              drone industry in the next five (5) years. 
              <br className='mb-4' />
              
              We are
              providing the most robust platform for regulatory agencies
              ,industries and students to have a comprehensive
              understanding of the equipment and knowledge of the
              current regulations in order to inculcate the
              international best practice and standard operating
              procedure to monitor drone operations within the country.
              <br className='mb-4' />

              Remotely Piloted Aircraft systems are playing an ever more
              important part in operations for both commercial industry
              as well as government. Drones are used in a variety of
              industries. Aerial footage, Constructions, Surveys,
              Environment observations, Security monitoring, Search and
              Rescue, Package delivery and Logistics, Emergency
              services, Agriculture and Forestry, Photography,
              Videography, Entertainment, and so much more. 
              <br className='mb-4' />
              Drone
              Technology is changing the world we we are a big part of
              that change. Institute for Remotely Piloted Aircraft
              System Abuja.
            
            </div>
              <a
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={ () => setModalShow(!modalShow)}
                >
                  Download Brochure
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
          </div>

        </div>
      </div>
    </>
  );
};

export default Irpas;
