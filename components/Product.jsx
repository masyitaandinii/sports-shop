import React from 'react';
import mizuno1Img from '../public/assets/projects/mizuno1.png';
import mizuno2Img from '../public/assets/projects/mizuno2.png'
import mizuno3Img from '../public/assets/projects/mizuno3.png'
import mizuno4Img from '../public/assets/projects/mizuno4.png'
import mizuno5Img from '../public/assets/projects/mizuno5.png'
import mizuno6Img from '../public/assets/projects/mizuno6.png'
import ProductItem from './ProductItem';

const Product = () => {
  return (
    <div id='products' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-3xl text-center tracking-widest uppercase text-[#3389FF] mb-4 mt-6'>
          Trending
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProductItem
            title='MIZUNO MORELIA SALA CLASSIC TF-HIGH RISK RED/WHITE/SILVER'
            backgroundImg ={mizuno1Img}
            productUrl='/mizuno1'
            price='Rp 1.099.800'
          />
          <ProductItem
            title='MIZUNO WAVE THUNDERSTORM-WHITE/HOT CORAL/801 C'
            backgroundImg={mizuno2Img}
            productUrl='/mizuno2'
            price='Rp 799.840'

          />
          <ProductItem
            title='MIZUNO MORELIA NEO III B JAPAN-BLUE CURACAO/GALAXY SILVER/BLUE CURACAO'
            backgroundImg={mizuno3Img}
            productUrl='/mizuno3'
            price='Rp 3.999.800'

          />
          <ProductItem
            title='MIZUNO WAVE CLAW 2-SNOW WHITE/PEACE BLUE/DRIVEN PINK'
            backgroundImg={mizuno4Img}
            productUrl='/mizuno4'
            price='Rp 1.439.840'

          />

          <ProductItem
            title='MIZUNO WAVE THUNDERSTORM MID-WHITE/GOLD/SNOW WHITE'
            backgroundImg ={mizuno5Img}
            productUrl='/mizuno5'
            price='Rp 1.199.800'

          />

          <ProductItem
            title='MIZUNO WAVE RIDER 26 2E-SUPER SONIC/ICE WATER/CHERRY TOMATO'
            backgroundImg ={mizuno6Img}
            productUrl='/mizuno6'
            price='Rp 1.279.840'

          />
        </div>
      </div>
    </div>
  );
};

export default Product;
