"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PageTitle from "../../components/PageTitle";

export default function Photography() {
  return (
    <div className="grid bg-white justify-items-center w-screen">
      
      <PageTitle 
        title={'PHOTOGRAPHY'}
      />

      <div>
        <Swiper 
          spaceBetween={30}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="w-[800px] h-[600px] bg-black text-white"
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
      <div className="text-black pb-10">
        <p className="text-lg"><br />Photography site launching June 2025. Check back here for updates!</p>
      </div>
    </div>
  )
}
