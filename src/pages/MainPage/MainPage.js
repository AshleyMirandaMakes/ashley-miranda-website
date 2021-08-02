import './MainPage.scss';
import { Component } from 'react';
import Card from "../../components/Card/Index";

class MainPage extends Component {
  state = {

  }

  render() {
    return (
      <main>
        <h1>Hi from the MainPage </h1>
        <Card />
      </main>
    )
  }
}


export default MainPage;