import { ReactNode, useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";
import { CSSProperties } from "react";

interface ISwiper {
  children: ReactNode;
  style?: CSSProperties;
}

const Swiper: React.FC<
  ISwiper &
    Partial<SwiperOptions> &
    React.DOMAttributes<SwiperOptions> &
    React.HTMLAttributes<HTMLElement>
> = (props) => {
  const swiperRef = useRef<JSX.IntrinsicElements["swiper-container"]>(null);
  const { children, style, ...rest } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef} style={style}>
      {children}
    </swiper-container>
  );
};

interface ISwiperSlide {
  children: ReactNode;
}

const SwiperSlide: React.FC<
  ISwiperSlide &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
  const { children, ...rest } = props;
  return <swiper-slide {...rest}>{children}</swiper-slide>;
};

export { Swiper, SwiperSlide };
