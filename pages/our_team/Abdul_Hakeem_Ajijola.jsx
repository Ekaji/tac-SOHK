/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */



import HeroBanner from '../../components/layout/nav_bar/heroBanner'

const Header = ({ mobile, desk }) => {
  return (
    <div className={`${desk || mobile} `}>
      <span>
        <h2 className=" text-2xl md:text-3xl font-bold text-deep_blue ">
          {'Abdul Hakeem Ajijola'}
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

const Abdul_Hakeem_Ajijola = () => {
  const backgroundImg = '/img/Abdul-Hakeem-Ajijola.png';
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
                src="/img/Abdul-Hakeem-Ajijola.png"
                alt="Abdul-Hakeem-Ajijola"
              />
            </div>

            <Header mobile={mobile} />

            <div className="mt-8 px-6 lg:text-lg">
              <p>
              Abdul-Hakeem Ajijola (AhA), a global Cybersecurity resource is ranked #1 IFSEC 2020
                Global Cybersecurity professionals’ influencers and thought leaders list.
              </p>

              <p>
              He has attended several development programmes both in Nigeria and abroad including an
                  Executive Program on Science, Technology and Innovation Policy at the prestigious Harvard
                  University, John F. Kennedy School of Government. He also has special certifications
                  from the MIS Training Institute, Massachusetts MA, USA in Large Scale Computer Forensics,
                  Incident Response, International Security in the Interconnected World and The Forum
                  on Information Warfare.
              </p>
            </div>
          </div>
          <div className="my-12 px-6 lg:text-lg">
            <p>
            He is Certificated on Digital Forensics with Forensics Recovery Evidence Device (FRED) by
                  Digital Intelligence, Inc., USA, and Cyber Security Capability & Capacity Building certification
                  by Cybersecurity Malaysia. Abdul-Hakeem is the Chairman, Consultancy Support Services
                  (CS2) Ltd., a Cyber Security, eLibrary, and Information Communication Technology
                  Policy Consultancy Firm, in Abuja, Nigeria. He is working to kick-start the development of
                  an Africa Cybersecurity Economic sub sector employing thousands of knowledge workers,
                  below 35 years of age, who will profitably drive Cybersecurity solutions value chains.
            </p>

            <p>
            He is also:
                - Chair, Nigerian National Cybersecurity Policy and Strategy review committee,
                - Chair, Nigeria Computer Society, Cybersecurity Advisory Group.
                - Member, Presidential Committee on the Development of National Broadband Plan.
                - Member, Group of Experts for the Nigerian Senate Committee on Cybersecurity, and ICT.
                - Resource person, National Defence College, Abuja.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abdul_Hakeem_Ajijola;
