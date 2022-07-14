import { Link } from "react-router-dom";
import { FiltroData } from "../context/global/global.context";
import '../App.css';
import  Image  from '../images/pokeapi.png';
import { changeLanguage } from "../App";
import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const { i18n, t } = useTranslation();


    return (
        <div className="header">

                <center>
                <div>
                    <img className="imgNavbar" src={Image} alt="" />
                </div>
                <div className="btns-navbar">
                <Link className="btn-home" to="/">{t("Home")}</Link>
                <Link className="btn-pokemones" to="/Pokemones">{t("Pokemons")}</Link>
                <Link className="btn-about" to="/191243">{t("About")}</Link>
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