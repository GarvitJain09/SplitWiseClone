export default function Dropdown({ label, value, options, onChange }) {
  return (
    <div className="input-group mt-3 dropdownColumn" >
      <label className='form-label'>
      {label}
      </label>
      <select  className='form-select' value={value} onChange={onChange}>
        {options.map((option) => (
          <option className ='dropdown-item' value={option}>{option}</option>
        ))}
      </select>

    
    </div>
  );
}
