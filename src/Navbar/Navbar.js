import Navbar, {Component} from 'react';

class Navbar extends Component {
    render(){
        return(
            <div className="Navbar">
                <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwis94u705jgAhU2EbkGHYgJBkYQjRx6BAgBEAU&url=https%3A%2F%2Fes.pngtree.com%2Ffreepng%2Fmovie-recording-logo_3121265.html&psig=AOvVaw1j0pLaK755aAQ9yYqa_0EL&ust=1549045806853435"></img>
                <a href="/#estrenos">Estrenos</a>
                <a href="/#favoritos">Favoritos</a>
            </div>
        )
    }
}

export default Navbar