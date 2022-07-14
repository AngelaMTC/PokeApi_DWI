import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useTranslation } from 'react-i18next';



const FiltroContext = React.createContext({
    datosBusqueda: "",
    setDatosBusqueda: () => {}, 
});



export function FiltroProvider(props) {
    const [datosBusqueda, setDatosBusqueda] = useState("");
    const filter = React.useMemo(() => ({
        datosBusqueda, setDatosBusqueda
    }), [datosBusqueda]);
    

    return (
        <FiltroContext.Provider value={filter} {...props} />
    )
}


export function FiltroConsumer(props) {
    const { datosBusqueda, setDatosBusqueda } = useContext(FiltroContext);
const { i18n, t } = useTranslation();

    return(          
        <div className="container-filter">
            <Navbar></Navbar>
            <center>
            <input className="inputPoke" placeholder={t("Search pokemon...")} type="text" onChange={(e) => setDatosBusqueda(e.target.value)}/>        
            </center>
        </div>                
    )
}

export function FiltroData() {
    const data = useContext(FiltroContext);
    return data;
}