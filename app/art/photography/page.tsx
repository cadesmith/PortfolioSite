import React from "react";
import Link from "next/link";
import { bebas } from '../../fonts';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './global.css';



export default function Photography() {
  return (
    <div className="grid justify-items-center w-screen">
      <div className='pb-6 grid justify-items-center'>
        <h1 className={`${bebas.className} text-8xl`}>PHOTOGRAPHY</h1>
      </div>
      <div>
        <Swiper 
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="PhotoSlides"
        >
          <SwiperSlide>
            <Image>
          </SwiperSlide>

        </Swiper>
      </div>
      <div>
        <p>To view all of my photos and purchase prints, visit my photography website:</p>
      </div>
    </div>
  )
}
