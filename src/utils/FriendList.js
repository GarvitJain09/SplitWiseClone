import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../action/index";
import Localbase from "localbase";
let db = new Localbase("db");

export default function FriendList() {
  const newUserAdded = useSelector((state) => state.addFriend.newUserAdded);
  const dispatch = useDispatch();

  useEffect(() => {
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
  }, [newUserAdded]);
}
