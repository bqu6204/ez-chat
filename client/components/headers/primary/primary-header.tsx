import { Button } from "@mui/material";
import Image from "next/image";
import BurgerBar from "@/components/burger-bars/burger-bar";
import styleSheet from "@/styles/dist/primary-header.module.css";
import { useState } from "react";

const menu = [
  {
    text: "關於網站",
    href: "#about",
  },
  {
    text: "大方贊助",
    href: "#donate",
  },
];

const PrimaryHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className={styleSheet.header}>
      <h1
        className="next_image_box"
        style={{ color: "transparent", fontSize: "0.1px" }}
      >
        <Image
          src={"/logo.png"}
          title="logo"
          alt="logo"
          width={150}
          height={60}
        />
        This is the logo.
      </h1>
      <nav
        className={`${styleSheet.menu} ${isMenuOpen && styleSheet.isMenuOpen}`}
      >
        {menu.map((link) => (
          <Button variant="text" href={link.href}>
            {link.text}
          </Button>
        ))}

        <Button variant={"contained"} size="large">
          馬上聊天
        </Button>
      </nav>
      <BurgerBar
        onClick={() => setIsMenuOpen((prev) => !prev)}
        isActivate={isMenuOpen}
        className={styleSheet.burger}
      />
    </header>
  );
};

export default PrimaryHeader;
