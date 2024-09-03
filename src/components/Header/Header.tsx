import logo from "../../assets/logo.svg";
import s from "./Header.module.css";

export const Header: React.FC  = () => {
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <a
          href="https://www.smart-it.com/uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={s.logo}
            src={logo}
            alt="Logo"
          />
        </a>
      </div>
    </header>
  );
};
