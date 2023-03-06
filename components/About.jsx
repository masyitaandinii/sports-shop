import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#DF0000]'>
            About Us
          </p>
          <p className='py-2 text-gray-600 text-20'>
          We makes a wide variety of sports equipment and sportswear for badminton, baseball, boxing, cycling, association football, gridiron football, 
          futsal, golf, judo, rugby, running, skiing, athletics, swimming, table tennis, tennis and volleyball.
          </p>
          <Link href='/#products'>
            <p className='py-2 text-[#DF0000] underline cursor-pointer'>
              Check out some of our product
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src="/assets/about.jpg" className='rounded-xl' alt='/' width='600' height='800'/>
        </div>
      </div>
    </div>
  );
};

export default About;
