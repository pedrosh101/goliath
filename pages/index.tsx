import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavBar from "../src/NavBar";
import { Footer } from "../src/Footer";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Head>
        <title>GOLIATH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen bg-clr1 items-center justify-center py-2 font-avenir">
        <main className="grid md:grid-cols-2 min-h-screen items-center justify-center p-16 text-center gap-16">
          <div className="text-6xl">
            Exquisite Parfums by Goliath
            <Link href="/buy-section">
              <h3 className="text-3xl font-bold text-red-200 mt-6">
                Our Collection
              </h3>
            </Link>
          </div>

          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="w-full md:w-8/12 shadow-lg shadow-gray-700"
          >
            <SwiperSlide>
              <Link href="/parf1">
                <img src="/img1.jpg" alt="parfum1"></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf2">
                <img src="/img2.jpg" alt="parfum2"></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf3">
                <img src="/img3.jpg" alt="parfum3"></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf4">
                <img src="/img4.jpg" alt="parfum4"></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf5">
                <img src="/img5.jpg" alt="parfum5"></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf6">
                <img src="/img6.jpg" alt="parfum6"></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf7">
                <img src="/img7.jpg" alt="parfum7"></img>
              </Link>
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
