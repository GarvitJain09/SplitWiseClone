import { useEffect, useState } from "react";
export default function ExpenseRemains({ totalAmount, totalFriendBalance }) {
  return (
    <div className="card-body">
      {Math.sign(totalAmount) === -1
        ? `You owe ${totalAmount.toFixed(2)} Rupees`
        : totalAmount === 0
        ? `All thing settled`
        : `You will get ${totalAmount.toFixed(2)}`}
    </div>
  );
}
