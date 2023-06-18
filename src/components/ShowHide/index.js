// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  onSecond = () => {
    console.log('start')
    this.setState(prevState => ({lastCard: !prevState.lastCard}))
  }

  onFirst = () => {
    this.setState(prevState => ({firstCard: !prevState.firstCard}))
  }

  render() {
    const {firstCard, lastCard} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="container">
            <button type="button" className="button" onClick={this.onFirst}>
              Show/Hide Firstname
            </button>

            {firstCard && <p className="pera">Joe</p>}
          </div>
          <div className="container">
            <button type="button" className="button" onClick={this.onSecond}>
              Show/Hide Lastname
            </button>

            {lastCard && <p className="pera">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
