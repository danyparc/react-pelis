import React, { Component } from 'react'
import axios from 'axios';
import CardPeli from './CardPeli';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            peliculas: []
         }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/pelicula')
            .then(response=>{
                console.log('Get', response);
                this.setState({peliculas: response.data})
            })
    }   


    render() {
        return ( 
            <div className="row ml-5">
                {
                    this.state.peliculas.length > 0
                    ?
                    this.state.peliculas.map(peli=>{
                        return <CardPeli pelicula={peli}/>
                    })
                    : <p>Cargando...</p>
                }
            </div>
        );
    }
}
 
export default Peliculas;