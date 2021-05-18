import React from 'react';

class SearchBar extends React.Component{
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
                        {/*written as event => this.onFormSubmit(event)*/}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/*do not put brackets after this.onInputChange() as we only want it to work in the future - can also be typed as (event) => console.log(event.target.value)*/}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value}) } />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
