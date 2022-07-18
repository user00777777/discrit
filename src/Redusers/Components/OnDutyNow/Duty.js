import C from "./C";
import s from "./D/duty.module.css";
const Duty = (props) => {
  let isfirstShift = props.duty.isFirstShift();
  let day = props.duty.day();
  let day2 = props.duty.day2();

  // let copyDay = day - 1;
  // let copyg = day2 - 1;
  let d = props.duty.employees.map((dd) => {
    if (dd.workingDays.includes(isfirstShift ? day : day2)) {
      return <C key={dd.id} h={dd.plumber} hh={dd.electrician} />;
    }
  });

  return (
    <div className={s.wr1}>
      <h2>{d}</h2>
      <div></div>
      <div>{<Pre f={props.duty} />}</div>
    </div>
  );
};

export default Duty;
let Pre = (props) => {
  let dd = props.f;
  let isfirstShift = dd.isFirstShift();
  let day2 = dd.day2();
  let day = dd.day() + 1;
  return dd.employees.map((dd) => {
    if (dd.workingDays.includes(isfirstShift ? day2 : day)) {
      return (
        <div>
          <h4>Следующая смена</h4>
          <div className={s.wrapper}>
            <h4>
              {" "}
              Сантехник:
              <big className={s.plumb}>{dd.plumber}</big>
            </h4>

            <h4>
              {" "}
              Електрик:
              <big className={s.elec}> {dd.electrician}</big>
            </h4>
          </div>
        </div>
      );
    }
  });
};
