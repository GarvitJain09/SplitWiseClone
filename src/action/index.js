export const addUser = (payload) => {
  return {
    type: "ADD_FRIEND",
    payload
  };
};
export const showAddUser = (payload) => {
  return {
    type: "SHOW_ADD_USER",
    payload
  };
};
export const newUserAdded = (payload) => {
  return {
    type: "NEW_USER_ADDED",
    payload
  };
};
export const selectedFriends = (payload) => {
  return {
    type: "SELECTED_FRIENDS",
    payload
  };
};
export const description = (payload) => {
  return {
    type: "DESCRIPTION",
    payload
  };
};
export const addAmount = (payload) => {
  return {
    type: "ADD_AMOUNT",
    payload
  };
};
export const paidBy = (payload) => {
  return {
    type: "PAID_BY",
    payload
  };
};
export const splitBetween = (payload) => {
  return {
    type: "SPLIT_BETWEEN",
    payload
  };
};
export const closePopUp = (payload) => {
  return {
    type: "CLOSE_POP_UP",
    payload
  };
};
