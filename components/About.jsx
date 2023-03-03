import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.JPG';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#DF0000]'>
            About Me
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          My full name is Masyita Andini Larasati. I live in Malang and was born in Makassar, on September 21, 2005. 
          I like everything about sports, especially volleyball. 
          I don&apos;t have much knowledge about the world of programming yet but I am interested in the IT world. 
          Moreover, I am also deepening my skills in photography and graphic design
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#DF0000] underline cursor-pointer'>
              Check out some of my portofolio.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
