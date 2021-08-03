import './Card.scss';
import { Component } from 'react';

class Card extends Component {
  state = {
    clicked: false
  }

  handleClickedCard = () => {
    this.setState(previousState => {
      return {
        clicked: !previousState.clicked
      }
    })
  }

  render() {
    let frontCard = (
      <section className="card">
        <div className="card__container">
          <div className="card__face">
            <h1 className="card__header">
              HEY
            </h1>
            <h3 className="card__details">This is my business "card". Let's <span className="card__details--special" onClick={this.handleClickedCard}>talk!</span></h3>
          </div>
        </div>
      </section>
    )

    let backCard = (
      <div className="card" onClick={this.handleClickedCard}>
        <hi>
          Card Back
        </hi>
      </div>
    )

    return (
     !this.state.clicked? frontCard : backCard
    )
  }
}



export default Card;