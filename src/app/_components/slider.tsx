"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { computersDatas } from "@/app/_dataSets/data";

interface ComputerData {
  computerType: string | null;
  imageURL: string;
  productName: string;
  description: string;
  discount: string;
  specialPrice: string;
  originPrice: string;
  affirmPrice: string;
  freeShipping: string;
  buttonTexts: string;
}

export const SwiperContent: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="relative flex w-[75%] min-h-[680px] rounded-xl"
    >
      {computersDatas.map((data: ComputerData, index: number) => (
        <SwiperSlide
          className="flex flex-col items-center mt-4 w-[350px] bg-white border rounded-xl select-none shadow-outline"
          key={index}
        >
          <div className="p-5 relative flex flex-col gap-2">
            <div
              className={`category w-fit rounded-full ${
                data.computerType ? "border" : ""
              } border-[#888] px-2 py-0.5 text-[9px] font-[800] text-[#888] absolute left-5 top-6`}
            >
              {data.computerType}
            </div>
            <div className="product-image flex justify-center mt-6">
              <Image
                src={data.imageURL}
                alt={data.productName}
                width={200}
                height={200}
                priority={false}
                className="h-[150px] object-contain"
              />
            </div>
            <div className=" h-[280px] flex flex-col">
              <h2 className="font-bold h-[60px] text-slate-700 hover:text-red-500 cursor-pointer">
                {data.productName}
              </h2>

              <div className="flex flex-col items-start gap-2 mt-10 text-[#666]">
                <span className="list-none text-start text-sm whitespace-pre-line">
                  {data.description}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#f2f6fa] p-5">
            <div className="flex gap-1 bg-[#f00] text-[#f7f7f7] text-[12px] rounded-full p-2 w-fit">
              <span>SAVE</span>
              <span>${data.discount}</span>
            </div>

            <div className="flex items-end gap-3 mt-3">
              <p className="text-[20px] font-bold">${data.specialPrice}</p>
              <p className="relative bottom-1 text-xs text-gray-400 line-through">
                ${data.originPrice}
              </p>
            </div>

            <button className="text-start border-0 bg-transparent">
              <p className="relative overflow-hidden">
                Starting at
                <span className="text-[#1694f5]"> ${data.affirmPrice} </span>
                with
                <span className="clip-path-affirm relative z-10">{` affirm`}</span>
              </p>
            </button>
          </div>

          <div className="flex justify-between items-center bg-[#f2f6fa] px-5 py-2">
            <div className="flex flex-col items-start">
              <span className="text-xs font-bold">Free Shipping</span>
              <span className="text-xs">{data.freeShipping}</span>
            </div>

            <div className="buy-btn flex justify-center border border-[#f00] hover:bg-[#f00]  rounded-full w-24 h-fit py-1 bg-transparent transition-all duration-[400ms]">
              <button className="text-[#f00] hover:text-white text-sm transition-all duration-[400ms]">
                {data.buttonTexts}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
