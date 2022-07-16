import { connect } from "react-redux";

import Duty from "./Duty";

const mapStateToProps = (state) => {
  return {
    duty: state.onduty,
    employees: state.onduty.employees,
  };
};

let OndutynowComponent = connect(mapStateToProps)(Duty);

export default OndutynowComponent;
