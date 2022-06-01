export default function AllFriendAmount({ totalFriendBalance }) {
  if (totalFriendBalance) {
    return Object.entries(totalFriendBalance).map(([key, value]) => {
      return (
        <div className="card-body">
          <span>{key} Paid </span>
          <span>{value.toFixed(2)}</span>
        </div>
      );
    });
  }
}
