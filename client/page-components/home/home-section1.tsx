import Image from "next/image";
import styleSheet from "@/styles/dist/home-section1.module.css";

const carousels = [
  { src: "/conversation1.gif", alt: "conversation", title: "conversation" },
];

const HomeSection1: React.FC = () => {
  return (
    <div>
      <div className={`next-image-box ${styleSheet.imageBox}`}>
        {carousels.map((carousel) => (
          <Image
            className="next-image-fill"
            src={carousel.src}
            alt={carousel.alt}
            title={carousel.title}
            fill
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSection1;
