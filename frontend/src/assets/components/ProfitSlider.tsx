import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProfitShareItem {
  id: number;
  name: string;
  amount: number;
  date: string;
  ceoName: string;
}

const PROFIT_SHARE_DATA: ProfitShareItem[] = [
  {
    id: 1,
    name: "RAJESH IYER",
    amount: 729.36,
    date: "10 Sept 2024", 
    ceoName: "Ethan Carter"
  },
  {
    id: 2,
    name: "CALEB NATHANIEL", 
    amount: 381.61,
    date: "17 Sept 2024",
    ceoName: "Ethan Carter"
  },
  {
    id: 3,
    name: "JAMES BENJAMIN",
    amount: 316.07, 
    date: "01 Sept 2024",
    ceoName: "Ethan Carter"
  },
  {
    id: 4,
    name: "MICHAEL SCOTT",
    amount: 452.89,
    date: "05 Sept 2024",
    ceoName: "Ethan Carter" 
  }
];

const ProfitSlider = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-slate-900">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Recent Profit Shares</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="h-[400px]"
      >
        {PROFIT_SHARE_DATA.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white p-8 rounded-xl shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">PROFIT SHARE</h3>
                  <p className="text-blue-200 text-sm">Delightedly presented for:</p>
                  <p className="text-xl font-semibold mt-2">{card.name}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Your share:</p>
                  <p className="text-3xl font-bold mt-1">
                    ${card.amount.toFixed(2)}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-blue-200 text-sm">Date</p>
                  <p className="font-medium mt-1">{card.date}</p>
                </div>

                <div className="text-center pt-4 border-t border-blue-400/30">
                  <p className="font-medium">{card.ceoName}</p>
                  <p className="text-blue-200 text-sm">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfitSlider;