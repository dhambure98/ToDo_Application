import style from "./styles.module.css";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.innerContainer}>
        <h1 className={style.heading}>To Do Application [My List]</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
