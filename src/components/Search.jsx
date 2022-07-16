import React from "react";
import { useTranslation } from 'react-i18next';

const { useState } = React;


const Search = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="search-container">
      <div className="search">
        <input placeholder={t("Search among all pokemon... (Please put the full name).")} onChange={onChange} />
      </div>
      <div className="search-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Search;
