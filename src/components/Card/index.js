import React from "react";
import './index.css'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class Card extends React.Component {



    renderImage() {
        if (this.props.img) {
            return (<img src={this.props.img} alt="" />)
        }

    }

    renderClass = (classe, quantity) => {
        return (<div className={classe} onClick={() => this.props.addItem({ name: this.props.title, price: this.props.price, id: this.props.id })} >
            <div className="description"><h2>{this.props.title}</h2>
                <ResponsiveEllipsis style={{ padding: "0" }} className="description" text={(quantity) ? `${quantity}x ${this.props.desc}` : this.props.desc}
                    maxLine={2}
                    ellipsis='...'
                    trimRight
                    basedOn='letters' />
                <h2 style={{ color: "#838585" }}>{this.props.price} €</h2></div>
            {this.renderImage()}
        </ div>)

    }
    renderCard() {

        for (let i = 0; i < this.props.basket.length; i++) {
            if (this.props.title === this.props.basket[i].name) {
                return (<>{this.renderClass("cardClicked", this.props.basket[i].quantity)}</>)

            }

        }

        return (<>{this.renderClass("card")}</>)
    }

    render() {
        return (<>{this.renderCard()}</>)
    }
}



export default Card;
