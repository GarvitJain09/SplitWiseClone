import { useState, useEffect } from "react";
import { showAddUser, newUserAdded, addUser } from "../../action/index";
import { useSelector, useDispatch } from "react-redux";

import Localbase from "localbase";
let db = new Localbase("db");

export default function AddFriend() {
  const [friendName, setFriendName] = useState("");
  const friendList = useSelector((state) => state.addFriend.friendList);
  //const showAddFriend = useSelector((state) => state.addFriend.showAddFriend);
  const dispatch = useDispatch();
  const addToDB = () => {
    if (friendList.includes(friendName)) {
      console.log("Name already Exist");
    } else if (friendName.length <= 0) {
      console.log("Please Enter Name");
    } else {
      db.collection("users")
        .add({
          id: Date.now(),
          friendName
        })
        .then(() => {
          db.collection("users")
            .get()
            .then((users) => {
              dispatch(
                addUser(
                  users.map((e) => {
                    return e.friendName;
                  })
                )
              );
            });
        });
      dispatch(newUserAdded(Date.now()));
      dispatch(showAddUser(false));
    }
  };
  const onBack =()=>{
    dispatch(showAddUser(false));
  }
  const onChange = (e) => {
    setFriendName(e.target.value.trim());
  };
  return (
    <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Please Enter Name to Add"
          aria-label="Please Enter Name to Add"
          aria-describedby="basic-addon2"
          onChange={onChange}
          // onKeyDown={onKeyDown}
        />
          <div className="input-group-append">
            <button onClick={addToDB} className="btn btn-outline-secondary" type="button">
             Add Friend
            </button>
            <button onClick={onBack} className="btn btn-outline-secondary" type="button">Go Back</button>
          </div>
        </div>
  );
}
