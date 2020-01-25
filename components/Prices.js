import SelectCurrency from "./SelectCurrency";

class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  onSelect = e => {
    const { value: currency } = e.target;

    this.setState({ currency });
  };

  render() {
    return (
      <div>
        <SelectCurrency onClick={this.onSelect} value={this.state.currency} />
        <ul className="list-group pt-4">
          <li className="list-group-item">
            Bitcoin rate for {this.props.bpi[this.state.currency].description}:
            <span className="badge badge-primary ml-2">
              {this.props.bpi[this.state.currency].code}
            </span>
            <strong>{this.props.bpi[this.state.currency].rate}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Prices;
