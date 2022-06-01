import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DashBoard.css";
import AddAnExpense from "../AddAnExpense/AddAnExpense";
import ExpenseRemains from "./ExpenseRemains";
import AllFriendAmount from "./AllFriendsAmount";
import { closePopUp, showAddUser } from "../../action/index";

import Localbase from "localbase";
import { Accordion } from "react-bootstrap";

let db = new Localbase("db");

export default function DashBoard() {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.addFriend.closePopUp);
  const [balances, setBalance] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [friendM, setFriendM] = useState([]);

  const openModal = () => {
    dispatch(closePopUp(true));
    // setOpen(true);
  };
  const closeModal = () => {
    // setOpen(false);
    dispatch(closePopUp(false));
    dispatch(showAddUser(false));
  };
  useEffect(() => {
    if (open === false) {
      db.collection("Amount")
        .get()
        .then((amount) => {
          setBalance(amount);
        });
    }
  }, [open]);
  useEffect(() => {
    var money = 0;
    var FriendMoney = {};
    var arrayOfMoney = [];
    balances.map((balance) => {
      if (FriendMoney[balance.payer.paidBy]) {
        FriendMoney[balance.payer.paidBy] +=
          balance.payer.AmountReceivedByPayer;
      } else {
        FriendMoney[balance.payer.paidBy] = balance.payer.AmountReceivedByPayer;
      }
      if (balance.payer.paidBy === "You") {
        money = money + balance.payer.AmountReceivedByPayer;
      } else {
        money = money - balance.TotalAmountPerPerson;
      }
    });

    setTotalBalance(money);
    arrayOfMoney.push(FriendMoney);
    setFriendM(FriendMoney);
    console.log(friendM);
  }, [balances]);
  const DispalyBalance = () => {
    return balances.length ? (
      balances.map((balance, index) => {
        return (
          <Accordion>
            <Accordion.Item eventKey={index + 1}>
              <Accordion.Header>
                {balance.description} with amount {balance.Totalamount} Paid By{" "}
                {balance.payer.paidBy}
              </Accordion.Header>
              <Accordion.Body>
                <span className="AmountToBeReceived">
                  Amount to be Received {balance.payer.AmountReceivedByPayer}.
                  Amount is Split B/w {balance.selectedFriends.length + 1}{" "}
                  people{" "}
                  {balance.selectedFriends.map((index) => {
                    return index;
                  })}{" "}
                  and You
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })
    ) : (
      <></>
    );
  };

  return (
    <div className="container">
      <div className="heading">
        <span>Dashboard</span>
        <span>
          <button className="btn btn-outline-primary" onClick={openModal}>
            Add An Expense
          </button>
        </span>
      </div>
      <div className="card">
        <AddAnExpense show={open} onHide={closeModal} />
        <AllFriendAmount totalFriendBalance={friendM} />
        <ExpenseRemains totalAmount={totalBalance} />
        <DispalyBalance />
      </div>
    </div>
  );
}
