import { useState, useEffect } from "react";
import {
  showAddUser,
  description,
  selectedFriends,
  addAmount,
  closePopUp
} from "../../action/index";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import Autocomplete from "../Autocomplete/Autocomplete";
import AddFriend from "../AddFriend/AddFriend";
import FriendList from "../../utils/FriendList";
import AddDescription from "../AddDescription/AddDescription";
import Amount from "../AddAmount/Amount";
import PaidBy from "../PaidBy/PaidBy";
import SplitBetween from "../SplitBetween/SplitBetween";
import Localbase from "localbase";
let db = new Localbase("db");

export default function AddAnExpense({ show, onHide }) {
  const dispatch = useDispatch();
  const showAddFriend = useSelector((state) => state.addFriend.showAddFriend);

  const friendList = useSelector((state) => state.addFriend.friendList);
  const description1 = useSelector((state) => state.addFriend.description);
  const paidBy = useSelector((state) => state.addFriend.paidBy);
  const amount1 = useSelector((state) => state.addFriend.amount);
  const SplitBetween1 = useSelector((state) => state.addFriend.splitBetween);

  const selectedFriends1 = useSelector(
    (state) => state.addFriend.selectedFriends
  );

  const showAddFriendEvent = () => {
    dispatch(showAddUser(true));
  };
  const saveButton = () => {
    var FirendsConsider = SplitBetween1;
    var numberOfFriends = FirendsConsider.length;
    if (numberOfFriends === 0) {
      console.log("considering Friend List as number of friends");
      FirendsConsider = selectedFriends1;
    } else {
      FirendsConsider = SplitBetween1;
    }

    var TotalnumberOfFriend = numberOfFriends + 1;
    var amountToBeSplit = amount1 / TotalnumberOfFriend;
    console.log(amountToBeSplit, TotalnumberOfFriend, "amount");
    var AmountReceivedByPayer = amountToBeSplit * numberOfFriends;
    if (selectedFriends1.length <= 0) {
      console.log("Please Select Friends");
      return;
    } else if (!description1) {
      console.log("please enter description");
      return;
    } else if (!amount1) {
      console.log("please enter description");
      return;
    } else {
      db.collection("Amount")
        .add({
          id: Date.now(),
          amount: amount1,
          description: description1,
          Totalamount: amount1,
          TotalAmountPerPerson: amountToBeSplit,
          payer: {
            paidBy,
            AmountReceivedByPayer
          },
          selectedFriends: selectedFriends1,
          splitAmong: FirendsConsider
        })
        .then((e) => {
          dispatch(description());
          dispatch(closePopUp(false));
          dispatch(selectedFriends([]));
          dispatch(addAmount());
        });
    }
  };
  return (
    <Modal show={show} onHide={onHide}>
      <FriendList />
      <Modal.Header closeButton>
        <Modal.Title>Add an Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!showAddFriend ? (
          <>
            <Autocomplete
              options={friendList}
              showAddFriendEvent={showAddFriendEvent}
            />
            {selectedFriends1.length > 0 ? (
              <>
                <AddDescription />
                <Amount />
                <PaidBy />
                <SplitBetween />
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <AddFriend />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="btn btn-outline-secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="btn btn-outline-primary" onClick={saveButton}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
