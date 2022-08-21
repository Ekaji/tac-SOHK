/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';

export default function PeopleAreSaying() {
    return(
        <>
        <div className="flex flex-col w-[90vw] py-4 mx-auto capitalize h-screen ">
          <div className='lg:ml-4 flex'>
            <div className='lg:w-5/12 '>
              <h2 className="text-sweet_blue mt-5 mb-8 font-bold lg:ml-4 text-6xl">
                <span className="text-primary text-4xl ">
                  {'what people are saying'}
                </span>
              </h2>

              <p className='text-xl'>
              “The impact SOHK had on my son’s 
              wellbeing is amazing, I take my hat 
              off for you guys. Whatever you doing 
              please don’t stop doing the wonderful 
              work and time that you putting into 
              your project. Thank You from the 
              bottom of my heart, you made a big 
              change into my son’s life..”
              </p>
              <q className='font-bold text-black'>— Parent, Harold Cressy</q>

            </div>
            {/* <div> */}
              <img 
              className='h-[80vh]  lg:ml-5 object-fill'
              src="https://res.cloudinary.com/tacafrica/image/upload/v1660567202/my_folder/int%20youth%20day/1-2208130054_rfth9t.jpg" alt="" />

            {/* </div> */}
          </div>

        </div>
        </>
    )
}