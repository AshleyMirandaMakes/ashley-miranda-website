import './MainPage.scss';
import { Component } from 'react';
import Card from "../../components/Card/Index";

class MainPage extends Component {
  state = {

  }

  render() {
    return (
      <main>
        <div className="mainPage">
        <div className="mainPage__container">
        <Card />
        </div>
        </div>
      </main>
    )
  }
}


export default MainPage;