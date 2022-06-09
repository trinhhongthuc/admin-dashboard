const initValue = {
  them: "light",
  color: "blue",
};

const themeReducer = (
  state = initValue,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "SET_THEME":
      console.log(action.payload);
      return {
        ...state,
        them: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
