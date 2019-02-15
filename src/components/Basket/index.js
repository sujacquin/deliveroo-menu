import React from "react";
import './index.css'


class Basket extends React.Component {



    render() {
        return (<div className="Basket">
            <button> Valider mon panier
            </button>
            <div>Votre panier est vide</div>
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