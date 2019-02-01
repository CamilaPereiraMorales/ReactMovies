import React, {Component} from 'react';
import '../Sidenav/Sidenav.css'

class Sidenav extends Component{
    render(){
        return (
            <div className="col3 sidenavContainer">
            <img id="logo"src="https://thumbs.dreamstime.com/b/un-logotipo-de-la-pel%C3%ADcula-35102546.jpg"/><br></br>
                <a href="/#estrenos">Estrenos</a><br></br>
                <a href="/#favoritos">Favoritos</a>
                
            </div>
        )
    }
}


export default Sidenav;