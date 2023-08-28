import { useState, useEffect, CSSProperties } from "react";
import styleSheet from "@/styles/dist/char-fader.module.css";

interface ICharFader {
  text: string;
  durationMs: number;
  delayMs?: number;
  className?: string;
  style?: CSSProperties;
}

const CharFader: React.FC<ICharFader> = ({
  text,
  durationMs,
  delayMs,
  className,
  style,
}) => {
  // const [currentText, setCurrentText] = useState<string[]>(
  //   Array(text.length).fill("___")
  // );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDelaying, setIsDelaying] = useState<boolean>(!!delayMs);

  useEffect(() => {
    if (isDelaying) return;

    const interval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(interval);
        return;
      }

      setCurrentIndex((prev) => prev + 1);
    }, durationMs / text.length);

    return () => clearInterval(interval);
  }, [currentIndex, isDelaying]);

  useEffect(() => {
    if (!delayMs) return;
    const timeout = setTimeout(() => setIsDelaying(false), delayMs);

    return () => clearTimeout(timeout);
  }, [delayMs]);

  return (
    <div className={`${styleSheet.container} ${className}`} style={style}>
      {Array.from(text).map((char, index) => {
        return (
          <span
            key={index}
            className={`${styleSheet.span} ${
              currentIndex > index ? styleSheet.shown : ""
            }`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export { CharFader };
