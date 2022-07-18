import s from "./D/c.module.css";
const C = (props) => {
  return (
    <div>
      <h4 className={s.shift}> Сейчас на смене</h4>
      <div className={s.wrapper}>
        {" "}
        <h4>
          Сантехник: <big className={s.plumb}>{props.h}</big>
        </h4>
        <h4>
          Електрик: <big className={s.elec}>{props.hh} </big>
        </h4>
      </div>
    </div>
  );
};
export default C;
