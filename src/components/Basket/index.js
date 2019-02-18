import React from "react";
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle, faMinusCircle, faInfoCircle)


class Basket extends React.Component {

    state = {
        delivery: 2.5,
        service: 0.2,
        tips: 0.00,
        isService: false,
        isDelivery: false
    }

    handleClick = async (event) => {
        if (event === "delivery") {
            const status = this.state.isDelivery ? false : true;
            await this.setState({ isDelivery: status })

        } else {
            const status = this.state.isService ? false : true;
            await this.setState({ isService: status })

        }
    }



    addTip = async (event) => {

        if (event === "minus") {
            if (this.state.tips > 0) {
                await this.setState({ tips: this.state.tips - 1 })
            }

        } else {
            await this.setState({ tips: this.state.tips + 1 })
        }
    }

    renderDeliveryInfo = () => {
        if (this.state.isDelivery) {
            return <div className="infomessage">Ce montant peut varier en fonction d’éléments tels que la distance et la durée de livraison.</div>
        }
    }

    renderServiceInfo = () => {
        if (this.state.isService) {
            return <div className="infomessage">Ce montant peut varier en fonction d’éléments tels que la distance et la durée de livraison.</div>
        }
    }






    renderBasket() {

        if (this.props.basket.length === 0) {
            return (<div className="Basket">
                <button> Valider mon panier
            </button>
                <span className="empty"> Votre panier est vide</span></div>)
        } else {
            return (<div className="Basket">
                <button className="full"> Valider mon panier
            </button>
                <div className="container">
                    {this.props.basket.map((item, index) => {

                        return (<span className="item">

                            <span className="icon"><FontAwesomeIcon icon="minus-circle" style={{ color: "#00CCBC" }} onClick={() => { this.props.handleClick("minus", item.name) }} /> {item.quantity} <FontAwesomeIcon icon="plus-circle" style={{ color: "#00CCBC" }} onClick={() => { this.props.handleClick("plus", item.name) }} /></span>
                            <span style={{ alignSelf: "Start" }}>{item.name}</span>
                            <span>{(item.price * item.quantity).toFixed(2)}€</span>
                        </span>)
                    })

                    }
                    < div className="text" style={{ color: "#33D6C7" }}> Précisez vos allergies
                        </div>
                    <div className="intermediate">
                        <div>{this.renderDeliveryInfo()}</div>
                        <div>{this.renderServiceInfo()}</div>
                        <div className="text"><span>Sous-total</span> <span>{(this.props.total).toFixed(2)}€</span></div>
                        <div className="text"><span>Frais de livraison</span><span><FontAwesomeIcon icon="info-circle" style={{ color: "#ABADAD" }} onClick={() => this.handleClick("delivery")} />{this.state.delivery.toFixed(2)}€</span></div>
                        <div className="text"><span>Frais de service</span><span><FontAwesomeIcon icon="info-circle" style={{ color: "#ABADAD" }} onClick={() => this.handleClick("service")} />{this.state.service.toFixed(2)}€</span></div>
                    </div>
                    <div className="total">
                        <div className="text"><span>Pourboire livreur</span><span> <FontAwesomeIcon icon="minus-circle" style={{ color: "#00CCBC" }} onClick={() => { this.addTip("minus") }} /><FontAwesomeIcon icon="plus-circle" style={{ color: "#00CCBC" }} onClick={() => { this.addTip("plus") }} />{this.state.tips.toFixed(2)}€</span></div>
                        <div className="text" style={{ fontWeight: "600" }}><span>Total</span><span>{(this.state.delivery + this.state.tips + this.props.total).toFixed(2)}€</span></div>
                    </div></div>
            </div >
            )
        }

    }

    render() {

        return (<div>
            {this.renderBasket()}
        </div>)

    }
}

export default Basket;



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