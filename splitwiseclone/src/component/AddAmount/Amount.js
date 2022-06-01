import { useSelector, useDispatch } from "react-redux";
import Dropdown from "../Dropdown";
import { showAddUser, addUser, paidBy, addAmount } from "../../action/index";
import { useEffect } from "react";

export default function Amount() {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(addAmount(e.target.value));
  };
  return (
    <>
      <div class="input-group mt-3">
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control"
          onChange={onChange}
        />
      </div>
    </>
  );
}
