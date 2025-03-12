"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { bebas } from '../../fonts';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="w-[800px] h-[600px] bg-white text-black"
          fadeEffect={{crossFade: true}}
        >
          <SwiperSlide className="w-full h-full flex items-center justify-center">
            HI
          </SwiperSlide>
          <SwiperSlide className="w-full h-full flex items-center justify-center">
            BYE
          </SwiperSlide>
          <SwiperSlide className="w-full h-full flex items-center justify-center">
            Hello
          </SwiperSlide>

        </Swiper>
      </div>
      <div>
        <p><br />To view all of my photos and purchase prints, visit my photography website:</p>
      </div>
    </div>
  )
}
