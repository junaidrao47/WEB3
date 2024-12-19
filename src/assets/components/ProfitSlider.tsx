import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PROFIT_SHARE_DATA = [
  {
    id: 1,
    name: "RAJESH IYER",
    amount: 729.36,
    date: "10 Sept 2024",
    ceoName: "Ethan Carter",
  },
  {
    id: 2,
    name: "CALEB NATHANIEL",
    amount: 381.61,
    date: "17 Sept 2024",
    ceoName: "Ethan Carter",
  },
  {
    id: 3,
    name: "JAMES BENJAMIN",
    amount: 316.07,
    date: "01 Sept 2024",
    ceoName: "Ethan Carter",
  },{
    id: 3,
    name: "JAMES BENJAMIN",
    amount: 316.07,
    date: "01 Sept 2024",
    ceoName: "Ethan Carter",
  },
  // Add more objects here to create additional cards
];

export default function Widget() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-96"
      >
        {PROFIT_SHARE_DATA.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-gradient-to-br from-blue-500 to-blue-900 text-white p-6 rounded-lg shadow-lg w-80 mx-auto">
              <h2 className="text-2xl font-bold text-center">PROFIT SHARE</h2>
              <p className="text-center text-blue-200">
                Delightedly presented for:
              </p>
              <h3 className="text-xl font-semibold text-center">{card.name}</h3>
              <p className="text-center text-blue-200">Your share:</p>
              <h4 className="text-3xl font-bold text-center">
                ${card.amount.toFixed(2)}
              </h4>
              <p className="text-center text-blue-200">{card.date}</p>
              <p className="text-center text-blue-200">Date</p>
              <p className="text-center mt-4">{card.ceoName}</p>
              <p className="text-center text-blue-200">CEO</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
