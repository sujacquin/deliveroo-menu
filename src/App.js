import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";




class App extends Component {

  state = {
    restaurant: {},
    menu: {},
    basket: [],
    total: 0

  }

  async componentDidMount() {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");

    await this.setState(response.data);

  }

  handleClick = async (event, item) => {
    const newBasket = [...this.state.basket];

    const itemExist = newBasket.filter((x) => x.name === item)
    const index = newBasket.indexOf(itemExist[0]);

    if (event === "plus") {
      newBasket[index].quantity = itemExist[0].quantity + 1;
    } else {

      newBasket[index].quantity = itemExist[0].quantity - 1;
      if (newBasket[index].quantity === 0) {
        newBasket.splice(index, 1);
      }

    }

    let totalBasket = 0;
    newBasket.forEach(x => totalBasket = totalBasket + x.price * x.quantity);

    await this.setState({ basket: newBasket, total: totalBasket })


  }

  addItem = async (item) => {
    const newBasket = [...this.state.basket];

    const itemExist = newBasket.filter((x) => x.name === item.name)
    const index = newBasket.indexOf(itemExist[0]);


    if (itemExist.length > 0) {
      newBasket[index].quantity = itemExist[0].quantity + 1;

    } else {
      newBasket.push({
        name: item.name,
        quantity: 1,
        price: Number(item.price),
        id: item.id
      })
    }

    let totalBasket = 0;
    newBasket.forEach(x => totalBasket = totalBasket + x.price * x.quantity);

    await this.setState({ basket: newBasket, total: totalBasket })



  }

  render() {
    return (<>
      <Header restaurant={this.state.restaurant} />
      <Menu sections={Object.keys(this.state.menu)} info={this.state.menu} basket={this.state.basket} total={this.state.total} handleClick={this.handleClick} />


      {/* Map pour trouver remplir sections */}

      <ul>{Object.keys(this.state.menu).map((section, index) => {
        if (this.state.menu[section].length > 0) {
          return (<Section key={index} name={section} id={section} info={this.state.menu[section]} addItem={this.addItem} basket={this.state.basket} />)
        }

      })}
      </ul>
    </>);
  }
}



export default App;
