import React from "react";
import './index.css'
import Card from "../Card";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class Section extends React.Component {
    state = {
        menu: this.props.info
    }



    render() {
        return (<div className="section" name={this.props.name}><h1>{this.props.name}</h1>
            <div className="cards">
                {this.state.menu.map((x, index) => {
                    return (<Card key={index} title={x.title} desc={x.description} price={x.price} img={x.picture} addItem={this.props.addItem} />)
                })}
            </div></div>)
    }
}

export default Section;