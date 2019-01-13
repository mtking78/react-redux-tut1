import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

class SearchStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { query } = this.state;

    if (query) {
      this.props.onFetchStories(query)

      this.setState({ query: '' });
    }

    event.preventDefault();
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type="submit">
          Search
        </Button>
      </form>
    );
  }
}

// The component should work on its own now. It only receives one function from the outside via its props: onFetchStories(). This function will dispatch an action to activate the saga that fetches the stories from the Hacker News platform. Connect the SearchStories component to make the dispatch functionality available.
const mapDispatchToProps = (dispatch) => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchStories);