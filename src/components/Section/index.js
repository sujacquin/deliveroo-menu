import React from "react";
import './index.css'
import Card from "../Card";




class Section extends React.Component {



    render() {
        return (<div className="section" name={this.props.name}><h1>{this.props.name}</h1>
            <div className="cards">
                {this.props.info.map((x, index) => {

                    return (<Card key={x.id} title={x.title} desc={x.description} price={x.price} img={x.picture} addItem={this.props.addItem} basket={this.props.basket} info={this.props.info} />)

                }


                )}
            </div></div>)
    }
}

export default Section;