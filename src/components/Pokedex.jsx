import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { useSearchParams } from "react-router-dom";

// import Pokemones from "./Pokemones";

const Pokedex = (props) => {
let [searchParams, setSearchParams] = useSearchParams();

    const {pokemons, page, setPage, total} = props;
    // console.log(pokemons);

    const anteriorPagina = () => {
        const siguientePagina = Math.max(page - 1, 0);
        setPage(siguientePagina);
      };
    
      const siguientePagina = () => {
        const siguientePagina = Math.min(page + 1, total - 1);
        setPage(siguientePagina);
      };

    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <h3>Talamantes Castañeda Ángela María ~191243.</h3>
            </div>
            <div><Pagination page={page + 1} totalPages={total} onAnteriorClick={anteriorPagina} onSiguienteClick={siguientePagina}/></div>
            
            <input className="inputSearch" placeholder="Buscar pokemon..." value={searchParams.get("filter") || "" } onChange={(event) => { let filter = event.target.value;
                if(filter) {
                setSearchParams({filter});
                }else{
                    setSearchParams({});
                }
               }} type="text" />
            
            <div className="pokedex-grid">
                {pokemons.filter((pokemon) => {
                    let filter = searchParams.get("filter");
                    if(!filter) return true;
                    let name = pokemon.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                }).map((pokemon, idx) => {
                    return (
                        // <div key={pokemon.name}>#{idx+1}: {pokemon.name}</div>
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokedex;