const initialState = {
  friendList: [],
  showAddFriend: false,
  newUserAdded: "",
  selectedFriends: [""],
  paidBy: "",
  description: "",
  amount: "",
  splitBetween: [""],
  closePopUp: false
};
const addFriend = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friendList: action.payload };
      break;
    case "SHOW_ADD_USER":
      return {
        ...state,
        showAddFriend: action.payload
      };
      break;
    case "NEW_USER_ADDED":
      return {
        ...state,
        newUserAdded: action.payload
      };
      break;
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
    case "SPLIT_BETWEEN":
      return {
        ...state,
        splitBetween: action.payload
      };
    case "CLOSE_POP_UP":
      return {
        ...state,
        closePopUp: action.payload
      };
    default:
      return state;
      break;
  }
};

export default addFriend;
