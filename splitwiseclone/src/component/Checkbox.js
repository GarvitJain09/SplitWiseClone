import { useState, useEffect } from "react";
import {useDispatch} from"react-redux";
import { showAddUser, addUser,splitBetween } from "../action/index";

export default function Checkbox({ items }) {
  const dispatch = useDispatch()
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(true)
  );
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    setCheckedState(new Array(items.length).fill(true));
    setSelectedItem(items)
    dispatch(splitBetween(items))
  }, [items]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const name = updatedCheckedState.map((currentState, index) => {
      if (currentState === true) {
        return items[index];
      } else {
        return "";
      }
    });
  
    var newName = name.filter((n)=>{
      return n.length > 0
    })
      setSelectedItem(newName);
    dispatch(splitBetween(newName))
  };

  return (
    <div className=" mt-3">
      <label className='mt-1'>Split Between</label>
        {items.map((item, index) => {
          return (

                <div className="form-check">
                  <input
                  className='form-check-input'
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={item}
                    value={item}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label className ='form-check-label' htmlFor={`custom-checkbox-${index}`}>{item}</label>
                </div>
          );
        })}
    </div>
  );
}
