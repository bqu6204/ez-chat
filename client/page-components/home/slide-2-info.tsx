import styleSheet from "@/styles/dist/slide-2-info.module.css";
import { CharFader } from "@/components/text/char-fader";
import Link from "next/link";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";

const Slide2InfoContainer: React.FC = () => {
  return (
    <div className={styleSheet.wrapper}>
      <h2 className={styleSheet.title}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("嗨...")
              .pauseFor(500)
              .deleteChars(3)
              .typeString("！世界！！！")
              .start();
          }}
        />
      </h2>

      <div className={styleSheet.faders}>
        <CharFader
          className={styleSheet.charFader}
          text={"匿名聊天交友是時下蠻流行的網路交友方式。"}
          durationMs={1000}
          delayMs={1000}
        />

        <CharFader
          className={styleSheet.charFader}
          text={"為都市繁忙的人們找到一個可以找陌生人聊天的窗口。"}
          durationMs={1000}
          delayMs={2000}
        />
      </div>

      <Link href="/hello" onClick={() => console.log("Link is clicked")}>
        <Button
          className={styleSheet.chatBtn}
          variant={"contained"}
          size="large"
        >
          開始聊天
        </Button>
      </Link>
    </div>
  );
};

export default Slide2InfoContainer;
