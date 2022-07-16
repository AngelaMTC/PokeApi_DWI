import React from "react";
// import t from '../App';
import { useTranslation } from 'react-i18next';

const Pagination = (props) => {

    const {onAnteriorClick, onSiguienteClick, page, totalPages} = props;

    const { t } = useTranslation();


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

            
        </div>
    )
}

export default Pagination;