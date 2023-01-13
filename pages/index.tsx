import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
        <main className="grid grid-cols-2 min-h-screen w-full items-center justify-center px-16 text-center gap-8">
          <div className="text-6xl">
            Exquisite Parfums by Goliath
            <Link href="/novo-produto">
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
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="bg-slate-600 max-w-prose relative"
          >
            <SwiperSlide className="relative">
              <Link href="/parf1">
                <Image
                  src="/img1.jpg"
                  alt="parfum1"
                  width={700}
                  height={700}
                ></Image>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf2">
                <Image
                  src="/img2.jpg"
                  alt="parfum2"
                  width={700}
                  height={700}
                ></Image>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf3">
                <Image
                  src="/img3.jpg"
                  alt="parfum3"
                  width={700}
                  height={700}
                ></Image>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/parf4">
                <Image
                  src="/img4.jpg"
                  alt="parfum4"
                  width={700}
                  height={700}
                ></Image>
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
