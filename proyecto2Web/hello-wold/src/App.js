import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from './logo.svg';
import './App.css';
const responseFacebook = (response) => {
      console.log(response);
      fetch('http://192.168.0.15:5000/users?userID='+response.userID)
    .then((responsee) => {
        return responsee.json();
    })
    .then((recurso) => {
        console.log("recurso",recurso)
    })
  };
class App extends Component {


  render() {
    return (



<section>
    <header>
        <div className="header-content">
            <div className="header-content-inner">
                <h1 id="homeHeading">Bienvenidos a Mis Pollas</h1>

                <p>¿Estás cansado de tener que utilizar excel? ¿Gestionar los marcadores? ¿Determinar quien ha pagado, quien no? ¿Que tengas que usar cash? ¿Ademas no poder saber quien ha apostado? Vamos a crear una nueva forma de hacer tus pollas de manera social y utilizando las facilidades tecnológicas!</p>
                <FacebookLogin appId="1298913943519790" autoLoad={true} fields="name,email,picture" callback={responseFacebook}/>

            </div>
        </div>
    </header>
</section>



    );
  }
}

export default App;
