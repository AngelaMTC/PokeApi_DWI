import { Link } from "react-router-dom";
import { FiltroData } from "../context/global/global.context";
import '../App.css';
import  Image  from '../images/pokeapi.png';
import { changeLanguage } from "../App";
import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const { i18n, t } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }


    return (
        <div className="header">

<div className='btn-language'>
    <button id="btn-es" className={`App-link ${ i18n.language === "es" ? "selected" : "unselected"}`} onClick={() => changeLanguage("es")}>Español</button>
    <button id="btn-en" className={`App-link ${ i18n.language === "en" ? "selected" : "unselected"}`} onClick={() => changeLanguage("en")}>Inglés</button>
  
    </div>
                <center>
                <div>
                    <img className="imgNavbar" src={Image} alt="" />
                </div>
                <div className="btns-navbar">
                <Link className="btn-home" to="/">{t("HOME")}</Link>
                <Link className="btn-pokemones" to="/pokemons">{t("Pokemons")}</Link>
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