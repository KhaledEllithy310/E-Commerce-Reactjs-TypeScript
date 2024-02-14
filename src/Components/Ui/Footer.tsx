import {
  Facebook,
  Instagram,
  MailOutline,
  PhoneInTalk,
  X,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 shadow-[0px_30px_30px_20px_rgba(0,0,0,0.5)] ">
      <section className="container space-y-4 flex justify-center flex-col items-center text-background">
        <Link to={"/"}>
          <img src="/images/logo.png" className="w-56" alt="logo" />
        </Link>
        <a
          className="text-sm md:text-xl font-light"
          href="mailto:khaledellessy310@gmail.com"
          target="_blank"
        >
          <MailOutline />
          <span> khaledellessy310@gmail.com</span>
        </a>
        <a
          className="text-sm md:text-xl font-light"
          href="tel:201011282551"
          target="_blank"
        >
          <PhoneInTalk />
          <span>+201011282551</span>
        </a>
        <section className="flex justify-between items-center gap-6">
          <a href="https://twitter.com/" target="_blank">
            <X />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
