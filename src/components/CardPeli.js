import React, { Component } from 'react'
class CardPeli extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="card mt-5 mr-3" style={{maxWidth: 300}} >
                <img src={this.props.pelicula.portadas[0]} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.pelicula.titulo}</h5>
                    <p className="card-text">
                        <strong>Sinopsis:</strong> {this.props.pelicula.sinopsis}
                    </p>
                    <p className="card-text">
                        Director(xs): 
                    </p>
                </div>
            </div>
        );
    }
}
 
export default CardPeli;