import { useSelector, useDispatch } from "react-redux";

import { selectedFriends } from "../../action/index";

export default function MultiSelect() {
  const multiUsers = useSelector((state) => state.addFriend.selectedFriends);
  const dispatch = useDispatch();
  const removeUser = (userName) => {
    var newUsers = multiUsers.filter((multiUser) => multiUser !== userName);
    dispatch(selectedFriends(newUsers));
  };
  return multiUsers.length ? (
    multiUsers.map((multiUser) => {
      return (
        <button type="button" class="btn btn-secondary m-1">
          {multiUser}{" "}
          <span class="badge badge-light" onClick={() => removeUser(multiUser)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </span>
        </button>
      );
    })
  ) : (
    <></>
  );
}
