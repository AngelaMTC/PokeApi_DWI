import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const PokemonId = (props) => {
    const { pokemon } = props;
    const id = window.location.pathname.split('/');
    // const [pokemon, setPokemon] = useState([{}]);
    const { t } = useTranslation();
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id[2]}`).then(data => {
            setPokemons(data.data);
        });
    }, [])

    return (

        <div className="pokemonsIds">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div>
                <center>
                <div className="pokemon-card-id">
                    <div className="card">
                        <div className="card-info-id">
                            <h3>{pokemons.name}</h3>
                            <div>#{pokemons.id}</div>
                        </div>
                        <div className="pokemon-img-id">
                            <img src={pokemons.sprites ? pokemons.sprites.front_default : ''} alt={pokemon ? pokemon.name : ''} />
                        </div>
                        <div>
                            <div className="pokemon-type-id">
                                {pokemons.types && pokemons.types.map((type, idx) => {
                                    return (
                                        <div key={idx} className="pokemon-type-text-id">
                                            {type.type.name}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="btn-return-div">
                                {/* <button className="backMenu">Volver</button> */}
                                <Link className="btn-return" to="/pokemons">{t("Return")}</Link>

                            </div>
                        </div>
                    </div>
                </div>
                </center>
            </div>
        </div>
    )
}

export default PokemonId;