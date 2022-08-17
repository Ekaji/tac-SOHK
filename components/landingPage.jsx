/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';

const backgroundImg = 'https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg'

export default function LandingPage() {
  return (
    <section className="w-full">
      <div className="h-[90vh] bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${backgroundImg})`,}}>
        
      </div>
    </section>
  );
}
