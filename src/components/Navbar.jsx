import { Link } from "react-router-dom";
import { FiltroData } from "../context/global/global.context";
import '../App.css';
import  Image  from '../images/pokeapi.png';


const Navbar = () => {


    return (
        <div className="header">

                <center>
                <div>
                    <img className="imgNavbar" src={Image} alt="" />
                </div>
                <div className="btns-navbar">
                <Link className="btn-home" to="/">Home</Link>
                <Link className="btn-pokemones" to="/Pokemones">Pokemones</Link>
                <Link className="btn-about" to="/About">About</Link>
                </div>

                {/* <button >Home</button>
                <button>Pokemones</button>
                <button>About</button> */}
                {/* <FiltroData></FiltroData> */}
                </center>
            </div>
    )
}

export default Navbar;