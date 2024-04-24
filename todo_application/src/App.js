import style from "./app.module.css";
import { Header } from "./components";
import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.app} data-theme={theme}>
      <div className={style.wrapper}>
        <Header />
      
      </div>
    </div>
  );
}

export default App;
