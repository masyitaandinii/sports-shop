import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mizuno1Img from '../public/assets/projects/mizuno1.png';
import mizuno2Img from '../public/assets/projects/mizuno2.png'
import mizuno3Img from '../public/assets/projects/mizuno3.png'
import mizuno4Img from '../public/assets/projects/mizuno4.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-3xl text-center tracking-widest uppercase text-[#3389FF] mb-4'>
          Trending
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='MIZUNO MORELIA SALA CLASSIC TF-HIGH RISK RED/WHITE/SILVER'
            backgroundImg={mizuno1Img}
            projectUrl='/mizuno1'
            price='Rp 1.099.800'
          />
          <ProjectItem
            title='MIZUNO WAVE THUNDERSTORM-WHITE/HOT CORAL/801 C'
            backgroundImg={mizuno2Img}
            projectUrl='/mizuno2'
            price='Rp 799.840'

          />
          <ProjectItem
            title='MIZUNO MORELIA NEO III B JAPAN-BLUE CURACAO/GALAXY SILVER/BLUE CURACAO'
            backgroundImg={mizuno3Img}
            projectUrl='/mizuno3'
            price='Rp 3.999.800'

          />
          <ProjectItem
            title='MIZUNO WAVE CLAW NEO 2-BLUEFISH/WHITE/LIGHT ORANGE'
            backgroundImg={mizuno4Img}
            projectUrl='/mizuno4'
            price='Rp 1.619.820'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
