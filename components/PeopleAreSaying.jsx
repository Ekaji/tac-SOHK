/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';

export default function PeopleAreSaying() {
    return(
        <>
        <div className="flex flex-col py-4 capitalize h-[110] lg:h-screen bg-[#FFC600]">
          <div className='flex flex-col w-[90vw] mx-auto lg:flex-row justify-center  pt-11 '>
            <div className='lg:w-5/12 '>
              <h2 className="text-sweet_blue mt-5 mb-8 font-bold  text-6xl">
                <span className="text-primary uppercase text-4xl ">
                  {'what people are saying'}
                </span>
              </h2>

              <p className='text-xl text-black'>
              “Tennis didn't exist in my world until I heard of SOHK. I decided to explore the possibility of actually playing. Now I am in the court and having the time of my life. I am very grateful to SOHK for helping me discover a sport I can play well into my golden years.”
              </p>
              <q className='font-bold text-primary '>— Student, Wale Martins</q>

            </div>
            {/* <div> */}
              <img 
              className='h-[80vh]  lg:ml-5 object-contain lg:object-fill'
              src="https://res.cloudinary.com/tacafrica/image/upload/v1660567202/my_folder/int%20youth%20day/1-2208130054_rfth9t.jpg" alt="" />

            {/* </div> */}
          </div>

        </div>
        </>
    )
}