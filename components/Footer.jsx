import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#d1d5db] text-white">
	<div className="container flex items-center justify-center flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">
            <a
              href='https://www.linkedin.com/in/masyita-andini-larasati-192b73263/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-black'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/masyitaandinii'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-black'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://www.instagram.com/masyitaandinii/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-black'>
                <FaInstagram />
              </div>
            </a>
			</div>
		</div>
	</div>
    <div className="flex items-center justify-center px-6 pt-5 pb-5 text-sm">
		<span className="dark:text-gray-400">© Masyita Andini Larasati.</span>
	</div>
</footer>
  );
};

export default Footer;
