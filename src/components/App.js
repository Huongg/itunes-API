import React, { Component } from 'react';
import Slider from './carousel/Slider';
const api_call_helpers = require("../utils/api_call_helpers");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top10: [],
      topSongs: []
    }
  }

  componentDidMount() {
    const URL = "https://itunes.apple.com/gb/rss/topalbums/limit=100/json";
    fetch(URL)
      .then(results => {
            return results.json();
      }).then(data => {
            let top10 = api_call_helpers.getTop10Songs(data.feed.entry);
            this.setState({
              top10: top10,
              topSongs: data.feed.entry.slice(10)
            })
      })
  }

  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <h1> Hello </h1> 
          <Slider 
            top10={this.state.top10}
          />
        </header> 
      </div>
    );
  }
}

export default App;