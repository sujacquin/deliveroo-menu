import React from "react";
import './index.css'
import LinesEllipsis from 'react-lines-ellipsis'

class Card extends React.Component {

    renderImage() {
        if (this.props.img) {
            return (<img src={this.props.img} />)
        }

    }
    render() {
        return (<div className="card" onClick={() => this.props.addItem({ name: this.props.title, price: this.props.price })} >
            <div className="description"><h2>{this.props.title}</h2>
                <LinesEllipsis style={{ padding: "0" }} className="description" text={this.props.desc}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='words' />
                <h2 style={{ color: "#838585" }}>{this.props.price} €</h2></div>
            {this.renderImage()}
        </ div>)

    }
}

export default Card;



// state = {
//     menu: this.props.info
// }


// render() {
//     return (<><h1>{this.props.name}</h1>

//         {this.state.menu.map((x, index) => {
//             return (<p key={index}>{x.title}</p>)
//         })}
//     </>)
// }
// }