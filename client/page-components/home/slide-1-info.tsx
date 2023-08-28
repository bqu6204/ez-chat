import styleSheet from "@/styles/dist/slide-1-info.module.css";
import { CharFader } from "@/components/text/char-fader";
import Link from "next/link";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";

const Slide1InfoContainer: React.FC = () => {
  return (
    <div className={styleSheet.wrapper}>
      <h2 className={styleSheet.title}>有網頁需要切版？</h2>
      <div className={styleSheet.faders}>
        <CharFader
          className={styleSheet.charFader}
          text={"Hi！ 我是葉宜松，一名前端工程師。"}
          durationMs={500}
          delayMs={500}
        />
        <CharFader
          className={styleSheet.charFader}
          text={"是否有版面要切？或者有希望合作的案子？歡迎直接留言。"}
          durationMs={500}
          delayMs={1000}
        />
      </div>

      <Link href="/hello" onClick={() => console.log("Link is clicked")}>
        <Button
          className={styleSheet.chatBtn}
          variant={"contained"}
          size="large"
        >
          馬上聯繫
        </Button>
      </Link>
    </div>
  );
};

export default Slide1InfoContainer;
