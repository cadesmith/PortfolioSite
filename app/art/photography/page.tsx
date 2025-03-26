"use client";

import React from "react";
import ImageFade from "../../components/ImageFade";
import PageTitle from "../../components/PageTitle";

export default function Photography() {
  return (
    <div className="grid bg-white justify-items-center h-full w-screen max-w-screen">
      
      <PageTitle 
        title={'PHOTOGRAPHY'}
      />

      <ImageFade />

      <div className="text-black pb-10">
        <p className="text-lg"><br />Photography site launching June 2025. Check back here for updates!</p>
      </div>
    </div>
  )
}
