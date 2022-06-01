import { useSelector, useDispatch } from "react-redux";
import Dropdown from "../Dropdown";
import { showAddUser, addUser, paidBy, description } from "../../action/index";
import { useEffect } from "react";

export default function AddDescription() {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(description(e?.target?.value));
  };
  return (
    <>
    <div class="input-group">

  <textarea onChange={onChange} placeholder ='Please enter description'class="form-control" aria-label="With textarea"></textarea>
</div>
    </>
  );
}
