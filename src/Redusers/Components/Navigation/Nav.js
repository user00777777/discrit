import { Link } from "react-router-dom";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={s.wrapper}>
      <Link to="/Content">Тельфера</Link>
    </div>
  );
};
export default Nav;
