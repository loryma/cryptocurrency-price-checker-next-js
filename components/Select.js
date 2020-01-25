const Select = ({ value, onSelect }) => (
  <select value={value} onChange={onSelect}>
    <option value="USD">USD</option>
    <option value="GBP">GBP</option>
    <option value="EUR">EUR</option>
  </select>
);

export default Select;
