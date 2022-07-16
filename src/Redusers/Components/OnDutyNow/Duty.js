import C from "./C";

const Duty = (props) => {
  let isfirstShift = props.duty.isFirstShift();
  let day = props.duty.day();
  let day2 = props.duty.day2();

  // let copyDay = day - 1;
  // let copyDay2 = day2 - 1;
  let d = props.duty.employees.map((dd) => {
    if (dd.workingDays.includes(isfirstShift ? day : day2)) {
      return <C key={dd.id} h={dd.plumber} hh={dd.electrician} />;
    }
  });

  return (
    <div>
      {/* <Link to="/D">Смены</Link> */}
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
  let day = dd.day();
  let day2 = dd.day2();
  return dd.employees.map((dd) => {
    if (dd.workingDays.includes(!isfirstShift ? day : day2)) {
      return (
        <div>
          <div>{dd.plumber}</div>
          <div>{dd.electrician}</div>
          <div></div>
          <div></div>
        </div>
      );
    }
  });
};
