import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MultiSelect from "./MultiSelect";
import { selectedFriends } from "../../action/index";

export default function Autocomplete({ options, showAddFriendEvent }) {
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [resultMatched, setResultMatched] = useState(false);
  const [input, setInput] = useState("");
  const [multiUsers, setMultiUser] = useState([]);
  const Friends = useSelector((state) => state.addFriend.selectedFriends);
  const onChange = (e) => {
    const inputData = e.target.value;
    if (Friends.length > 0) {
      const NewFilterData = options.filter((x) => !Friends.includes(x));
      var FilterData = NewFilterData.filter(
        (option) => option.toLowerCase().indexOf(inputData.toLowerCase()) > -1
      );
    } else {
      var FilterData = options.filter(
        (option) => option.toLowerCase().indexOf(inputData.toLowerCase()) > -1
      );
    }

    console.log(Friends, options, "test1");
    setFilterData(FilterData);
    setInput(inputData);
    setResultMatched(true);
    setActiveIndex(0);
  };
  const onClick = (e) => {
    setFilterData([]);
    setInput("");

    setMultiUser([...Friends, e.target.innerText]);

    setActiveIndex(0);
    setResultMatched(false);
  };
  useEffect(() => {
    dispatch(selectedFriends(multiUsers));
  }, [multiUsers]);
  const SuggestionsListComponent = () => {
    return filterData.length ? (
      <ul className="list-group">
        {filterData.map((suggestion, index) => {
          let className;
          if (index === activeIndex) {
            className = "list-group-item";
          }
          return (
            <li className="list-group-item" key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };
  return (
    <div>
      <ul className="badges">{<MultiSelect />}</ul>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Please Enter Name"
          aria-label="Please Enter Name"
          aria-describedby="basic-addon2"
          onChange={onChange}
          // onKeyDown={onKeyDown}
          value={input}
        />
        <div className="input-group-append">
          <button
            onClick={showAddFriendEvent}
            className="btn btn-outline-secondary"
            type="button"
          >
            Add Friend
          </button>
        </div>
      </div>
      {resultMatched && input && <SuggestionsListComponent />}
    </div>
  );
}
