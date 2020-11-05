//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import React from 'react';

import Home from './components/Home';
//import ListaSeries from './components/ListaSeries';
import Description from './components/Description';
import Seasons from './components/Seasons'

function App() {
  return (
    <Router>
      {/**switch me va a permitir identificar el url y pintar el componente adecuado */}
      <Switch>
        {/**Adentro del switch siempre va al router */}
        
        <Route exact path="/serie/:idSerie">
          <Description />
        </Route>

        <Route exact path="/serie/:idSerie/seasons">
          <Seasons />
        </Route>


        <Route exact path="/">
          {/**cuando entren al path "/" debe de puntar el componente Home */}
          <Home />
        </Route>

        
        
      </Switch>

    </Router>
  );
}

export default App;




/*
Consumir https://www.tvmaze.com/api
Y hacer un buscador de series.
La primera pantalla debe de preguntar que serie quieres buscar, 
una vez escrito en el input el buscador debe de dar los posibles resultados listados.
Cuando selecciones una serie debe de existir un link único /serie/:idSerie
Primera sección: Mostrar información general de la serie, foto, resumen, etc
Segunda sección: Debe de mostrar todos los episodios divididos por temporadas.
Tercera  sección: Debe de mostrar los personajes y nombre de actores (Con foto)
Usar eslint y proptypes
Puedes darte una idea en https://www.tvmaze.com/  no tiene que ser igual pero 
la idea es mostrar la información.
 */