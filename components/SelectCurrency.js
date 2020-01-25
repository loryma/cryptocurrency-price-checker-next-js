const SelectCurrency = ({ value, onClick }) => (
  <div
    className="btn-group"
    role="group"
    aria-label="choose currency button group"
  >
    <button
      type="button"
      className={`btn ${value === "USD" ? " btn-primary" : "btn-secondary"}`}
      onClick={onClick}
      value="USD"
    >
      USD
    </button>
    <button
      type="button"
      className={`btn ${value === "GBP" ? " btn-primary" : "btn-secondary"}`}
      onClick={onClick}
      value="GBP"
    >
      GBP
    </button>
    <button
      type="button"
      className={`btn ${value === "EUR" ? " btn-primary" : "btn-secondary"}`}
      onClick={onClick}
      value="EUR"
    >
      EUR
    </button>
  </div>
);

export default SelectCurrency;
