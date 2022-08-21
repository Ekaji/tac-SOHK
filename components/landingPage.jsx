/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';

const  backgroundImg = '/projects/mobile_home.png'


export default function LandingPage() {
  return (
    <section className="w-full">
      <div className={'h-[90vh] bg-fixed bg-center bg-cover bg-mobileBG lg:bg-desktopBG ' }>
        <div className='w-full h-full  flex flex-col mt-auto mb-auto items-center' style={{background: 'rgba(3, 2, 3, 0.49)' }}>
          <h1 className='text-center w-full bg- text-7xl flex flex-col my-auto poppins text-white font-bold z-50'
          >
            <p>School Of Hard</p>
            <p>Knocks Nigeria</p>
          </h1>
        </div>
      </div>
    </section>
  );
}
