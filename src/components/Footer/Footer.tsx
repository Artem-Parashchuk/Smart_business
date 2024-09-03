import s from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_content}>
        <p className={s.footer_text}>
        &#169; 2024 Test task for SMART business company. Performed by Artem Parashchuk.
        </p>
      </div>
    </footer>
  );
};
