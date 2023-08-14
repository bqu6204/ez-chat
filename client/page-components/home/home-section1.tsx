import Image from "next/image";
import styleSheet from "@/styles/dist/home-section1.module.css";
import { Swiper, SwiperSlide } from "@/components/swiper-js-wrapper/swiper";
import { SwiperOptions } from "swiper/types";
import { useState } from "react";

const HomeSection1: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const slides = [
    {
      src: "/videos/conversation-1.mp4",
      alt: "conversation",
      title: "conversation",
    },
    {
      src: "/videos/conversation-2.mp4",
      alt: "conversation",
      title: "conversation",
    },
    {
      src: "/videos/conversation-3.mp4",
      alt: "conversation",
      title: "conversation",
    },
    {
      src: "/videos/conversation-4.mp4",
      alt: "conversation",
      title: "conversation",
    },
  ];

  const swiperOptions: SwiperOptions = {
    pagination: { clickable: true },
    navigation: true,
    // autoplay: { delay: 5000 },
    effect: "fade",
    speed: 1000,
    fadeEffect: { crossFade: true },
    grabCursor: true,
    on: {
      slideChange: () => {
        setCurrentVideo(null);
      },
    },
  };
  return (
    <div>
      <Swiper
        {...swiperOptions}
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <video
              autoPlay
              muted
              width="100%"
              height="100%"
              preload="true"
              loop
              onPlay={() => {
                setCurrentVideo(slide.src);
              }}
            >
              <source src={slide.src} />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSection1;
