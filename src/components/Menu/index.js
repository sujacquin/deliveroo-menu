import React from "react";
import './index.css';
import Basket from "../Basket";
import scrollToComponent from 'react-scroll-to-component';
import { Link } from "react-scroll"


class Menu extends React.Component {
    state = {
        section: ""
    }


    render() {
        return <div className="menuSection"><ul className="menu">
            {this.props.sections.map((section, index) => {
                if (this.props.info[section].length > 0) {
                    return <Link activeClass="active" to={section} spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} className="link" key={index}
                        onClick={() => scrollToComponent(this.props.id, { offset: 0, align: 'top', duration: 1500 })}>{section}</Link>
                }
            })}
        </ul>
            <Basket basket={this.props.basket} total={this.props.total} handleClick={this.props.handleClick} />
        </div>
    }




}

export default Menu;