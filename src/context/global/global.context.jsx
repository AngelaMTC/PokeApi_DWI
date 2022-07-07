import React, { useContext } from "react";
import { useState } from "react";

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
    return(          
        <div className="container-filter">
            <center>
            <input style={{borderRadius: '15px', height: '35px', border: 'solid', paddingLeft: '15px', width: '300px'}} placeholder="Buscar pokemon" type="text" onChange={(e) => setDatosBusqueda(e.target.value)}/>        
            </center>
        </div>                
    )
}

export function FiltroData() {
    const data = useContext(FiltroContext);
    return data;
}