import React  from 'react';
import ListaDeNotas from './components/ListaDeNotas'
import FormularioDeCadatro from './components/FormularioDeCadatro'
import { Component } from 'react/cjs/react.development';

class  App extends Component {
    render(){
    return (
      <section>
        <FormularioDeCadatro/>
        <ListaDeNotas/>
      </section>
    )
  }
}

export default App;
