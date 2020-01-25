const Select = ({ value, onSelect }) => (
  <div className="form-group d-md-inline-block">
    <select className="custom-select" value={value} onChange={onSelect}>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
    </select>
  </div>
);

export default Select;
