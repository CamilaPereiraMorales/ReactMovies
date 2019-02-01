import React, {Component} from 'react';
import Movie from '../Movie/Movie';


const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=b4019af5386be72080562b118b808124';

class Favoritos extends Component{

    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            loading:false,
            error:false
        };
    }

    async componentDidMount() {
        try {
          this.setState({loading: true, error: false });
          const response = await fetch(url);
          const responseJson = await response.json();
          const movies = responseJson.results.slice(0,5);
          console.log("aqui deberia estar el fetch",movies);
          this.setState({movies, loading: false, error: false });
          
          
        } catch(e) {
          this.setState({ loading: false, error: true })
        }
    
      }

    render(){
        const {movies,loading,error}=this.state;
        return(
            <div>
               
                {!loading && movies.map(movie=><Movie movie={movie} key={movie.id}/>)}
                {loading && 
                <p>Cargando</p>
                }
                {!loading && error && 
                <p>Algo ocurre</p>
                }
                {!loading && !error && !movies &&
                <p>No hay informacion </p>
                }
            </div>
        )
    }
}

export default Favoritos;