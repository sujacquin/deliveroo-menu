import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";




class App extends Component {

  state = {
    restaurant: {},
    menu: {}
  }

  async componentDidMount() {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");

    await this.setState(response.data);



  }


  render() {
    return (<>
      <Header restaurant={this.state.restaurant} />
      <Menu sections={Object.keys(this.state.menu)} info={this.state.menu} />


      {/* Map pour trouver remplir sections */}

      <ul>{Object.keys(this.state.menu).map((section, index) => {
        if (this.state.menu[section].length > 0) {
          return (<Section key={index} name={section} id={section} info={this.state.menu[section]} />)
        }

      })}
      </ul>
    </>);
  }
}



export default App;
