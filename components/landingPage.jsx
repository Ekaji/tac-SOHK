/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';

const  backgroundImg = '/projects/mobile_home.png'

// const backgroundImg = '/public/projects/mobile_home.png'

export default function LandingPage() {
  return (
    <section className="w-full">
      <div className={'h-[90vh] bg-fixed bg-center bg-cover bg-mobileBG lg:bg-desktopBG' }>
        <div className='h-[90vh] flex flex-col mt-auto mb-auto items-center'>
          <h1 className='text-center text-7xl flex flex-col my-auto poppins text-sweet_blue font-bold' 
          // style={{webkitTextStroke: '3px ', webkitTextFillColor: 'white'}} 
          >
            <p >School</p>
            <p>Of Hard</p>
            <p>Knocks</p>
            <p>Nigeria</p>
          </h1>
        </div>
      </div>
    </section>
  );
}
