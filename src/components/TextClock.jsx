import React, {Component} from "react";

export default class TextClock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval (() => this.tictac(), 1000);
    // console.log(this)
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  tictac() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <p className="text-uppercase text-center text-break m-4 fs-3">
          On est le {this.state.date.toLocaleDateString()} Il est {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    )
  }
}
