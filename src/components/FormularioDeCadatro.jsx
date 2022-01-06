import React from "react";
import { Component } from "react/cjs/react.development";

 class FormularioDeCadatro extends Component{

    render(){
        return(
            <form>
            <input type="text" placeholder="Titulo" />
            <textarea placeholder="Escreva sua nota"></textarea>
            <button>Criar Nota</button>
          </form>
        )
    }
}

export default FormularioDeCadatro;