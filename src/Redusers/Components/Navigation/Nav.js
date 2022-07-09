import { Link } from "react-router-dom";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={s.wrapper}>
      <p>
        {" "}
        <Link to="/Content">
          <i className={s.link}> Тельфера</i>
        </Link>
      </p>
    </div>
  );
};
export default Nav;
