import React from "react";
import './index.css'
import LinesEllipsis from 'react-lines-ellipsis'

class Card extends React.Component {



    renderImage() {
        if (this.props.img) {
            return (<img src={this.props.img} alt="" />)
        }

    }

    renderCard() {

        for (let i = 0; i < this.props.basket.length; i++) {

            if (this.props.title === this.props.basket[i].name) {

                return (<div className="cardClicked" onClick={() => this.props.addItem({ name: this.props.title, price: this.props.price, id: this.props.id })} >
                    <div className="description"><h2>{this.props.title}</h2>
                        <LinesEllipsis style={{ padding: "0" }} className="description" text={`${this.props.basket[i].quantity}x ${this.props.desc}`}
                            maxLine='2'
                            ellipsis='...'
                            trimRight
                            basedOn='words' />
                        <h2 style={{ color: "#838585" }}>{this.props.price} €</h2></div>
                    {this.renderImage()}
                </ div>)
            }

        }

        return (<><div className="card" onClick={() => this.props.addItem({ name: this.props.title, price: this.props.price })} >
            <div className="description"><h2>{this.props.title}</h2>
                <LinesEllipsis style={{ padding: "0" }} className="description" text={this.props.desc}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='words' />
                <h2 style={{ color: "#838585" }}>{this.props.price} €</h2></div>
            {this.renderImage()}
        </ div></>)
    }




    render() {
        return (<div>{this.renderCard()}</div>)
    }
}



export default Card;
