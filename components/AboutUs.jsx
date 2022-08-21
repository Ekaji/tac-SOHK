/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className='flex flex-col justify-center mx-auto w-[90vw] lg:w-5/12 lg:h-[80vh]'>
      <h2 className='text-primary font-bold text-4xl text-center'>About Us</h2 >
      <p className='text-xl text-center'>School of Hard Knocks uses sport, a research-based curriculum and in-depth mentoring to help people improve their  physical and mental well-being.
              </p>
              <div className='flex justify-center w-full'>
                <Link href="/blog">
                  <a  >
                    <button
                      type="button"
                      className="capitalize text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 2xl:text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {'Learn More'}
                    </button>
                  </a>
                </Link>
              </div>
    </div>
  )
}
