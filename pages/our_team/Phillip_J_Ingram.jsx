
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import HeroBanner from '../../components/layout/nav_bar/heroBanner'

const Header = ({ mobile, desk }) => {
  return (
    <div className={`${desk || mobile} `}>
      <span>
        <h2 className=" text-2xl md:text-3xl font-bold text-deep_blue ">
          {'Phillip .J Ingram'}
          {/* <span className="text-lg md:text-xl">{' CEH,CCI,MCITP,'}</span> */}
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

const PJingram = () => {
  const backgroundImg = '/img/philip_j_ingram.png';
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
                src="/img/philip_j_ingram.png"
                alt="philip .j ingram"
              />
            </div>

            <Header mobile={mobile} />

            <div className="mt-8 px-6 lg:text-lg">
              <p>
              Philip is a widely published journalist, specializing in the security and intelligence
              arenas who has built a long and senior career in British Military Intelligence, with
              years of experience in all aspects of intelligence and security as well as strategic planning.
              </p>

              <p>
              He presents and interview on screen, with the output being delivered to large organizations
                   such as INTERPOL. Philip have commentated for BBC TV News and Radio,
                   BBC Mundo, TRT World, CNN, ABC, CBC, Japanese NTV, RT.com and many others as
                   well as presenting INTERPOL World TV.
              </p>
            </div>
          </div>
          <div className="my-12 px-6 lg:text-lg">
            <p>
            He retain other business interests in the armored vehicle and specialist molecular detection,
                   and specialist Cyber Intelligence where he Chairs a company. He is frequently
                   quoted in the mainstream press.
            </p>

            <p>
                               His broad experience sets him up as a perfect chair for conferences and round-tables
                   and He have been a speaker at dinner events stirring up a little debate amongst the
                   diners where appropriate and at a number of high-level round-table and spotlight
                   events. He is a PTSD survivor.
            </p>

            <p>
                  Specialties: Journalism (print, online and video), business mentoring, marketing, risk
                  management, change management, SEO, writing, presenting, podcasting and interviewing;
                  with a splash of cyber security and cyber intelligence.
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PJingram;
