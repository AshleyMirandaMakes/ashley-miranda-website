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
          <div className="card__face" onClick={this.handleClickedCard}>
            <hi>
              Card Front
            </hi>
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