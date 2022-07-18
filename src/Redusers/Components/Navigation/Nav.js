import { Link } from "react-router-dom";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={s.wrapper}>
      {" "}
      <Link to="/Content">
        <i className={s.link}> Тельфера</i>
      </Link>
      <div>
        <Link to="/OnDutyNow">
          <i className={s.link}> дежурные</i>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
