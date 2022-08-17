/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import HeroBanner from '../../components/layout/nav_bar/heroBanner'


const Header = ({ mobile, desk }) => {
  return (
    <div className={`${desk || mobile} `}>
      <span>
        <h2 className=" text-2xl md:text-3xl font-bold text-deep_blue ">
          {'Prof Boniface K Alese'}
        </h2>
      </span>
      <span>
        {/* <h2 className=" text-xl font-semibold text-deep_blue">{'CEO'}</h2> */}
      </span>
      <span>
        <h1 className=" font-bold text-3xl md:text-4xl mb-2 md:mb-12 text-sweet_blue">
          {/* {'Technology Against Crime Initiative, Africa (TAC Africa)'} */}
        </h1>
      </span>
    </div>
  );
};

const Prof_Boniface_K_Alese = () => {
  const backgroundImg = '/img/Professor_B.K._Alese.png';
  const desk = 'hidden lg:block mx-auto w-screen w-5/6';
  const mobile = 'block lg:hidden w-screen mt-4 px-3';

  return (
    <>
      <HeroBanner
        bannerOverlay
        activeLink={'Advisory Board'}
        text={'Advisory Board'}
        backgroundImg={backgroundImg}
      />
      <div className="w-screen  ">
        <div className="md:m-8 container">
          <Header desk={desk} />

          <div className="flex flex-col lg:flex-row mt-12 w-full">
            <div className="w-screen ">
              <img
                className="object-fit md:mt-12"
                src="/img/Professor_B.K._Alese.png"
                alt="Professor B.K. Alese"
              />
            </div>

            <Header mobile={mobile} />

            <div className="mt-8 px-6 lg:text-lg">
              <p>
                 Prof B. K. Alese is a Professor of Information and Cyber Security with over two decades
                 of teaching, research and community service experience. He holds a PhD degree in
                 Computer Science with specialization in Information Security from The Federal University
                 of Technology Akure in 2004.
               </p>

               <p> 
                 He started his academic career in 1998 at the Federal University of Technology, Akure
                 and rose to become a full Professor in 2014. He has successfully supervised 18 PhD as
                 a Major Supervisor and 27 as a Co-Supervisor apart from many others at Masters level.
               </p>

               <p>
                 He has held different positions in the University such as Head of Department, Associate
                 Director and Dean of Students’ Affairs. He has mentored and led students of the
                 University to win laurels in IT related competitions at both local and International
                 levels.
               </p>
            </div>
          </div>
          <div className="my-12 px-6 lg:text-lg">
               <p>
                 He is visiting Professor to the University of Mines and Technology, Tarkwa, Ghana. He
                 is the President of Technology Against Crime, Cybercrime Expert Group, Africa Sub
                 Region. He is member of various Professional bodies both locally and internationally
                 such as , Nigeria Computer Society, Institute of Electrical and Electronics Engineering
                 (Computer Society) New York, Association for Computing Machinery; New York,
                 Computer Professional of Nigeria (CPN), Cyber Security Experts Association of Nigeria,
                 Information Systems Security Association, Virginia, United States, Information
                 Systems Audit and Control Association, United States of America, Cyber Peace Foundation,
                 Cyber Peace Corps and Technology Against Crime, Africa Sub-Region.
               </p>
               <p>
                  He was member of National University Commission BMAS drafting Committee for
                 Cyber Security and Information Technology courses of study in Nigeria.
               </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prof_Boniface_K_Alese;

