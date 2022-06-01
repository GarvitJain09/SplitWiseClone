import "bootstrap/dist/css/bootstrap.min.css";
import DashHeader from "./component/DashHeader";
import DashBoard from "./component/Dashbord/DashBoard";
import "./styles.scss";
import FriendList from "./utils/FriendList";

export default function App() {
  return (
    <div className="container">
      <DashHeader />
      <DashBoard />
      <FriendList />
    </div>
  );
}
