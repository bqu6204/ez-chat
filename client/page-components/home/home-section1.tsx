import styleSheet from "@/styles/dist/home-section1.module.css";
import { Swiper, SwiperSlide } from "@/components/swiper-js-wrapper/swiper";
import { SwiperOptions } from "swiper/types";
import { useState, useRef, useEffect } from "react";
import Slide1InfoContainer from "./slide-1-info";
import Slide2InfoContainer from "./slide-2-info";

const slides = [
  {
    videoSrc: "/videos/conversation-compressed-1.mp4",
    alt: "conversation",
    title: "conversation",
  },
  {
    videoSrc: "/videos/conversation-compressed-2.mp4",
    alt: "conversation",
    title: "conversation",
  },
  {
    videoSrc: "/videos/conversation-compressed-3.mp4",
    alt: "conversation",
    title: "conversation",
  },
  {
    videoSrc: "/videos/conversation-compressed-4.mp4",
    alt: "conversation",
    title: "conversation",
  },
];

const HomeSection1: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const swiperOptions: SwiperOptions = {
    pagination: { clickable: true },
    navigation: true,

    autoplay: {
      delay: 4200,
      disableOnInteraction: false,
    },

    speed: 400,
    watchSlidesProgress: true,
    effect: "fade",
    fadeEffect: { crossFade: false },
    grabCursor: true,
    loop: true,
    on: {
      slideChange: (swiper) => {
        setCurrentSlide(swiper.realIndex);
      },
      resize: (swiper) => {
        swiper.slideTo(0);
      },
    },
    injectStyles: [
      `
      .swiper-button-next,
      .swiper-button-prev {
        background-color: rgba(235, 235, 235, 0.2);
        padding: 8px;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .swiper:hover .swiper-button-next,
      .swiper:hover .swiper-button-prev{
        opacity: 1;
      }
      `,
    ],
  };
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((indexStr) => {
      const index = parseInt(indexStr);
      const video = videoRefs.current[index];
      if (video && index === currentSlide) {
        video.currentTime = 0;
        video.play();
      }
    });
  }, [currentSlide]);

  return (
    <section className={styleSheet.section1}>
      <Swiper {...swiperOptions}>
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.videoSrc}>
            {currentSlide === index && (
              <div className={styleSheet.slide}>
                {!(index & 1) ? (
                  <Slide1InfoContainer />
                ) : (
                  <Slide2InfoContainer />
                )}
                <video
                  ref={(elm) => (videoRefs.current[index] = elm)}
                  muted
                  className={styleSheet.video}
                  preload="auto"
                >
                  <source src={slide.videoSrc} />
                </video>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSection1;
