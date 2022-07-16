import s from "./D/c.module.css";
const C = (props) => {
  return (
    <div className={s.wrapper}>
      <h3> Сейчас на смене</h3>
      <h4>
        <span>Сантехник</span> {props.h}{" "}
      </h4>
      <h4>
        <span>Електрик</span> {props.hh}{" "}
      </h4>
    </div>
  );
};
export default C;
