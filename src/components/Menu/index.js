import React from "react";
import './index.css';
import Basket from "../Basket";
import scrollToComponent from 'react-scroll-to-component';



class Menu extends React.Component {
    state = {
        section: ""
    }

    onClick = async (category) => {
        await this.setState({ section: category })

    }

    render() {
        return <div className="menuSection"><ul className="menu">
            {this.props.sections.map((section, index) => {
                if (this.props.info[section].length > 0) {
                    return <li className="link" key={index}
                        onClick={() => scrollToComponent(this.props.id, { offset: 0, align: 'top', duration: 1500 })}>{section}</li>
                } else { }
            })}
        </ul>
            <Basket />
        </div>
    }




}

export default Menu;