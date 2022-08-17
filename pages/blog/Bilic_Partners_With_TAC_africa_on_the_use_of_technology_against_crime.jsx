/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import VideoComp from '../../components/videoPlayer/video'
const Page = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div
          className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
          style={{ fontFamily: 'Georgia,serif' }}
        >
          <div className="font-sans">
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              Bilic Partners With TAC Africa on the use of technology
              Against Crime.
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              July 10, 2022{' '}
            </p>
          </div>
          {/* <div className='w-11/12'> */}
          <img
            className="w-full"
            src="/partnership/blic_tac.jpg"
            alt="blic_TAC"
          />
          {/* </div> */}
          <div className="py-6 ">
            <p className="font-sans break-normal  pt-8 pb-2 text-xl md:text-2x">
              Bilic celebrates a brilliant and exciting new
              partnership with Technology Against Crime (TAC), a
              foremost non-governmental entity under the patronage of
              the Ministry of Interior and INTERPOL, connecting law
              enforcement, subject matter experts, and civil societies
              to solve issues around crimes.
            </p>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              Today, blockchain security is faced with a myriad of
              problems and the lack of synergy and cohesion is a
              hindering factor to successfully curbing crimes on the
              blockchain. Anti money laundering monitoring, crime
              detection and prevention is gravely hit by brick walls
              as a result of this. Bilic and TAC are collaborating
              together in many ways to mitigate these challenges Birth
              of a strategic partnership
            </p>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              TAC Africa through her collaborations and partnerships
              curates and develops projects to help organizations and
              institutions benefit from emerging technologies. Bilic
              is strategically partnering with TAC to fulfill one of
              the numerous sub-branches of TAC in Africa and beyond.
            </p>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              TAC Africa is wholly committed to developing{' '}
              {`Africa's`} Economic and Security space through Digital
              Specialized Skills and Capacity building for Academia,
              Law Enforcement Agencies, Government Organizations and
              individuals by serving as a catalyst through which
              Emerging Technological Solutions could be taught in a
              structured and easy to learn methodology.
            </p>

            <h2 className="font-bold font-sans break-normal text-gray-900 pt-8 pb-2 text-xl md:text-2xl">
              Birth of a strategic partnership
            </h2>
            <p className="font-sans break-normal">
              TAC Africa through her collaborations and partnerships
              curates and develops projects to help organizations and
              institutions benefit from emerging technologies. Bilic
              is strategically partnering with TAC to fulfill one of
              the numerous sub-branches of TAC in Africa and beyond.
            </p>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              TAC Africa is wholly committed to developing{' '}
              {`Africa's`} Economic and Security space through Digital
              Specialized Skills and Capacity building for Academia,
              Law Enforcement Agencies, Government Organizations and
              individuals by serving as a catalyst through which
              Emerging Technological Solutions could be taught in a
              structured and easy to learn methodology.
            </p>

            <div>
              <img
                className="w-full"
                src="/community/blockchain_And_crypto.png"
                alt="underground_economy"
              />
              <Link href={'/pdf/Crypto_Brochure_Revamp.pdf'}>
                <a>
                  <button
                    type="submit"
                    value="submit"
                    className="text-white my-4 font-sans bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Read More
                  </button>
                </a>
              </Link>
            </div>

            <div className='my-4'>
              <VideoComp videoSrc={'/video/TAC_AFRICA_MAIN_COMP.mp4'}  />
            </div>

            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              Changes in technology, society, and the law make new
              crimes possible. Attitudes are changing too. The
              implications of these shifts are complex. This is seen
              in the way law enforcement and businesses have had to
              adapt to deal with risks and opportunities presented by
              an ever-changing digital environment.
            </p>

            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              <i>
                “The strategic partnership pact with Bilic is to build
                Cyber capacity, blockchain and crypto currency
                investigation capabilities for Academia, Law
                Enforcement Agencies and relevant stakeholders within
                the African region. We believe this will curb the
                brazen audacity with which technologically aided
                crimes are carried out within the region.”
              </i>
              <br />
              <div className="mt-2">
                <b>
                  –Dr. Jerry Akubo, Founder & CEO, TAC NGO Africa.
                </b>
              </div>
            </p>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x" >
              The shared interest between Bilic and TAC Africa in the
              first against crime cannot be overemphasized. TAC and
              Bilic are collaborating on multiple fronts, including;
            </p>
            <ul className='font-sans'>
              <li> - Blockchain Intelligence Sharing </li>
              <li> - AML investigative and defense tools </li>
              <li> - A dedicated crypto crime desk </li>
            </ul>

            <p className="font-sans break-normal pb-2 text-xl md:text-2x" >
              {`Bilic’s partnership with TAC will herald a paradigm
              shift in curbing blockchain related crimes. It's a
              feat that will help both entities enormously.`}
            </p>
            <h2 className="font-bold font-sans break-normal text-gray-900 pt-8 pb-2 text-xl md:text-2xl">
              {' '}
              About Bilic
            </h2>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              <a
                href="http://www.Bilic.io"
                target="_blank"
                rel="noreferrer"
              >
                Bilic.io
              </a>{' '}
              is a blockchain forensics and Data Analytics platform
              offering products to help defence agencies, government
              agencies, intelligence agencies and financial
              institutions investigate to detect and prevent crimes on
              the blockchain.
            </p>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              Bilic provides world class capabilities in AML
              compliance, data analytics, funds recovery, cyber
              security, blockchain investigation and a managed
              intelligence with a core mission to help as many
              individuals & entities as possible prevent and
              investigate crimes Bilic has a community pool of
              on-chain experts, developers, and end-users who track,
              investigate and solve Blockchain-related crimes. Simply
              put, help companies recover their funds at a faster rate
              and with stronger expertise.
            </p>

            <h4> Links</h4>
            <ul className="font-sans">
              <li>
                <a
                  href="https://youtu.be/mO9-S74hS2o"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Bilic
                </a>
              </li>
              <li>
                <a
                  href="https://www.docdroid.net/cZS9S6f/bilic-brochure-pitch-updated-pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Product Brochure
                </a>
              </li>
              <li>
                <a
                  href="https://www.docdroid.net/gy53P7y/bilic-busines-plan-public-pdf#page=10"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pitch Deck
                </a>
              </li>
              <li>
                <a
                  href="https://osf.io/dbf4n/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Research Thesis
                </a>
              </li>
            </ul>

            <h2 className="font-bold font-sans break-normal text-gray-900 pt-8 pb-2 text-xl md:text-2xl">
              {' '}
              <Link href={'https://tacafrica.org'}>
                <a> About TAC Africa</a>
              </Link>
            </h2>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              TAC NGO AFRICA was born out of an International Forum on
              Technologies, a high level meeting dedicated to
              “Technology for a Safer world. The first two editions
              were held in Lyon France, in April 2013 and April 2016
              respectively under the patronage of the Ministry of
              Interior and INTERPOL.
            </p>
            <p className="font-sans break-normal pb-2 text-xl md:text-2x">
              Essentially, a non-governmental, bipartisan
              organization, connecting law enforcement, subject matter
              experts, and civil society to solve issues that affect
              the society. Tac Africa is mission driven on the
              transformation of law enforcement agency and judiciary.
              Making them more technologically enabled and geared
              towards solving problems through policy advocacy,
              research, training and capacity building and
              volunteering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
