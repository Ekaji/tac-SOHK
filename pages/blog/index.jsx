/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// pages/index.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../util/supabase'
import { Button } from "@supabase/ui";
import { useRouter } from 'next/router'


const data = [
    {
        title: 'Interpol Provides EFCC With App To Track Terrorism Financing',
        excerpt: 'The International Criminal Police Organisation, (Interpol) has provided the Economic and Financial Crimes Commission...',
        link: '/blog/Interpol-Provides-EFCC-With-App-To-Track-Terrorism-Financing',
        image: 'https://res.cloudinary.com/tacafrica/image/upload/v1657884959/my_folder/blog/kow12gwqorfnbwuh4ulr.jpg',
        category: 'News'
    },
    {
        title: 'Nigeria uses emerging tech for crime monitoring',
        excerpt: 'If Nigeria does not adopt these technologies at the earliest, then the bad guys will outpace us, says Jerry Innocent Akubo',
        link: '/blog/nigeria-uses-emerging-tech-for-crime-monitoring',
        image: '/blog/uav.jpg',
        category: 'News'
    },
    {
        title: 'TAC boosts african security with venture fund in partnership with silicon valley based gsd ventures',
        excerpt: 'TAC Africa and GSD Venture Studios have joined together to assemble a fund to stimulate growth',
        link: '/blog/tac-boosts-african-security-with-venture-fund-in-partnership-with-silicon-valley-based-gsd-ventures',
        image: '/blog/drone.jpg',
        category: 'News'
    },
    {
        title: 'About TAC NGO Africa - Using Drones to Boost Nigeria’s Development & Accelerate Transition within Nigeria and the African Continent At Large',
        excerpt: 'TAC NGO Africa is a futurist oriented NGO with the sole aim of protecting Public Space ',
        link: '/blog/tac-ngo-africa-using-drones-boost-nigerias-within-nigeria',
        image: '/blog/drone.jpg',
        category: 'News'
    },
    {
        title: 'suspected head of cybercrime gang arrested in nigeria',
        excerpt: 'The cybercrime unit of the Nigeria Police Force arrested a 37-year-old Nigerian man in an international operation spanning four continents coordinated and facilitated by the recently created Africa operations desk',
        link: '/blog/suspected-head-of-cybercrime-gang-arrested-in-nigeria',
        image: '/blog/interpol.jpg',
        category: 'News'
    },
]



export default function Home() {
  const [posts, setPosts] = useState([])

  return (
    <div style={{paddingTop: '5vh'}} >
      <h1 className="text-3xl text-center font-semibold tracking-wide mt-6 mb-2 capitalize ">Welcome to our Blog</h1>
     <section>
            <div className="m-4 flex flex-wrap items-stretch grow">
                {
                    data.map((post, i) => (
                <div key={i} className="p-4 md:w-6/12 lg:w-1/3 flex ">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src={post.image} alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-green-800 bg-green-200 rounded">{post.category}
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">{post.title}</h1>
                            <p className="mb-1 text-sm tracking-wide text-gray-700">{post.excerpt}</p>
                            <div className="flex items-center ">
                                <Link href={post.link}>
                                    <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                        More

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokWidth="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    ))
                }


            </div>
        </section>
    </div>
  )
}