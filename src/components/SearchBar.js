import React from "react";
import "semantic-ui-css/semantic.min.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onInputChange(e) {
    this.setState({ text: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit.call(this, this.state.text);
  }

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "1rem" }}>
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <label htmlFor="searchBox" className="ui icon input field">
            <input
              type="text"
              id="searchBox"
              value={this.state.text}
              placeholder="Search images"
              autoComplete="off"
              required
              onChange={this.onInputChange.bind(this)}
            />
            <button className="ui button" type="submit">
              <i className="search icon"></i>
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
