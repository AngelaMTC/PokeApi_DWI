import React from "react";
// import t from '../App';
import { useTranslation } from 'react-i18next';

const Pagination = (props) => {

    const {onAnteriorClick, onSiguienteClick, page, totalPages} = props;

    const { i18n, t } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

    return (
        <div className="pagination">
            <button onClick={onAnteriorClick} className="btn-anterior">
                {/* <div>{t("Previous")}</div> */}
                <div>{t("Previous")}</div>
            </button>

            <div className="paginas"><h2>{page} de {totalPages}</h2></div>

            <button onClick={onSiguienteClick} className="btn-siguiente">
                <div>{t("Next")}</div>
            </button>

            <div className='btn-language'>
    <button className={`App-link ${ i18n.language === "es" ? "selected" : "unselected"}`} onClick={() => changeLanguage("es")}>Español</button>
    <button className={`App-link ${ i18n.language === "en" ? "selected" : "unselected"}`} onClick={() => changeLanguage("en")}>Inglés</button>
  
    </div>
        </div>
    )
}

export default Pagination;