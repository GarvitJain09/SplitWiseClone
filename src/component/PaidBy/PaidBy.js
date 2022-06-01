import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "../Dropdown";
import { showAddUser, addUser, paidBy } from "../../action/index";

export default function PaidBy() {
  const Friends = useSelector((state) => state.addFriend.selectedFriends);
  const [paidByList, setPaidByList] = useState(["You"]);
  const paidBy1 = useSelector((state) => state.addFriend.paidBy);
  const dispatch = useDispatch();
  useEffect(() => {
    setPaidByList(["You", ...Friends]);
    dispatch(paidBy(paidByList[0]));
  }, []);
  useEffect(() => {
    setPaidByList(["You", ...Friends]);
  }, [Friends]);
  const handleChange = (e) => {
    dispatch(paidBy(e.target.value));
  };

  return (
    <Dropdown
      label="Paid By"
      value={paidBy1}
      options={paidByList}
      onChange={handleChange}
    />
  );
}
