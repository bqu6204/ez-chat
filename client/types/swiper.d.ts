import { SwiperOptions } from "swiper/types";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": Partial<SwiperOptions> &
        React.DOMAttributes<SwiperOptions> & {
          children: ReactNode;
        } & React.HTMLAttributes<HTMLElement> &
        EventListenerProps;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        children: ReactNode;
      };
    }
  }
}
