import React, {Component} from 'react';
import '../Movie/Movie.css';


class Movie extends Component {
    render(){
        return(
            <div className="movieContainer" movie={this.props.movie} key={this.props.movie.id}>
                <h1 className="estrenos">Estrenos</h1>
                
                <img className="poster" src={`https://image.tmdb.org/t/p/original${this.props.movie.poster_path}`}></img>
                <h4>{this.props.movie.title}</h4>
                <p>{this.props.movie.release_date}</p> 
               
            </div>
        )
    }
}


export default Movie;