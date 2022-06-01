import { useState, useEffect } from "react";
import { showAddUser, addUser } from "../../action/index";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../Checkbox";
export default function SplitBetween(){
  const SelectedFriends = useSelector((state)=>state.addFriend.selectedFriends);
return(
  <Checkbox items={SelectedFriends} defaultValue={true}/>
)


}