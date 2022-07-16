const initialState = {
  hi: "hoo",
  day: () => new Date().getDate(),
  month: (w) => new Date().getMonth(),
  year: (t) => new Date().getFullYear(),
  hour: () => new Date().getHours(),
  minuts: () => new Date().getMinutes(),
  isFirstShift: () => {
    let r;
    r =
      initialState.hour() >= 7 &&
      initialState.minuts() <= 59 &&
      initialState.hour() <= 18 &&
      initialState.minuts() <= 59;
    return r;
  },
  day2: () => {
    let day2;
    day2 = Number(
      `${
        initialState.isFirstShift()
          ? initialState.day()
          : initialState.hour() >= 18 && initialState.hour() <= 23
          ? initialState.day()
          : initialState.day() - 1
      }.2`
    );
    return day2;
  },

  workers: () => {
    initialState.employees.map((e) => {
      if (e.id === 2) {
        console.log(e.electrician);
      }
    });
  },
  employees: [
    {
      id: [5],
      electrician: "Лысенко П.",
      plumber: "Немченко В.",

      workingDays: [
        3, 4.2, 7, 8.2, 11, 12.2, 15, 16.2, 19, 20.2, 23, 24.2, 27, 28.2,
      ],
    },
    {
      id: [2],

      electrician: "Малько B.",
      plumber: "Ничипорчук А.",

      workingDays: [
        1.2, 4, 5.2, 8, 9.2, 12, 13.2, 16, 17.2, 20, 21.2, 25, 26.2, 29, 30.2,
      ],
    },
    {
      id: [1, 4],
      electrician: "Круглый С.В.",
      plumber: "Головченко С.",

      workingDays: [
        1, 2.2, 5, 6.2, 9, 10.2, 13, 14.2, 17, 18.2, 21, 22.2, 25, 26.2, 29,
        30.2,
      ],
    },
    {
      id: [3],
      electrician: "Синькевич B.",
      plumber: "Литвин",

      workingDays: [
        2, 3.2, 6, 7.2, 10, 11.2, 14, 15.2, 18, 19.2, 22, 23.2, 26, 27.2, 30,
      ],
    },
  ],
};

const OnDutyReduser = (state = initialState, action) => {
  return {
    ...state,
    employees: [...state.employees],
  };
};
export default OnDutyReduser;
