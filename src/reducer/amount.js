const initialState = {
  selectedFriends: [],
  paidBy: "",
  description: "",
  amount: ""
};

const amount = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_FRIENDS":
      return {
        ...state,
        selectedFriends: action.payload
      };
      break;
    case "DESCRIPTION":
      return {
        ...state,
        description: action.payload
      };
    case "PAID_BY":
      return {
        ...state,
        paidBy: action.payload
      };
    case "ADD_AMOUNT":
      return {
        ...state,
        amount: action.payload
      };
    default:
      return state;
      break;
  }
};
export default amount;
