import './App.css';
import React from "react";
import Pokedex from './components/Pokedex';
import { getPokemones, getPokemonesData, searchPokemon } from './Api';
import Search from './components/Search';
import { FiltroConsumer, FiltroData, FiltroProvider } from './context/global/global.context';
import { useEffect, useState } from "react";

// GlobalContext:
import { useTranslation } from 'react-i18next';
//import { GlobalContext } from './context/global/global.context';

export default () => <FiltroProvider>
  <FiltroConsumer />
  <App />
</FiltroProvider>

const App = () => {
  const filter = FiltroData();
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const { i18n, t } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  console.log(i18n.language);

  const fetchPokemones = async () => {
    try {
      const data = await getPokemones(10, 10 * page);
      // setPokemons(data.results);
      const promises = data.results.map( async (pokemon) => {
        return await getPokemonesData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotal(Math.ceil(data.count/ 10))
    } catch (err) {}
  }

  useEffect(() => {
    if (!searching) {
      fetchPokemones();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemones();
    }
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setSearching(false);
  };


  return (

    <div className='App'> 
    
      {/* <Search onSearch={onSearch}/> {notFound ? (<div className="not-found-text"> No se encontró el Pokemon. </div>) :  */}
      <Pokedex pokemons={pokemons} page={page} setPage={setPage} total={total}/> 
      {/* <div className='btn-language'>
    <button className={`App-link ${ i18n.language === "es" ? "selected" : "unselected"}`} onClick={() => changeLanguage("es")}>Español</button>
    <button className={`App-link ${ i18n.language === "en" ? "selected" : "unselected"}`} onClick={() => changeLanguage("en")}>Inglés</button>
  
    </div> */}
    </div>
    
  )
}