import React from "react";
import { Link } from "react-router-dom";
import {getPokemonesData} from '../Api';

import { useTranslation } from 'react-i18next';
import PokemonId from "./pokemonId";


const Pokemon = (props) => {
    const { pokemon } = props;
    const { t } = useTranslation();
    

    return (
        <div className="pokemon-card">

            <div className="pokemon-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card">
                <div className="card-info">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                {/* <div> */}
                {/* <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div> */}
                {/* <div> */}
                {/* <button className="infoPoke">{t("Information")}</button> */}
                {/* <Link href={{pathname: '/pokemons/:pokemonId', query: {id: pokemon.id}}} className="infoPoke" to="/pokemons/PokemonId">{t("Information")}</Link> */}
                <Link  onClick={(e) => {window.location.href=`/pokemons/${pokemon.id}`}}className="infoPoke" to="/pokemons/:pokemonId">{t("Information")}</Link>

                {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Pokemon;