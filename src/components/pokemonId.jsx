import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const PokemonId = (props) => {
    const { pokemon } = props;
    const { i18n, t } = useTranslation();

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
                <div>
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {/* <button className="backMenu">Volver</button> */}
                        <Link className="btn-home" to="/Home">{t("Return")}</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonId;