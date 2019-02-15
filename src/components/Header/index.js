import React from "react";
import './index.css'

class Header extends React.Component {
    render() {
        return (<div style={{ backgroundColor: "white" }}>
            <div className="header">
                <div>
                    <h1>{this.props.restaurant.name}</h1>
                    <p>{this.props.restaurant.description}</p>
                </div>
                <img src={this.props.restaurant.picture} alt="restaurantImage" />
            </div></div>
        )
    }
}

export default Header;