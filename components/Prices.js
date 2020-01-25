import Select from "./Select";

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
        <Select onSelect={this.onSelect} />
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {this.props.bpi[this.state.currency].description}:
            <span className="badge badge-primary">
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
