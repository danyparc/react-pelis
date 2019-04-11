import React, { Component } from 'react'
import axios from 'axios';

class SubirPeli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      anio: 2000,
      sinopsis: '',
      genero:'SCIFI',
      portadas:[],
      directores: {}
    }
  }

  onInputChange = (e)=>{
    console.log(e.target);
    
    const {id, value} = e.target;
    switch (id) {
      case 'portada':
        this.setState({portadas: [value]});
        break;
      case 'director':
        this.setState({directores: [{
          name: value,
          edad: 99,
          nacionalidad: 'OT'
        }]});
        break;
      default:
      console.log('llego id;', id, 'valor:', value );
        this.setState({
          [id]: value
        })
        break;
    }
  }

  postPelicula = (e)=>{
    e.preventDefault();
    console.log('Subiendo...');
    axios.post('http://localhost:3001/pelicula', this.state)
      .then(res=>{
        console.log('Response', res);
        if(res.status === 201){
          alert('Se ha subido la pelicula')
        }
      }).catch(err=>{
        console.log('Hubo un error', err);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <form onSubmit={this.postPelicula}>
              <div className="form-group">
                <label htmlFor="titulo">Titulo</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="titulo" placeholder="Ingrese titulo" />
              </div>
              <div className="form-group">
                <label htmlFor="sinopsis">sinopsis</label>
                <textarea onChange={this.onInputChange} type="text" className="form-control" id="sinopsis" placeholder="Ingrese sinopsis" />
              </div>
              <div class="form-group">
                <label for="genero">Genero</label>
                <select onChange={this.onInputChange} value={this.state.genero} class="form-control" id="genero">
                  <option>SCIFI</option>
                  <option>TERROR</option>
                  <option>DRAMA</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="portada">portada</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="portada" placeholder="Ingrese URL de la imagen" />
              </div>
              <div className="form-group">
                <label htmlFor="director">director</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="director" placeholder="Ingrese nombre" />
              </div>
              <button className="btn btn-success" type="submit">Guardar</button>
            </form>
          </div>
          <div className="col-4">
          <p>titulo: {this.state.titulo}</p>
          <p>anio: {this.state.anio}</p>
          <p>sinopsis: {this.state.sinopsis}</p>
          <p>genero: {this.state.genero}</p>
          <p>portadas: {this.state.portadas[0]}</p>
          <p>directores: {this.state.directores.name}</p>
          </div>
        </div>
      </div>
        );
   }
}
 
export default SubirPeli;