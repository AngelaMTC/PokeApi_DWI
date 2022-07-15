import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";



const PokemonId = (props) => {
    const { pokemon } = props;
    const { t } = useTranslation();

    return (

        <div className="pokemonsIds">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div>
                <div className="pokemon-card">
                    <div className="pokemon-img">
                        {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
                    </div>
                    <div className="card">
                        <div className="card-info">
                            {/* <h3>{pokemon.name}</h3> */}
                            {/* <div>#{pokemon.id}</div> */}
                        </div>
                        <div>
                            <div className="pokemon-type">
                                {/* {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })} */}
                            </div>

                            <div>
                                {/* <button className="backMenu">Volver</button> */}
                                <Link className="btn-return" to="/pokemons">{t("Return")}</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonId;